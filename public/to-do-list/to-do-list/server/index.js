import express from 'express';
import { db } from './db.js';

const app = express();
//parse json
app.use(express.json());
const PORT = 3000;

//get-users
app.get('/get-users', (req, res) =>  {
    const query = "SELECT * FROM users";
    db.query(query)
    .then(users => {
        res.status(200).json({ users: users.rows });
    });

});

app.post('/check-user', (req, res) =>  {
    const { user_name, password } = req.body;

    const query = "SELECT * FROM users WHERE user_name=$1 AND password=$2";

    db.query(query, [user_name, password])
    .then(result => {
        if(result.rowCount > 0) {
            res.status(200).json({ exist: true});
        }

        else {
            res.status(200).json({ exist: false});
        }
    });
});

app.post('/register', (req, res) => {
    const { user_name, password, fname, lname } = req.body;

    const query = "INSERT INTO users (user_name, password,fname, lname) VALUES ($1, $2, $3, $4)";
    
    db.query(query, [user_name, password, fname, lname])
    .then(result => {
            res.status(200).json({ success: true});
    });
});

//get-titles
app.get('/get-titles', (req, res) =>  {
    const query = "SELECT * FROM titles";
    db.query(query)
    .then(titles => {
        res.status(200).json({ titles: titles.rows });
    });

});

app.get('/get-lists', (req, res) =>  {
    const query = "SELECT * FROM lists";
    db.query(query)
    .then(lists => {
        res.status(200).json({ lists: lists.rows });
    });

});

//INDEX ROUTE
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/add-titles', (req, res) => {
    const { id, username, title, date_modified, status } = req.body;

    const query = "INSERT INTO titles (id, username, title, date_modified, status) VALUES ($1, $2, $3, $4, $5)";
    
    db.query(query, [id, username, title, date_modified, status])
    .then(result => {
            res.status(200).json({ success: true});
    });
});

app.post('/add-lists', (req, res) => {
    const { id, title_id, list_desc, status } = req.body;

    const query = "INSERT INTO lists (id, title_id, list_desc, status) VALUES ($1, $2, $3, $4)";
    
    db.query(query, [id, title_id, list_desc, status]) 
    .then(result => {
            res.status(200).json({ success: true});
    });
});

app.post('/add-to-do', (req, res) => {
    const { username, title, lists, status } = req.body;
    const date_modified = new Date().toISOString();
  
    const titleQuery = "INSERT INTO titles (username, title, date_modified, status) VALUES ($1, $2, $3, $4) RETURNING id";
    
    db.query(titleQuery, [username, title, date_modified, status])
      .then(result => {
        const title_id = result.rows[0].id;
  
        const listQueries = lists.map(task =>
          db.query("INSERT INTO lists (title_id, list_desc, status) VALUES ($1, $2, $3)", [title_id, task, status])
        );
  
        return Promise.all(listQueries);
      })
      .then(() => {
        res.status(200).json({ success: true, message: "To-Do List added successfully" });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding To-Do List" });
      });
  });


  app.post('/delete-todo', (req, res) => {
    const { title_id } = req.body;
  
    db.query('DELETE FROM lists WHERE title_id = $1', [title_id])
      .then(() => {

        return db.query('DELETE FROM titles WHERE id = $1', [title_id]);
      })
      .then(() => {
        res.status(200).json({ success: true, message: "To-do successfully deleted" });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ success: false, message: "Error deleting To-do" });
      });
  });
  

  app.post('/update-status', (req, res) => {
    const { title_id, list_id, status } = req.body;
  
    const updateStatusQuery = 'UPDATE lists SET status = $1 WHERE title_id = $2 AND id = $3';
    db.query(updateStatusQuery, [status, title_id, list_id])
      .then(() => {
        res.status(200).json({ success: true, message: "List status successfully updated" });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ success: false, message: "Error updating list status" });
      });
  });
  
  app.post('/update-to-do', (req, res) => {
    const { title_id, lists } = req.body;

    const deleteListsQuery = "DELETE FROM lists WHERE title_id = $1";

    db.query(deleteListsQuery, [title_id], (err) => {
        if (err) return res.status(500).json({ success: false, message: "Failed to update lists" });

        const insertListQuery = "INSERT INTO lists (title_id, list_desc, status) VALUES ($1, $2, $3)";
        const status = true;

        lists.forEach(list_desc => {
            db.query(insertListQuery, [title_id, list_desc, status]);
        });

        res.json({ success: true, message: "To-do successfully updated" });
    });
});

  

app.listen(PORT, () => {
    console.log(`Server is runnimg on port ${PORT}`);
});