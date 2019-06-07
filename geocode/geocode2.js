const request = require('request')
var geocode = (address) => {
  var encodedUri =encodeURIComponent(address)
  return new Promise((resolve,reject) => {
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}&key=AIzaSyD4A6QtKbPY7lEgoeetxkfmu9hEqVOVlbE`,
      json:true
    },(error,response,body)=> {
      if(error){
       reject('we couldnt find the page')
      }
      else if (body.status==='ZERO_RESULTS') {
        reject('link not found')
      }
      else if (body.status==='OK') {
        resolve({
          lat:body.results[0].geometry.location.lat,
          long:body.results[0].geometry.location.lat,
          address:body.results[0].geometry.location.formatted_address
        })
      }


    })
  })
}
geocode(08822).then((errormessage) => {
console.log(errormessage);
},(sucess) => {
  console.log(JSON.stringify(sucess,undefined,2));
})
