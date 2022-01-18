const express = require('express');
const path=require('path');
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser');
require('dotenv/config');
const { Pool } = require('pg');   //for postgres

const port = 3001 ;



app.use(cors())

app.use(bodyParser.json());  //to parse JSON
app.use(bodyParser.urlencoded({extended:true}));   //donot harm my code

//importing routes
const postsRoute=require('./routes/posts');
const userRoute=require('./routes/get');
const deleteRoute=require('./routes/delete');
const putRoute=require('./routes/put');

//redirect to following for specific purposes.
app.use('/posts',postsRoute);
app.use('/get',userRoute);    

app.use('/delete',deleteRoute);
app.use('/put',putRoute);



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/staticFile.html') );
})


app.listen(port);


 

