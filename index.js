const express = require('express');
const {default: mongoose} = require('mongoose');
const app = express();
app.use(express.json());
const PORT = 3000;
const URI = 'mongodb+srv://suarezevami:2021305429@cluster0.nj1y0ba.mongodb.net/api-server'

async function connect() {
    try{
        await mongoose.connect(URI)
        console.log('Connected with cloud Mongo DB')
    } catch(error) {
        console.log(`Error -> ${error}>`)
    }
}

connect()

const userRouter = require('./routes/user')
app.use('/users',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)}
    );
