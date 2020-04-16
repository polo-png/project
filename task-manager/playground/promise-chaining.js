require('../src/db/mongoose')
const User = require('../src/models/user')
// const Tasks = require('../src/models/task')

// Tasks.findByIdAndDelete('5e95c336057025218308b8bb').then((task) => {
//     console.log(task)
//     return Tasks.countDocuments({completed: false})
// }).then((result) => {
//     console.log("Number of uncompleted tasks is " + result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgentCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = User.countDocuments({age})
    return count
}

updateAgentCount('5e95c336057025218308b8bb', 2).then((count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
})