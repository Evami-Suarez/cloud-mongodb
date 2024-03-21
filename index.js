const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use = (express.json());
const PORT = 3000;
const URI = 'mongodb+srv://suarezevami:2021305429@cluster0.nj1y0ba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const userRouter = require('./routes/user');

async function connect() {
    try{
        await mongoose.connect(URI)
        console.log('Connected with cloud Mongo DB')
    } catch(error) {
        console.log(`Error -> ${error}>`)
    }
}

connect()




app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)}
    );
