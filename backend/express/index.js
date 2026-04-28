const express = require('express')
const mongoose = require("mongoose")
const User = require("./model/UserSchema")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

try {
    mongoose.connect("mongodb://localhost:27017/ecoderByte")
} catch (error) {
    console.log(error)
}
app.get('get-user', (req, res) => {
    res.send("get method is hit")
})
app.post('/create-user', async(req, res) => {
    const newUser = await User.create(req.body)
    if(!newUser) res.send("User Not Foundt!")
    res.send("User successfully added!")
})
app.put('update-user', (req, res) => {
    res.send("put method is hit")
})
app.delete('delete-user', (req, res) => {
    res.send("delete method is hit")
})


app.listen(3000, () => {
    console.log("server is running on port 3000")
})