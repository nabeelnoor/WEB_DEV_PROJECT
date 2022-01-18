const express=require('express');
//const cors=require('cors');
//const Posts = require('../models/Posts');
const router=express.Router();
// const Post=require('../models/Posts');
const { response } = require('express');;
const package=require('../Controller');

router.delete('/',(req,res)=>{    // /delete
    res.send("We are on delete base in deelte.js file");
})

router.delete('/reactor',(req,res)=>{   // /delete/reactor
    //console.log(req);
    console.log('delete reactor');
    console.log(req.body.movieName);   //undefined error>
    console.log(req.body.movieReview);
    res.json([{"movieName":"deleteresponse_check1","movieReview":"Excellent"},{"movieName":"deletesponse_check2","movieReview":"Excellent"}]);
})


router.delete('/deletePatient',(request,response)=>{
    console.log("\nInside delete API of patient:",request.body.PatID);

    let answer="Error{debug}";
    let ID=request.body.PatID;
    
    async function main(){
        
        let Hospitalobj=new package.Hospital();
        answer=await Hospitalobj.deletePatient(ID);
        //console.log("final answer:",answer);
        //to remove []
        // answer=JSON.stringify(answer);
        // answer=answer.slice(1,-1);
        // answer=JSON.parse(answer)
    }

    main().then(()=>{console.log(answer); response.send(answer);})    
})


router.delete('/deleteDoctor',(request,response)=>{
    //console.log("\nInside delete API of patient:",request.body.PatID);

    let answer="Error{debug}";
    let DocID=request.body.DocID;
    
    async function main(){
        
        let Hospitalobj=new package.Hospital();
        answer=await Hospitalobj.deleteDoctor(DocID);
        //console.log("final answer:",answer);
        //to remove []
        // answer=JSON.stringify(answer);
        // answer=answer.slice(1,-1);
        // answer=JSON.parse(answer)
    }

    main().then(()=>{console.log(answer); response.send(answer);})    
})



// router.get('/specific',(req,res)=>{
//     res.send('This is specific post')
// })
module.exports= router;