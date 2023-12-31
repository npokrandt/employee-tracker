import 'dotenv/config'
import { options } from './helpers/index.js'
import inquirer from 'inquirer'

const {viewDepartments, viewRoles, viewEmployees, 
       addDepartment, addRole, addEmployee, updateEmployeeRole} = options

export const init = () => {
    //run inquirer
    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 
                      'Add Department', 'Add Role', 'Add Employee',
                      'Update Employee Role', 'Exit']        
        }
    ])
    .then((answer) => {
        if (answer.option !== 'Exit'){
            performAction(answer.option)
        } else {
            console.log('Goodbye!')
            process.exit()
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const performAction = (option) => {
    switch(option){
        case ('View all Departments'):
            viewDepartments()
            break; 
        case ('View all Roles'):
            viewRoles()
            break; 
        case ('View all Employees'):
            viewEmployees()
            break; 
        case ('Add Department'):
            addDepartment()  
            break;    
        case ('Add Role'):
            addRole()  
            break; 
        case ('Add Employee'):
            addEmployee()
            break;  
        case ('Update Employee Role'):  
            updateEmployeeRole()
    }  
}

init()

//view all deprtment
//view all toles
//view all employees
//add dept
//add role
//add employee
//update employee role
//exit:)

// optional:
//Update managers
//view employees by mgr
//view employees by dept
//delete any of the aove
//view budget

// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role


// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 