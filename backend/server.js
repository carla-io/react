const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();

const postRoutes = require('./routes/post');


mongoose.connect(process.env.DATABASE)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));



//Username: dasalcarla812 // carla1234
//password: DMX2AJnrNXQNtiLA

// mongodb+srv://carla1234:DMX2AJnrNXQNtiLA@carlacluster.kadyo.mongodb.net/
dotenv.config();



const PORT = process.env.PORT || 3001;

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send('Hello from Backend!');
});

app.post("/api/blog", async(req, res) =>{
    console.log(req.body);
    res.send("Blog created");
})

app.listen(PORT, () => {
    console.log( `Server running on port ${PORT}`);
});