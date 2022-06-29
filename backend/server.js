const express = require('express')
const PORT = process.env.port || 5000
const bodyParser = require('body-parser');
const client = require('./db.js')
const cors = require('cors');

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.get('/store', (req,res) => {
    client.query(`SELECT * , ST_X(geometry::geometry), ST_Y(geometry::geometry) FROM store;`, (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
        client.end
      })
})

app.get('/owner', (req,res) => {
    client.query(`SELECT * from owner;`, (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
        client.end
      })
})

app.get('/top5stores', (req,res) => {
    client.query(`SELECT *, ST_X(geometry::geometry), ST_Y(geometry::geometry) FROM store ORDER BY quantity DESC LIMIT 5`, (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
        client.end
      })
})

app.post('/ownerStore', (req,res) => {
  const {ownerid} = req.body
  client.query('SELECT * from store where owner_id=$1', [ownerid], (err, results) => {
      if(!err){
          res.status(200).json(results.rows)
      } else {
          console.log(err.message)
      }
      client.end
    })
})

const createUser = (body) => {
    return new Promise(function(resolve, reject) {
      const {user, pass} = body
      client.query('INSERT INTO owner (username, password) VALUES ($1, $2)', [user, pass], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new user has been added: ${user, pass}`)
      })
    })
  }
  app.post('/create', (req, res) => {
    createUser(req.body)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error)
    })
  })

app.post('/userlogin', (req,res) => {
  const {user,pass} = req.body
  client.query('SELECT * from owner where username=$1 and password=$2', [user, pass], (err, results) => {
      if(!err){
          res.status(200).json(results.rows)
      } else {
          console.log(err.message)
      }
      client.end
    })
})

app.post("/createStores", (req, res) => {
  const {quantity, price_per_unit, geom_x, geom_y,  name, owner_id} = req.body
  
  client.query(`insert into store (quantity, price_per_unit, geometry, name, owner_id)
  values ($1, $2, ST_MakePoint($3, $4), $5, $6)`, [quantity, price_per_unit, geom_x, geom_y, name, owner_id] , (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
      })
  client.query('UPDATE owner SET store_exists=true WHERE owner_id=$1', [owner_id], (err, results) => {
    if(!err) console.log('Data Altered')
   else console.log(err.message)

  })
  client.end
})

app.put("/filterPrice/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const {price_per_unit} = req.body
  client.query(`UPDATE store SET price_per_unit = $1 WHERE store_id = $2;`, [price_per_unit ,id] , (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
        client.end;
      })
})

app.put("/filterQuantity/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const {quantity} = req.body
  client.query(`UPDATE store SET quantity = $1 WHERE store_id = $2;`, [quantity ,id] , (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
        client.end
      })

})


app.post("/filterQuantity", (req, res) => {
  const {quantity_greater_than, quantity_less_than} = req.body
  client.query(`select *, ST_X(geometry::geometry), ST_Y(geometry::geometry) 
  from store where quantity > $1 and quantity < $2`,
  [quantity_greater_than, quantity_less_than] , (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
        client.end
      })

})

app.post("/filterPrice", (req, res) => {
  const {price_greater_than, price_less_than} = req.body
  client.query(`select *, ST_X(geometry::geometry), ST_Y(geometry::geometry)
  from store where price_per_unit > $1 and price_per_unit < $2`,
  [price_greater_than, price_less_than] , (err, results) => {
        if(!err){
            res.status(200).json(results.rows)
        } else {
            console.log(err.message)
        }
        client.end
      })
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})