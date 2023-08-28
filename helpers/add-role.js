//add role
import { connection } from '../db/connection.js'
import inquirer from 'inquirer'
import {init} from '../server.js'

//role has title, dept and a decimal for salary
export const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'What role are you adding?'
        },
        {
            type: 'number',
            name: 'roleSalary',
            message: 'What is the salary for this role (formatted like "85000.00")?'
        },
        {
            type: 'number',
            name: 'roleDept',
            message: 'What department does this role fall under?'
        }
    ]).then((answers) => {
        connection.connect(function(err) {
        if (err) throw err;
        connection.query(`INSERT INTO role (title, salary, department_id) 
                        VALUES 
                        (?, ?, ?)`, [answers.roleTitle, answers.roleSalary, answers.roleDept],
            function (err, result, fields) {
              if (err) throw err;
              console.log('Role Added!');

              setTimeout(init, 2000)
            });
        });
    })
}