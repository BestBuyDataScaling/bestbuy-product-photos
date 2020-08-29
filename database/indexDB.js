// const mongoose = require("mongoose");
// const videoGameData = require("./videoGameData");
// mongoose.connect("mongodb://localhost/front-end-capstone", { useNewUrlParser: true, useUnifiedTopology: true });

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "LegacyFEC";

// Get/Read route function
function getFunction(id, callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (
    err,
    client
  ) {
    assert.equal(null, err);
    console.log("Connected successfully to dataabse to server");
    let db = client.db(dbName);

    db.collection("legacyProducts").findOne(
      { uniqueID: id },
      (findErr, result) => {
        if (findErr) {
          throw findErr;
        }
        callback(null, result);
      }
    );
    // client.close(); - cannot use sessions that ended?
  });
}

// Post/Create route function
function postFunction(product, callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (
    err,
    client
  ) {
    assert.equal(null, err);
    console.log("Connected successfully to dataabse to server");
    let db = client.db(dbName);

    //testing if received data.
    db.collection("legacyProducts").save(product, (findErr, result) => {
      if (findErr) {
        throw findErr;
      }
      callback(null, result);
    });
  });
}

// Put/Update route function
function putFunction(product, callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (
    err,
    client
  ) {
    assert.equal(null, err);
    console.log("Connected successfully to dataabse to server");
    let db = client.db(dbName);

    db.collection("legacyProducts").update(
      { uniqueID: product.uniqueID },
      { $set: { images: product.images } },
      function (findErr, result) {
        if (findErr) {
          throw findErr;
        }
        callback(null, result);
      }
    );
  });
}

function deleteFunction(id, callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to dataabse to server");
    let db = client.db(dbName);

    const query = { uniqueId: id };

    db.collection("legacyProducts")
      .deleteOne(query)
      .then((result) => {
        console.log(`Deleted ${result.deletedCount} item.`);
        callback(null, result);
      })
      .catch((err) => console.error(`Delete failed with error: ${err}`));
  });
}

//Check which code will delete item
// db.collection("legacyProducts").deleteOne( { "uniqueID" : id }, function(findErr, result) {
//   if(findErr) {
//     throw findErr;
//   }
//   console.log("this is deleted",id)
//   callback(null, result);
// });

// db.legacyProducts.find( {} )

// let grabOne = (id, callback) => {
//   Product.findOne({ uniqueID: id }).exec(callback);
// }

// * Seeds Database

// let promiseData = videoGameData.data.map(async (product) => {
//   return product;
// });
// Promise.all(promiseData).then((products) => {
//   products.map((product) => {
//     saveToDB(product);
//   });
// });

module.exports = {
  // grabOne
  getFunction,
  postFunction,
  putFunction,
  deleteFunction,
};
