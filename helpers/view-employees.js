import { connection } from '../db/connection.js'

export const viewEmployees = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM employee", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    });
}