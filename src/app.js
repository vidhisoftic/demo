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
app.set('view engine','hbs')//handle bar key=view engine and value=hbs
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup static directory to server
app.use(express.static(publicpath));
app.use(express.json())
      
//req=request
//res=response
//in browser:-localhost:3000?name='abc'
/*app.get('',(req,res)=>{
    // console.log('data sent by browser ==>',req.query)//Server is up on port 3000 data sent by browser ==> { name: '"abc"' }
    console.log('data sent by browser ==>',req.query.name)//data sent by browser ==> "abc"
    // res.send('Hello,This is a Home Page');
    // res.send('Hello,This is a Home Page'+req.query.name);
    res.send('<h1>Welcome</h1>');
})*/

app.get('/help',(req,res)=>{
    res.send(`<h1>This is help page</h1><a href='/about'>Go to about page</a>`) //two page link -help and about
})

app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="name" value=${req.query.name}><button>click me</button><br>
    <a href='/'>Go to home page</a>`);
})//localhost:3000/about?name='abc'   textbox value=abc

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
    
})//http://localhost:3000/weather?address=surat

app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide search term'
        })
    }
    console.log(req.query);//{ search: 'game', rating: '5' }
    res.send({
        products:[]
    })
})////localhost:3000/product?search=game&rating=5

app.get('*',(req,res)=>{
    // res.send('me 404 not found');
    res.render('404',{
        title:"404 page",
        name:"page345",
        errormessage:"Page not found"
    })
})////localhost:3000/data

//here 5000=port
app.listen(port,()=>{
    console.log('Server is up on port'+ port);
});
