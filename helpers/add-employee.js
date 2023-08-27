//add employee
import { connection } from '../db/connection.js'
//employee has first and last name, role which is an id, and possibly a manager id
export const addEmployee = () => {
    console.log('employee added!')
    // connection.connect(function(err) {
    //     if (err) throw err;
    //     connection.query("SELECT * FROM department", function (err, result, fields) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    // });
}