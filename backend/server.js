const express = require('express')
const PORT = process.env.port || 5000
const bodyParser = require('body-parser');
const client = require('./db.js')
const cors = require('cors');

const app = express()
app.use(cors());

app.get('/store', (req,res) => {
    client.query(`SELECT * , ST_X(geometry::geometry), ST_Y(geometry::geometry) FROM store;`, (err, results) => {
        if(!err){
            res.status(200).json(results.rows);
        } else {
            console.log(err.message);
        }
        client.end;
      })
})

app.get('/owner', (req,res) => {
    client.query(`SELECT * from owner;`, (err, results) => {
        if(!err){
            res.status(200).json(results.rows);
        } else {
            console.log(err.message);
        }
        client.end;
      })
})

app.get('/top5stores', (req,res) => {
    client.query(`SELECT *, ST_X(geometry::geometry), ST_Y(geometry::geometry) FROM store ORDER BY quantity DESC LIMIT 5`, (err, results) => {
        if(!err){
            res.status(200).json(results.rows);
        } else {
            console.log(err.message);
        }
        client.end;
      })
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})