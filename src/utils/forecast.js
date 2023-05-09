
const request=require('request');
const weathercode=(callback)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?q=surat&appid=aa9d8d0ca39bc6feed1f1ff2ea2d0ba2&units=imperial';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect weather service!',undefined);
        }else if(response.body.error){
            callback('unable to find the location',undefined);
        }else{
            callback(undefined,{
                currenttemp:response.body.main.temp,
                feelslike:response.body.main.feels_like
            })
        }
    })
}

/*const forecast=(latitude,longitude,callback)=>{
   
    const url='https://api.opencagedata.com/geocode/v1/json?key=30aa4b3bb8c34b7dadaf573b90e5d6d9&q='+latitude+'+'+longitude+'&pretty=1&no_annotations=1'
    // const url='https://api.opencagedata.com/geocode/v1/json?key=30aa4b3bb8c34b7dadaf573b90e5d6d9&q=52.3877830%2C+9.7334394&pretty=1&no_annotations=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect weather service!',undefined);
        }else if(response.body.error){
            callback('unable to find the location',undefined);
        }else{
            callback(undefined,response.body.results.rate+' .');
        }
})
}
module.exports={
    weathercode:weathercode,
    forecast:forecast
}*/
module.exports=weathercode;

