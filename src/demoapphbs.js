const express=require('express');
const path=require('path');
const app=express()
// console.log(__dirname);
// console.log(__filename);

//define the paths for express config
const publicpath=path.join(__dirname,'../public');
// const viewpath=path.join(__dirname,'../templates')
      // console.log(publicpath)

//setup handlebar engine and views location
app.set('view engine','hbs')//handle bar key=view engine and value=hbs
// app.set('views',viewpath)

//setup static directory to server
app.use(express.static(publicpath));
app.get('',(req,res)=>{
    res.render('index',{
        title:"weather app",
        name:"helloabc"
    });//here is used render for respose send to browser taking two argument first filename of hbs without any extension bcz they takes by default in hbs folder and second argument is which value to be printed on browser
})
app.get('/abot',(req,res)=>{
    res.render('abot',{
        title:"about  app"
        
    });//here is used render for respose send to browser taking two argument first filename of hbs without any extension bcz they takes by default in hbs folder and second argument is which value to be printed on browser
})
app.get('/hlp',(req,res)=>{
    res.render('hlp',{
        title:"help  app",
        name:"help123"
        
    });//here is used render for respose send to browser taking two argument first filename of hbs without any extension bcz they takes by default in hbs folder and second argument is which value to be printed on browser
})
app.listen(3000);
//localhost:3000------>index.hbs
//localhost:3000/abot
//localhost:3000/hlp