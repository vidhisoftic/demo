const express=require('express');
const path=require('path');
const app=express()
// console.log(__dirname);
// console.log(__filename);

const publicpath=path.join(__dirname,'../public');
// console.log(publicpath)

app.use(express.static(publicpath));

app.listen(3000);

//localhost:3000/index.html
//localhost:3000/about.html
//localhost:3000/help.html
