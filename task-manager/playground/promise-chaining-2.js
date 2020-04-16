require('../src/db/mongoose')
//const User = require('../src/models/user')
const Tasks = require('../src/models/task')

// Tasks.findByIdAndDelete('5e95c336057025218308b8bb').then((task) => {
//     console.log(task)
//     return Tasks.countDocuments({completed: false})
// }).then((result) => {
//     console.log("Number of uncompleted tasks is " + result)
// }).catch((e) => {
//     console.log(e)
// })

const DeleteAgentCount = async(id) => {
    await Tasks.findByIdAndDelete(id)
    const count = Tasks.countDocuments({completed: false})
    return count
}

DeleteAgentCount("5e958e38e291650d78525542").then((count) => {
    console.log(count)
}).catch((e) => console.log(e))