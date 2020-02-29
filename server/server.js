const express = require('express');
const app = express();
var cors = require("cors");
const csvtojson = require("csvtojson");
const bodyParser= require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
var db;
var mongoclient = require("mongodb").MongoClient;
csvtojson()
  .fromFile("./data/TED-22kData.csv")
  .then(csvData => {
mongoclient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true ,
    useUnifiedTopology: true},
  function(err, client) {
    if (err) throw err;
    db = client.db("teddb");
    db.collection("events").insertMany(csvData, (err, res) => {
      if (err) throw err;
      console.log(`Inserted: ${res.insertedCount} rows`);
    });
  } 
)});
app.get('/data', (req, res) => {
    db.collection('events').find().sort( { published_date: -1 } ).limit(20).toArray(function(err, results) {
      console.log("data requested")
        res.send(results);
      })
  })

 app.get("/search",(req,res)=>{
   console.log(req.query);
  db.collection('events').find({main_speaker:req.query.search}).limit(20).toArray(function(err, results) {
    console.log(results)
      res.send(results);
    })
 })
app.listen(5000, function() {
    console.log('listening on 5000')
  })
