//add employee
import { connection } from '../db/connection.js'
import inquirer from 'inquirer'
import {init} from '../server.js'

//employee has first and last name, role which is an id, and possibly a manager id
export const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'What is the employee\'s first name?'
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'What is the employee\'s last name?'
        },
        {
            type: 'number',
            name: 'employeeRole',
            message: 'What role willl this employee fill?'
        },
        {
            type: 'number',
            name: 'employeeManager',
            message: 'Who is this employee\'s manager?',
            default: 'NULL'
        }
    ]).then((answers) => {
        connection.connect(function(err) {
        if (err) throw err;
        connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                        VALUES 
                        (?, ?, ?, ?)`, [answers.employeeFirstName, answers.employeeLastName, answers.employeeRole, answers.employeeManager],
            function (err, result, fields) {
              if (err) throw err;
              console.log('Employee Added!');

              setTimeout(init, 2000)
            });
        });
    })
}