
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


module.exports=weathercode;

