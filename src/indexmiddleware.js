const express=require('express');
const reqFilter=require('./middleware');
const app=express()

/*****************************all page middleware apply******************************************************** */
/*app.use(reqFilter)
app.get('/',(req,res)=>{
    
    res.send('welcome to home page')
});
app.get('/users',reqFilter,(req,res)=>{
    res.send('user age page ')
})
app.get('/about',reqFilter,(req,res)=>{
    res.send('about user page ')
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});*/

/******************************here middleware apply only two page contact and about**************************  */
const route=express.Router();
route.use(reqFilter)//here reqfilter is middleware and route is used for this middleware
app.get('/',(req,res)=>{
    
    res.send('welcome to home page')
});
app.get('/users',(req,res)=>{
    res.send('user age page ')
})
route.get('/about',(req,res)=>{
    res.send('about user page ')
})
route.get('/contact',(req,res)=>{
    res.send('contact user page ')
})
app.use('/',route)//here about and contact page route.get is used instead of app.get 
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})