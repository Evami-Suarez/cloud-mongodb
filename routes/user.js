const express = require('express');
const router = express.Router()
const User = require('../models/user');

router.get('/', async (req,res) => {
    try{
        const userSchema = await userSchema.find()
        res.status(200).json(userSchema)
    } catch(error) {
       res.send(`Some error occured => ${error}`)
    }
})


router.post('/', async (req, res) => {
    console.log(req.body);
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        age: req.body.age,
        birthday: req.body.birthday
    });
    try{
        const result = await userSchema.save();
        res.status(201).json(result);
    }catch(error) {
        res.send(`Some error occured => ${error}`)
    }
})

module.exports = router