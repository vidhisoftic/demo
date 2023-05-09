const express=require('express');
const path=require('path');
const app=express()
console.log(__dirname);//   C:\Users\Vidhi Patel\Desktop\nodetutorial\web-server\src
// console.log(__filename);//   C:\Users\Vidhi Patel\Desktop\nodetutorial\web-server\src\app.js
// console.log(path.join(__dirname))//src
// console.log(path.join(__dirname,'..'))// C:\Users\Vidhi Patel\Desktop\nodetutorial\web-server
// console.log(path.join(__dirname,'../..'))// C:\Users\Vidhi Patel\Desktop\nodetutorial
//console.log(path.join(__dirname,'../public'))
const publicdirpath=path.join(__dirname,'../public')
app.use(express.static(publicdirpath));//localhost:3000/index.html or localhost:3000

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
    // res.send({
    //     name:'abc123',
    //     age:34
    // });
//     res.send([{
//         name:'abcd123',
//         age:30
//     },{
//         name:'abcd',
//         age:28
//     }
// ]);
    res.send(`<h1>This is help page</h1><a href='/about'>Go to about page</a>`) //two page link -help and about
})

app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="name" value=${req.query.name}><button>click me</button><br>
    <a href='/'>Go to home page</a>`);
})//localhost:3000/about?name='abc'   textbox value=abc

// app.get('/weather',(req,res)=>{
//     res.send({
//         "coord": {
//             "lon": 72.8333,
//             "lat": 21.1667
//             },
//             "weather": [
//             {
//             "id": 802,
//             "main": "Clouds",
//             "description": "scattered clouds",
//             "icon": "03d"
//             }
//             ]});
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide address term'
        })
    }//localhost:3000/weather
    res.send({
        address:req.query.address
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
//here 5000=port
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});
