const express=require('express');
const path=require('path');
const hbs=require('hbs')
const app=express()
const geocode=require('./utils/geocode');
const weathercode=require('./utils/forecast')

// const publicdirpath=path.join(__dirname,'../public')
// app.use(express.static(publicdirpath));
// const viewpath=path.join(__dirname,'../templates/views')
// const partialpath=path.join(__dirname,'../templates/partials')
// app.set('view engine','hbs')//handle bar key=view engine and value=hbs
// app.set('views',viewpath)
// hbs.registerPartials(partialpath)

//server mathi browser ne mokle

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide address term'
        })
    }//localhost:3000/weather
    geocode((error,data)=>{
        if(error){
            return res.send({
                error
            })
        }
        weathercode((error,weathercodedata)=>{
            if(error){
                return res.send({
                    error
                })
            }
            
            res.send({
                address:req.query.address,
                weather:weathercodedata,
                location:data.latitudeandlongitude1
                
                
            })
        })
    })
    
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});