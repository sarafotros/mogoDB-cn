const mongoose = require('mongoose')
const express = require('express')

const app = express()

const UserSchema = require('./models/userModel')

require('dotenv').config()

mongoose.connect(process.env.databaseURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=> console.log('connected to mongoDB'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/users', async(req, res)=>{
 
    let users = await UserSchema.find({});
    console.log(users)
    // return users
 
//  res.render(users)
res.send(users)
})


app.post('/creatUser', (req, res)=>{
    const { name, email, phoneNumber} = req.body

    const user = new UserSchema({
        name,
        email,
        phoneNumber
    })
    user.save()

    res.send('user was created successfully')
})



app.listen(3000)





const john = new UserSchema({
    name: 'John',
    email: 'j2ss@email.com',
    phoneNumber: 77889988
})

john.save()

// const getAllUsers = async ()=>{
//     let users =await UserSchema.find({});
//     console.log(users)
// }
// getAllUsers()