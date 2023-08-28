import { connection } from '../db/connection.js'
import {init} from '../server.js'

export const viewEmployees = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM employee", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });

        setTimeout(init, 2000)
    });
}