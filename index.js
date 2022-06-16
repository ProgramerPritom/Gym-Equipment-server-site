const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware 
app.use(cors())
app.use(express.json())

/**
 * username:gymEquipDb
 * password:j7OZ0wMRbx4nzLW7
 */


 
 const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.kotkn.mongodb.net/?retryWrites=true&w=majority`;
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



 async function run() {
    try {
          await client.connect();
          const collection = client.db("GymEquipment").collection("Equipment");

      
    } finally {
      
    }
    run().catch(console.dir);



 }


 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Running Gym Equipment port is ${port}`)
})