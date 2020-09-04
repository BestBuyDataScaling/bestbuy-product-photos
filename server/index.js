require('newrelic');
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));

const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err);

  app.listen(2019, () => {
    console.log("app working on 2019");
  });

  let dbase = db.db("LegacyFEC");

  app.get("/api/products/:id", (req, res, next) => {
    let id = parseInt(req.params.id);
    dbase.collection("Mongo6").findOne({ uniqueID: id }, (err, results) => {
      if (err) {
        console.log(err);
        res.send("error in get route", err);
      }
      res.send(results);
    });
  });
});
