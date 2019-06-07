const request=require('request');
const yargs=require('yargs')
const geocode=require('./geocode/geocode')
const weather=require('./weather/weather')
const argv=yargs
 .options({
   address:{
     alias:'a',
     describe:'insert your address here',
     demand:true,
     string:true
   }
 })
 .help()
 .alias('help','helps with the options')
 .argv

geocode.fetchAddress(argv.address,(errormessage,sucess) => {
  if (errormessage) {
  console.log(errormessage);
  }
  else if (!errormessage && sucess) {
    weather.getWeather(sucess.lat,sucess.long, (errormessage,sucess) => {
      if (errormessage) {
    console.log(errormessage);
    }else if (!errormessage && sucess) {
    console.log(`The Temperature is ${sucess.temperature},but it does feel like ${sucess.atemp}`);
    }
    })
  }
})

console.log('glbal');
