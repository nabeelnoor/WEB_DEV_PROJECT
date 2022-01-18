const { response } = require('express');
const express=require('express');
//const cors=require('cors');
const router=express.Router();
//const Post=require('../models/Posts');
const package=require('../Controller');


//route.use(cors());
router.put('/',(req,res)=>{    // /delete
    res.send("We are on delete base in deelte.js file");
})

router.put('/reactor',(req,res)=>{   // /delete/reactor
    //console.log(req);
    console.log('update reactor final');
    console.log(req.body.movieName);   //undefined error>
    console.log(req.body.movieReview);
    res.json([{"movieName":"updateresponse_check1","movieReview":"Excellent"},{"movieName":"updatesponse_check2","movieReview":"Excellent"}]);
    // res.send('You are inside reactor\'s update');
})


router.put('/updatePatient', function (request, response) {  //whenever post and auth is used this functions call

    let answer="Error{debug}";
    
    // let PatID=request.body.PatID;
    // let Name=request.body.Name;
    // let Age=request.body.Age;
    // let Address=request.body.Address;
    // let Gender=request.body.Gender;
    // let ContactNumber=request.body.ContactNumber;
    // let Password=request.body.Password;

    
    async function main(){
        
         let Hospitalobj=new package.Hospital();
         answer=await Hospitalobj.updatePatient(request.body);
        // let Hospitalobj=new package.Hospital();
        // answer=await Hospitalobj.confirmAppointment(DocID,PatID,Date,Time);
        
        //console.log(answer.count+"this is final")
    }

    main().then(()=>{ response.send(answer);})
    
});


router.put('/updateDoctor', function (request, response) {  //whenever post and auth is used this functions call

    let answer="Error{debug}";
    
    // let PatID=request.body.PatID;
    // let Name=request.body.Name;
    // let Age=request.body.Age;
    // let Address=request.body.Address;
    // let Gender=request.body.Gender;
    // let ContactNumber=request.body.ContactNumber;
    // let Password=request.body.Password;

    
    async function main(){
        
         let Hospitalobj=new package.Hospital();
         answer=await Hospitalobj.updateDoctor(request.body);
        // let Hospitalobj=new package.Hospital();
        // answer=await Hospitalobj.confirmAppointment(DocID,PatID,Date,Time);
        
        //console.log(answer.count+"this is final")
    }

    main().then(()=>{ response.send(answer);})
    
});


// router.get('/specific',(req,res)=>{
//     res.send('This is specific post')
// })
module.exports= router;