//add role
import { connection } from '../db/connection.js'

//role has title, dept and a decimal for salary
export const addRole = () => {
    console.log('role added!')
    // connection.connect(function(err) {
    //     if (err) throw err;
    //     connection.query("SELECT * FROM department", function (err, result, fields) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    // });
}