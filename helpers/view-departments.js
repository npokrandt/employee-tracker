import { connection } from '../db/connection.js'

export const viewDepartments = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM department", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    });
}