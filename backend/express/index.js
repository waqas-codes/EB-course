const express = require('express')
const mongoose = require("mongoose")
const User = require("./model/UserSchema")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/ecoderByte").
then(() => console.log("mongodb connected"))
.catch((err) => console.log(err))


app.get('/get-user', (req, res) => {
    res.send("get method is hit")
})

app.post('/create-user', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.json({
            message: "User successfully added!",
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error saving user",
            error: error.message
        })
    }
})

app.put('/update-user/:id', (req, res) => {
    const updateUser = req.params.id
    const oldUser = User.findById(updateUser)
    if(updateUser == oldUser){
        
    }
})
app.delete('/delete-user', (req, res) => {
    res.send("delete method is hit")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})