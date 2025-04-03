const employees = [
  { name: "Alice Johnson", department: "HR" },
  { name: "Bob Smith", department: "Engineering" },
  { name: "Charlie Brown", department: "Marketing" },
  { name: "David Wilson", department: "Engineering" },
  { name: "Eve Adams", department: "HR" },
];

// Get the dropdown element and the list where employees will be shown
const department = document.getElementById("department");
const employeeList = document.getElementById("employeelist");
department.addEventListener("change", (e) => {
  console.log(e.target.value);
  renderemployees(e.target.value);
});
const renderemployees = (data) => {
  employeeList.innerHTML = "";
  const output =
    data === "all"
      ? employees
      : employees.filter((emp) => emp.department === data);
  output.forEach((emp) => {
    const li = document.createElement("li");
    li.textContent = `${emp.name} - ${emp.department}`;
    employeeList.appendChild(li);
  });
};
renderemployees("all")

// // Function to display employees
// function displayEmployees(filteredEmployees) {
//     // Clear the list before adding new items
//     employeeList.innerHTML = "";

//     // Go through each employee in the filtered list and add them to the page
//     for (let i = 0; i < filteredEmployees.length; i++) {
//         // Create a new list item (li) for each employee
//         const li = document.createElement("li");
//         li.textContent = filteredEmployees[i].name + " - " + filteredEmployees[i].department;
//         // Add the list item to the employee list
//         employeeList.appendChild(li);
//     }
// }

// // Function to handle when the user selects a department from the dropdown
// departmentFilter.addEventListener("change", function () {
//     // Get the selected department
//     const selectedDepartment = departmentFilter.value;

//     // If "All" is selected, show all employees
//     if (selectedDepartment === "all") {
//         console.log(employees);
//     } else {
//         // Otherwise, filter employees by the selected department
//         const filteredEmployees = [];
//         for (let i = 0; i < employees.length; i++) {
//             if (employees[i].department === selectedDepartment) {
//                 filteredEmployees.push(employees[i]);
//             }
//         }
//         // Display the filtered employees
//         console.log(filteredEmployees);
//     }
// });

// // Initially display all employees when the page loads
// console.log(employees);
