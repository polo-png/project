const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

const id = new ObjectID()
console.log(id.id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log("Unable to connect to database")
    }
    
    const db = client.db(databaseName)

    // db.collection("users").findOne( {_id: new ObjectID("5e94cdbb623a3d3745c99746")}, (error,user) => {
    //     if(error){
    //         return console.log("Unable to fetch!")
    //     }
    //     console.log(user)
    // })

    // db.collection("users").find( {age: 22}).toArray((error,users) => {
    //     console.log(users)
    // })

    // db.collection("tasks").findOne( {_id: new ObjectID("5e94cf704f13493827cc8c3f")}, (error,task) => {
    //     if(error){
    //         return console.log("There was an error")
    //     }
    //     console.log(task)
    // })

    // db.collection("tasks").find({completed: false}).toArray((error,tasks) => {
    //     if(error){
    //         return console.log("There was an error")
    //     }
    //     console.log(tasks)
    // })

    // db.collection("users").updateOne({
    //     _id: new ObjectID("5e94ce94f8639237ae9cc755")
    // }, {
    //     // $set : {
    //     //     name: "Kali"
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany({
    //     completed: true
    // }, {
    //     $set : {
    //         completed: false
    //     }
    //     // $inc: {
    //     //     age: 1
    //     // }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("users").deleteMany(
    //     {age:27}).then((result) => {
    //         console.log("Deleted")
    //     }).catch((error) => {
    //         console.log("Could not delete")
    //     })

    db.collection("tasks").deleteOne({
        description: "Pot plants"
    }).then((result) => {
        console.log("Deleted successfully!")
    }).catch((error) => {
        console.log("There was an error!")
    })
})