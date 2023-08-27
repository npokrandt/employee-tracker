//add department

//fairly straightforward, just the dept name. Might not enforce any canstraints

import { connection } from '../db/connection.js'

export const addDepartment = () => {
    console.log('department added!')
    // connection.connect(function(err) {
    //     if (err) throw err;
    //     connection.query("SELECT * FROM department", function (err, result, fields) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    // });
}