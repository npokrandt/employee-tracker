//add employee
import { connection } from '../db/connection.js'
import inquirer from 'inquirer'
import {init} from '../server.js'

//employee has first and last name, role which is an id, and possibly a manager id

//manager id is optional
//could tag all possible managers (myself being the default)
//modify employee table (add boolean for is_manager)
//add similar thing here to get all manager names
//make a list out of those, including N/A option
//remember to include emp id to put in the proper field!
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

            addManagers(roles)
        });
    });
    
}

const addManagers = roles => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT employee.id, employee.first_name, employee.last_name FROM employee WHERE employee.is_manager = true", function (err, result, fields) {
            let managers = []
            if (err) throw err;
            for (const manager in result){ 
                let managerObj = {
                    id: result[manager].id,
                    firstName: result[manager].first_name,
                    lastName: result[manager].last_name
                }
                managers.push(managerObj)
            }
     
            inquirerAddEmployee(roles, managers)
        });
    });
}

const inquirerAddEmployee = (roleObjs, managerObjs) => {

    let managers = []
    let roles = []

    for (const managerObj in managerObjs){
        const fullName = managerObjs[managerObj].firstName + " " + managerObjs[managerObj].lastName
        managers.push(fullName)
        //fill the new array with just the full names
    }
    managers.push('N/A')

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
            type: 'list',
            name: 'employeeManager',
            message: 'Who is this employee\'s manager?',
            choices: managers
        },
        {
            type: 'confirm',
            name: 'employeeIsManager',
            message: 'Is this person a manager?',
            default: false
        }
    ]).then((answers) => {
        let employeeRoleId;
        for (const roleObj in roleObjs){
            if (answers.employeeRole === roleObjs[roleObj].title){
                employeeRoleId = roleObjs[roleObj].id
            }
        }

        let managerId = answers.employeeManager
        
        connection.connect(function(err) {
            if (err) throw err;
            
            if (managerId === 'N/A'){
                connection.query(`INSERT INTO employee (first_name, last_name, role_id, is_manager) 
                                VALUES 
                                (?, ?, ?, ?)`, [answers.employeeFirstName, answers.employeeLastName, employeeRoleId,  answers.employeeIsManager],
                    function (err, result, fields) {
                      if (err) throw err;
                      console.log('Employee Added!');
        
                      setTimeout(init, 2000)
                });

            } else {

                const names = answers.employeeManager.split(' ')
                for (const managerObj in managerObjs){
                    if (names[0] === managerObjs[managerObj].firstName && names[1] === managerObjs[managerObj].lastName){
                        managerId = managerObjs[managerObj].id
                    }
                }
                connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager) 
                                VALUES 
                                (?, ?, ?, ?, ?)`, [answers.employeeFirstName, answers.employeeLastName, employeeRoleId, managerId, answers.employeeIsManager],
                    function (err, result, fields) {
                      if (err) throw err;
                      console.log('Employee Added!');
        
                      setTimeout(init, 2000)
                    });
                }
            });
            
    })
}