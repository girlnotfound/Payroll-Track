// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
// Used blank string to allow for employee information to be entered.
const collectEmployees = function() {
  let employees = [];
  let addEmployee = true;
 
  while (addEmployee) {
    // ask for first name
    const firstName = prompt("What is the employees name?");
    // ask for last name
    const lastName = prompt("What is the employees last name?");
    //  ask for salary
    const salary = prompt("What is the employees salary?");
    // add info to array
    employees.push({
            firstName: firstName,
            lastName: lastName,
            salary: salary,
        });
    // ask if they want to add another employee
    addEmployee = confirm("Would you like to add another employee?");
  }
  return employees;
};

// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  // created an array of the employees salaries
  let totalSalary = 0;
  // round salaries to display the sum
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseInt(employeesArray[i].salary);
  }
  // dividing the total sum by the number of employees to find the average
  const averageSalary = totalSalary / employeesArray.length;
  // display the average salary
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toFixed(2)}`);
};




// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const random = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations to ${employeesArray[random].firstName} ${employeesArray[random].lastName}, our random drawing winner!`);
  }


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
