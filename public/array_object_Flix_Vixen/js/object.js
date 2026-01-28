function showEmployees() {
    const employeeTable = document.getElementById('employee');
    let tableContent = '<thead><tr><td>EMPLOYEE ID</td><td>NAME</td><td>POSITION</td></tr></thead><tbody>';
    
    employees.forEach(emp => {
        tableContent += `<tr><td>${emp.emp_id}</td><td>${emp.name}</td><td>${emp.position}</td></tr>`;
    });

    tableContent += '</tbody>';
    employeeTable.innerHTML = tableContent;
}