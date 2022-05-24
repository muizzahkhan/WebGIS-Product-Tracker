const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'productTracker',
  password: 'password',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database!");
});

// client.query(`select * from owner`, (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     client.end;
// })
module.exports = client; 