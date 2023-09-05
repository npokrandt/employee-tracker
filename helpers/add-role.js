//add role
import { connection } from '../db/connection.js'
import inquirer from 'inquirer'
import {init} from '../server.js'

//role has title, dept and a decimal for salary
export const addRole = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT department.id, department.name FROM department", function (err, result, fields) {
            let departments = []
            if (err) throw err;
            for (const department in result){ 
                let deptObj = {
                    id: result[department].id,
                    name: result[department].name
                }
                departments.push(deptObj)
            }

            inquirerAddRole(departments)
        });
    });
}

const inquirerAddRole = deptObjs => {
    let departments = []

    for (const deptObj in deptObjs){
        departments.push(deptObjs[deptObj].name)
        //fill the new array with just the role titles
    }
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
            type: 'list',
            name: 'roleDept',
            message: 'What department does this role fall under?',
            choices: departments
        }
    ]).then((answers) => {
        let roleDeptId;
        for (const deptObj in deptObjs){
            if (answers.roleDept === deptObjs[deptObj].name){
                roleDeptId = deptObjs[deptObj].id
            }
        }

        connection.connect(function(err) {
        if (err) throw err;
        connection.query(`INSERT INTO role (title, salary, department_id) 
                        VALUES 
                        (?, ?, ?)`, [answers.roleTitle, answers.roleSalary, roleDeptId],
            function (err, result, fields) {
              if (err) throw err;
              console.log('Role Added!');

              setTimeout(init, 2000)
            });
        });
    })
}