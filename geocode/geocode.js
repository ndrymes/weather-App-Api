
const app =require('C:/Users/user/Desktop/weather-app/app.js')
const request =require('request')
const argv= app.argv
const fetchAddress = (address,callback) => {
var encodedUri =encodeURIComponent(address)
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}&key=AIzaSyD4A6QtKbPY7lEgoeetxkfmu9hEqVOVlbE`,
    json:true
  },(error,response,body) =>{
    if (error) {
    callback(`${error.code} not found`);
    }
    else if (body.status==='ZERO_RESULTS') {
      callback('Address not found');
    }
  else if(body.status==='OK') {
  callback(undefined,
    {lat:body.results[0].geometry.location.lat,
    long:body.results[0].geometry.location.lat,
    address:body.results[0].geometry.location.formatted_address})
}
})
};
module.exports = {
  fetchAddress
}
