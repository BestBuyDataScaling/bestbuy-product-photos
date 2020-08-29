const express = require("express");
const app = express();
const port = 2019;
const cors = require("cors");
const db = require("../database/indexDB")
const path = require('path')

// use
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')))

//Original Legacy code
// server routing
// app.get("/api/products/:id", (req, res) => {
//   let id = req.params.id
//   db.grabOne(id, (err, product) => {
//     if (err) {
//       console.log("PROBLEM WITH DB", err)
//     } else {
//       console.log("QUERY SUCCESSFUL")
//       res.send(product);
//     }
//   })
// });

// CRUD ROUTES FOR NEW DATABASE
// Create / POST - create a new item
app.post("/api/products/:id", (req, res) => {
  let product = req.body;
// req.body should look like this:
//   {
//     "uniqueID": 999,
//     "name": "productName"
//     "images": [
//        "https://loremflickr.com/320/240/dog",
//        "https://loremflickr.com/320/240/dog",
//        "https://loremflickr.com/320/240/dog"
//     ]
//  }
  db.postFunction(product, (err, result) => {
    if (err) {
      console.log('Error in Database post request')
    } else {
      res.send(result)
    }
  })
});

// Read / GET - read an item
app.get("/api/products/:id", (req, res) => {
  let id = parseInt(req.params.id);
  db.getFunction( id, (err, result) => {
    if (err) {
      console.log('Error in Database get request')
    } else {
      res.send(result)
    }
  })
});

// // Update / PUT - update an item
app.put("/api/products/:id", (req, res) => {
  let newInfo = req.body;
  db.putFunction( newInfo, (err, result) => {
    if (err) {
      console.log('Error in Database update request')
    } else {
      res.send(result)
    }
  })
});

// // Delete / DELETE - delete an item
app.delete("/api/products/:id", (req, res) => {
  let id = req.params.id;
  db.deleteFunction( id, (err, result) => {
    if (err) {
      console.log('Error in Database delete request')
    } else {
      res.send(result)
    }
  })
});

app.listen(port, () => {
  console.log(`productInfo-photos_service listening at ${port}`);
});
