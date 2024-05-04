const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.userDB}:${process.env.secretKey}@cluster0.2evw8as.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const serviceCollection = client.db("driveRevive").collection("services");
    const checkoutCollection = client.db("driveRevive").collection("checkout");

    // services
    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get(`/services/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { price: 1, service_id: 1, title: 1, img: 1 },
      };
      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });

    // checkout or Booking
    app.post("/checkout", async (req, res) => {
      const checkout = req.body;
      console.log(checkout);
      const result = await checkoutCollection.insertOne(checkout);
      res.send(result);
    });

    app.get("/checkout", async (req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await checkoutCollection.find(query).toArray();
      res.send(result);
    });

    app.patch('/checkout/:id',async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const updateBooking = req.body;
      const updateDoc = {
        $set: {
          status: updateBooking.status
        },
      };
      console.log(updateBooking);
      const result = await checkoutCollection.updateOne(filter,updateDoc)
      res.send(result)
    })
    app.delete("/checkout/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await checkoutCollection.deleteOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Drive Revive");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
