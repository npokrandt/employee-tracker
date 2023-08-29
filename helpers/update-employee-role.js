//update employee
import { connection } from '../db/connection.js'
import inquirer from 'inquirer'
import {init} from '../server.js'

export const updateEmployeeRole = () => {

    //start by getting the employee names
    getEmployees()
}

const getEmployees = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT employee.id, employee.first_name, employee.last_name FROM employee", function (err, result, fields) {
            let employees = []
            if (err) throw err;
            for (const employee in result){ 
                let employeeObj = {
                    id: result[employee].id,
                    firstName: result[employee].first_name,
                    lastName: result[employee].last_name
                }
                employees.push(employeeObj)
            }

            getRoles(employees)
        });
    });
}

const getRoles = employees => {
    //get the role names to use in enquirer
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT role.id, role.title FROM role", function (err, result, fields) {
            let roles = []
            if (err) throw err;
            for (const role in result){ 
                let roleObj = {
                    id: result[role].id,
                    title: result[role].title
                }
                roles.push(roleObj)
            }

            inquirerPrompt(employees, roles)
        });
    });
}

const inquirerPrompt = (employeeObjs, roleObjs) => {

    let employees = []
    let roles = []

    for (const employeeObj in employeeObjs){
        const fullName = employeeObjs[employeeObj].firstName + " " + employeeObjs[employeeObj].lastName
        employees.push(fullName)
        //fill the new array with just the full names
    }

    for (const roleObj in roleObjs){
        roles.push(roleObjs[roleObj].title)
        //fill the new array with just the role titles
    }
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
        // console.log(answer)
        let roleId;
        let employeeId;
        for (const roleObj in roleObjs){
            if (answer.role === roleObjs[roleObj].title){
                roleId = roleObjs[roleObj].id
            }
        }

        const names = answer.employee.split(' ')
        for (const employeeObj in employeeObjs){
            if (names[0] === employeeObjs[employeeObj].firstName && names[1] === employeeObjs[employeeObj].lastName){
                employeeId = employeeObjs[employeeObj].id
            }
        }

        connection.connect(function(err) {
            if (err) throw err;
            connection.query("UPDATE employee SET employee.role_id = ? WHERE employee.id = ?",[roleId, employeeId], function (err, result, fields) {
                if (err) throw err;
                console.log(result)   
            });
        });

        setTimeout(init, 2000)
    })
}
//run an update on the employee; role is an int here I think, pointing to an id in role