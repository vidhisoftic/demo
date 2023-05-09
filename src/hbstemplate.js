const express=require('express');
const path=require('path');
const hbs=require('hbs')
const app=express()
const geocode=require('./utils/geocode');
const weathercode=require('./utils/forecast')
// const cors=require('cors')
// console.log(__dirname);
// console.log(__filename);

//define the paths for express config
const publicpath=path.join(__dirname,'../public');
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
      
//setup handlebar engine and views location
app.set('view engine','hbs')//handle bar key=view engine and value=hbs
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup static directory to server
app.use(express.static(publicpath));

app.use(express.json())
// app.use(cors());
app.get('',(req,res)=>{
    res.render('temindex',{
        title:"weather app",
        name:"helloabc",
        skills:["vidhi","heni","tulsi","geeta"]
    });//here is used render for respose send to browser taking two argument first filename of hbs without any extension bcz they takes by default in hbs folder and second argument is which value to be printed on browser
})//localhost:3000/temindex
app.get('/temabout',(req,res)=>{
    res.render('temabout',{
        title:"about  app",
        name:"hello123"
        
    });//here is used render for respose send to browser taking two argument first filename of hbs without any extension bcz they takes by default in hbs folder and second argument is which value to be printed on browser
})//localhost:3000/temabout
app.get('/temhlp',(req,res)=>{
    res.render('temhlp',{
        title:"help  app",
        name:"help123"

        
    });//here is used render for respose send to browser taking two argument first filename of hbs without any extension bcz they takes by default in hbs folder and second argument is which value to be printed on browser
})////localhost:3000/temhlp
app.get('/temhlp/*',(req,res)=>{
    res.render('404',{
        title:"help  app",
        name:"help123",
        errormessage:"help page not found"

        
    });//here is used render for respose send to browser taking two argument first filename of hbs without any extension bcz they takes by default in hbs folder and second argument is which value to be printed on browser
})//localhost:3000/temhlp/data

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

app.get('*',(req,res)=>{
    // res.send('me 404 not found');
    res.render('404',{
        title:"404 page",
        name:"page345",
        errormessage:"Page not found"
    })
})////localhost:3000/data

app.listen(5000,()=>{
    console.log('Server is up on port 5000');
});


