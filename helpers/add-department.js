//add department

//fairly straightforward, just the dept name. Might not enforce any canstraints

import { connection } from '../db/connection.js'
import inquirer from 'inquirer'
import {init} from '../server.js'

export const addDepartment = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What department are you adding?'
        }
    ]).then((answer) => {
        connection.connect(function(err) {
        if (err) throw err;
        connection.query(`INSERT INTO department (name) 
                        VALUES 
                        (?)`, [answer.deptName],
            function (err, result, fields) {
              if (err) throw err;
              console.log('Department Added!');

              setTimeout(init, 2000)
            });
        });
    })

}