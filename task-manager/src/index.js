const express = require("express")
const app = express()
const port = process.env.PORT || 3000

require('./db/mongoose')

const User = require("./models/user")
const Tasks  = require("./models/task")

const userRouter = require("./routers/user")

const taskRouter = require("./routers/task")

// app.use( (req,res,next) => {
//     if(req.method === "GET" ){
//         res.send("GET Requests are disabled")
//     } else {
//         next()
//     }
// })

// app.use( (req, res, next) => {
//     res.status(503).send("Site is down. Check back soon!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log("Server is up on port " + port)
})

const main = async() => {
    // const task = await Tasks.findById("5e976f92c5b9cf30aef43e5c")
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('5e976d599a0dd52f6ed50fc8')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()

// const pet = {
//     name: "Hal"
// }

// pet.toJSON = function(){
//     return {}
// }

// console.log(JSON.stringify(pet))

// const bcrypt = require("bcryptjs")

// const myFunction = async() => {
//     const password = "Red12345"
//     const hashedPassword = await bcrypt.hash(password,8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare("Red12345", hashedPassword )
//     console.log(isMatch)
// }   

// const jwt = require("jsonwebtoken")

// const myFunction = async () => {
//     const token = jwt.sign({ _id: "abc123"},"thisismynewcourse",{ expiresIn: "7 days"})
//     console.log(token)

//     const data = jwt.verify(token, "thisismynewcourse")

//     console.log(data)
// }

// myFunction()