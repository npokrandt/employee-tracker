//update employee
import { connection } from '../db/connection.js'
import inquirer from 'inquirer'

export const updateEmployeeRole = () => {

    //start by getting the employee names
    getEmployees()
}

const getEmployees = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT employee.first_name, employee.last_name FROM employee", function (err, result, fields) {
            let employees = []
            if (err) throw err;
            for (const employee in result){ 
                employees.push(result[employee].first_name + ' ' + result[employee].last_name)
            }

            getRoles(employees)
        });
    });
}

const getRoles = employees => {
    //get the role names to use in enquirer
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT role.title FROM role", function (err, result, fields) {
            let roles = []
            if (err) throw err;
            for (const role in result){ 
                roles.push(result[role].title)
            }

            inquirerPrompt(employees, roles)
        });
    });
}

const inquirerPrompt = (employees, roles) => {
    inquirer.prompt([
        //ask which employee to update
        {
            type: 'list',
            name: 'employee',
            message: 'Choose the employee whose role will be updated',
            choices: employees,  
        },
        //ask which role to assign them to
        {
            type: 'list',
            name: 'role',
            message: 'Choose the new role for this employee',
            choices: roles,
            default: 'Update Employee Role'   
        }
    ]).then((answer) => {
        console.log(answer)

        setTimeout(init, 2000)
    })
}
//run an update on the employee; role is an int here I think, pointing to an id in role