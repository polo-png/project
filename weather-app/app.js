const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast.js")

if(process.argv[2] == undefined){
    console.log("Give a city!")
}else if(process.argv.length > 3){
    console.log("Too many arguments!")
} else{
    geocode(process.argv[2], (error, data) => {
        if(error){
            return console.log(error)
        }
        forecast(data.longitude, data.latitude, (error, data) => {
            //console.log('Error', error)
            console.log(data)
        })
    })
}




// forecast(19.32745, 40.418882, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   }) 

// const request = require("request");

// const url = "http://api.weatherstack.com/current?access_key=455e265321c51311c22fc18b6b68dfc8&query=52.520008,13.404954&units=m"
// request({ url: url, json: true }, (error, response) => {
//     console.log(chalk.green.inverse("In " + response.body.location.region + " the temperature is " + response.body.current.temperature + " celcius and it feels like " + response.body.current.feelslike + " celcius."));
//     console.log(chalk.yellow.inverse(response.body.current.weather_descriptions))
// });

// const new_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibG9wMTIzIiwiYSI6ImNrOHg1bnM2cDB4dmQzZ29rMnprcGx1Z28ifQ.M1qpZP_zNFHpIIUHbINqfQ&limit=1"
// request( { url: new_url, json:true} , (error,response) => {
//     console.log(response.body.features[0].center)
// } )


// geocode("Vlora", (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })