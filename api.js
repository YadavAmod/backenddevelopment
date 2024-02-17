const dbConnect = require('./mongodb');
const express = require('express');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect(); // assuming dbConnect is a function that returns a collection
    data = await data.find().toArray();
    res.send(data);
});

app.post("/", async (req, res) => {
    let data = await dbConnect(); // assuming dbConnect is a function that returns a collection
    let result = await data.insertOne(req.body); // assuming req.body contains the data to be inserted
    res.send(result);
});

app.put("/", async (req, res) => {
    let data = await dbConnect(); // assuming dbConnect is a function that returns a collection
    let result = await data.updateOne(
        { name: "Ramesh" },
        { $set: req.body }
    );
    res.send({ result: "update" }); // corrected response format
});

app.delete("/:id", async (req, res) => {
    let data = await dbConnect(); // assuming dbConnect is a function that returns a collection
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) }); // corrected import and usage of ObjectId
    res.send(result);
});

app.listen(5000);
