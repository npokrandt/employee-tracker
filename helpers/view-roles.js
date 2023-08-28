import { connection } from '../db/connection.js'
import {init} from '../server.js'

export const viewRoles = () => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM role", function (err, result, fields) {
          if (err) throw err;
          console.log(result);

          setTimeout(init, 2000)
        });
    });
}