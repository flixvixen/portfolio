import { useState } from "react";
import axios from "axios"; 

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
//conditional rendering
  const [showError, setshowError] = useState(false);

  const handleLogin = async()  => {
    await axios.post("http://localhost:3000/check-user", {username, password})
    .then((response) => {
      if(response.data.exist) {
        console.log("Ok na to")
      }

      else {
        setshowError(true);
      }
    })
  }

  
  return (
    <>
      <div className="w-screen h-screen bg-blue-950 flex justify-center items-center">
        <div className="w-1/2 h-[600px] bg-blue-400 rounded-[20px] flex justify-center items-center">
          <div className="w-full max-w-md h-[500px] flex justify-center flex-col p-5">
            <h1 className="text-5xl text-center text-white mb-10">Flix</h1>

          { 
          showError && 
          <div className="bg-red-500 text-red-400 p-3 rounded-lg font-medium">
            Invalid username or password
          </div> 
          }

            <div className="mb-5 flex flex-col">
              <label htmlFor="username" className="text-xl">Username:</label>
              <input
                type="text"
                id="username"
                className="outline-none p-3 rounded border border-gray-300" onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-5 flex flex-col">
              <label htmlFor="password" className="text-xl">Password:</label>
              <input
                type="password"
                id="password"
                className="outline-none p-3 rounded border border-gray-300" onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="button" onClick={handleLogin}
              className="bg-sky-950 text-white py-3 font-medium text-lg rounded hover:bg-gray-600 transition-all">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
