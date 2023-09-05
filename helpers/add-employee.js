//add employee
import { connection } from '../db/connection.js'
import inquirer from 'inquirer'
import {init} from '../server.js'

//employee has first and last name, role which is an id, and possibly a manager id
export const addEmployee = () => {

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

            inquirerAddEmployee(roles)
        });
    });
    
}

const inquirerAddEmployee = roleObjs => {
    let roles = []

    for (const roleObj in roleObjs){
        roles.push(roleObjs[roleObj].title)
        //fill the new array with just the role titles
    }

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
            //change this to a list of all available roles
            type: 'list',
            name: 'employeeRole',
            message: 'What role will this employee fill?',
            choices: roles
        },
        {
            type: 'number',
            name: 'employeeManager',
            message: 'Who is this employee\'s manager?',
            default: 'NULL'
        }
    ]).then((answers) => {
        let employeeRoleId;
        for (const roleObj in roleObjs){
            if (answers.employeeRole === roleObjs[roleObj].title){
                employeeRoleId = roleObjs[roleObj].id
            }
        }

        connection.connect(function(err) {
        if (err) throw err;
        connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                        VALUES 
                        (?, ?, ?, ?)`, [answers.employeeFirstName, answers.employeeLastName, employeeRoleId, answers.employeeManager],
            function (err, result, fields) {
              if (err) throw err;
              console.log('Employee Added!');

              setTimeout(init, 2000)
            });
        });
    })
}