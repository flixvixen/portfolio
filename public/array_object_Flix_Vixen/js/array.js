function showAll() {
    const list = document.getElementById('list');
    let namelist = "";
    names.forEach(element => {
        namelist += element + "<br/>";
    });
    list.innerHTML = namelist;
}

function add() {
    const empId = document.getElementById('emp_id').value;
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    
    employees.push({ emp_id: empId, name: name, position: position });

    document.getElementById('emp_id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';

    alert('Employee Added!');
}

function showEmployees() {
    
}