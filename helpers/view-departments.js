import { connection } from '../db/connection.js'
import {init} from '../server.js'

export const viewDepartments = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM department", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });

        setTimeout(init, 2000)
    });
}