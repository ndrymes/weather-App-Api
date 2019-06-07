const request=require('request')

const getWeather =(lat,long,callback) => {
request({
  url:`https://api.darksky.net/forecast/30e90a1ce35b4d7277ce673851d6821e/${lat},${long}`,
  json:true
},(error,response,body) => {
  if (!error && response.statusCode===200) {
    callback(undefined,{
      temperature:body.currently.temperature,
      atemp:body.currently.apparentTemperature
    })
  }
  else {
    callback('we cant find the weather for the location you are looking for')
  }
})
}

module.exports ={
  getWeather
}
