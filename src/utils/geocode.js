
const request=require('request');
const geocode=(callback)=>{
    const url1='https://api.opencagedata.com/geocode/v1/json?key=30aa4b3bb8c34b7dadaf573b90e5d6d9&q=Berlin,+Germany&pretty=1&no_annotations=1';
    request({url:url1,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect location service!',undefined);
        }else if(response.body.results.length===0){
            callback('unable to find the location.Try another search',undefined);
        }else{
            callback(undefined,{
                latitudeandlongitude1:response.body.results[0].geometry,
                latitudeandlongitude2:response.body.results[1].geometry,
                address:response.body.results[0].components.country
            })
        }
    })
}

module.exports=geocode;