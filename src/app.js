const express=require('express');
const path=require('path');
const hbs=require('hbs')
const app=express()
const port=process.env.PORT || 5000
const geocode=require('./utils/geocode');
const weathercode=require('./utils/forecast')

//define the paths for express config
const publicpath=path.join(__dirname,'../public');
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

//setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup static directory to server
app.use(express.static(publicpath));
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello world')
 })  

app.get('/temindex',(req,res)=>{
    res.render('temindex',{
        title:"weather app",
        name:"helloabc",
        skills:["vidhi","heni","tulsi","geeta"]
    });
})

app.get('/temabout',(req,res)=>{
    res.render('temabout',{
        title:"about  app",
        name:"hello123"
        
    });
})
app.get('/temhlp',(req,res)=>{
    res.render('temhlp',{
        title:"help  app",
        name:"help123"

        
    });
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide address term'
        })
    }
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
    res.render('404',{
        title:"404 page",
        name:"page345",
        errormessage:"Page not found"
    })
})

//here 5000=port
app.listen(port,()=>{
    console.log('Server is up on port'+ port);
});
