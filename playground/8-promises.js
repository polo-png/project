// const doWorkPromise = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         // resolve([7,4,1])
//         reject("Error is there")
//     },2000)
// })

// doWorkPromise.then( (result) => {
//     console.log("Success", result)
// }).catch((error) => {
//     console.log(error)
// })

const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+b)
        },2000)
    })
}

add(1,2).then((sum) => {
    add(2,sum).then((sum2) => {
        console.log(sum2)
    }).catch((e)=> {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})