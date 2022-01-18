const { json } = require('body-parser');
const { Pool } = require('pg');   //for postgres
// require('dotenv/config');


const mongoose = require('mongoose');//for mongoose connnection


//importing models for usage.
const Patient=require('./models/Patient');
const Dept=require('./models/Dept');
const Emp=require('./models/Emp');
const Doctor=require('./models/Doctor');
const App_Log=require('./models/App_Log')
const { Employee } = require('./class');
const { response } = require('express');

class PersistenceHandler{
    constructor(){
        if(this.constructor==PersistenceHandler){
            throw new Error("Abstract class can't be intantiated");
        }
    }

    async selectAllFromPatient(){ //return stringify of all values(JSON)
            throw new Error("Not implemented in drived classes");
    }

    async selectPatientInfo(){ //return stringify of all values(JSON)
        throw new Error("Not implemented in drived classes");
    }


    async selectspecificperson(ID){ //return stringify of all values(JSON)
        throw new Error("Not implemented in drived classes");
    }

    async validateCNIC(CNIC){
        throw new Error("Not implemented in drived classes");
    }

    async makeRegisteration(Name,Age,Gender,Address,ContactNumber,Password,CNIC){
        throw new Error("Not implemented in drived classes");
    }

    async getAllDept(){
        throw new Error("Not implemented in drived classes");         
    }

    async getAllDocOfDept(DeptID){
        throw new Error("Not implemented in drived classes");      
    }

    async getAllDetailOfDoctor(ID){
        throw new Error("Not implemented in drived classes");
    }

    async getAdmin(ID,Password){
        throw new Error("Not implemented in drived classes");
    }

    async getDoctor(ID,Password){
        throw new Error("Not implemented in drived classes");
    }    

    async getEmpDetail(ID){
        throw new Error("Not implemented in drived classes");       
    }

    async updateEmployee(EmpId,Name,DOB,Gender,Contact,Job,Salary,Address,Speciality,Password){
        throw new Error("Not implemented in drived classes");
    }

    async getAvailableDate(ID){
        throw new Error("Not implemented in drived classes");

    }

    async getDoctorTiming(ID){
        throw new Error("Not implemented in drived classes");
    }

    async countReservedSlot(ID,Date){ //YYYY_MM_DD
        throw new Error("Not implemented in drived classes");
    }

    async deactivateAppointment(AppID){
        throw new Error("Not implemented in drived classes");
    }

    async allocateAppointment(DocID,PatID,Date,Time){
        throw new Error("Not implemented in drived classes");
    }

    async activateAppointment(AppID,Amount){
        throw new Error("Not implemented in drived classes");      
    }

    async selectDoctorAppointment(DocID,Date){
        throw new Error("Not implemented in drived classes");
    }

    async fetchPatientDetail(PatID){
        throw new Error("Not implemented in drived classes"); 

    }

    async fetchReport(RID){
        throw new Error("Not implemented in drived classes");     

    }

    async collectReports(PatID){
        throw new Error("Not implemented in drived classes");
    }    
    
};


class FileHandler extends PersistenceHandler{
    constructor(){
        super();
    }

    async selectAllFromPatient(){ //return stringify of all values(JSON)
          
    }

    async selectPatientInfo(){ //return stringify of all values(JSON)
        throw new Error("Not implemented in drived classes");
    }


    async selectspecificperson(ID){ //return stringify of all values(JSON)
       
    }

    async validateCNIC(CNIC){
      
    }

    async makeRegisteration(Name,Age,Gender,Address,ContactNumber,Password,CNIC){
       
    }

    async getAllDept(){
              
    }

    async getAllDocOfDept(DeptID){
      
    }

    async getAllDetailOfDoctor(ID){
       
    }

    async getAdmin(ID,Password){
        
    }

    async getDoctor(ID,Password){
        
    }    

    async getEmpDetail(ID){
        
    }

    async updateEmployee(EmpId,Name,DOB,Gender,Contact,Job,Salary,Address,Speciality,Password){
       
    }

    async getAvailableDate(ID){
        

    }

    async getDoctorTiming(ID){
       
    }

    async countReservedSlot(ID,Date){ //YYYY_MM_DD
        
    }

    async deactivateAppointment(AppID){
       
    }

    async allocateAppointment(DocID,PatID,Date,Time){
        
    }

    async activateAppointment(AppID,Amount){
            
    }

    async selectDoctorAppointment(DocID,Date){
       
    }

    async getMyAppointment(ID){

    }

    async fetchPatientDetail(PatID){
       

    }

    async fetchReport(RID){
        

    }

    async collectReports(PatID){
        
    }    
    
};



class DBcontroller2 extends PersistenceHandler{
    constructor(){
        super();
        mongoose.connect(process.env.Mongo_connection,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        .then(()=>{
            console.log('Connection Successful');
        })
        .catch(()=>{
            console.log('No connection')
        });

        console.log("Constructor called for MongoDB");
    }


    async testFuncPost(obj){
        // console.log("Inside PH\n")
        // console.log(obj);
        // return obj;
        let ret;


        const emp=new Emp({
            _id:obj.DocID,
            EmpID:obj.DocID,
            Name:obj.Name,
            Gender:obj.Gender,
            Age:obj.Age,
            Contact:obj.Contact,
            CNIC:obj.CNIC,
            Job:obj.Job,
            Salary:obj.Salary,
            Address:obj.Address,
            DeptID:obj.DeptID,
            Speciality:obj.Speciality,
            Password:obj.Password,
            DOB:obj.DOB

        });



        try{
            const savedEmp=await emp.save();
            console.log(savedEmp)
            ret={"message":"Emp has been created","status":"1"}
        }catch(err){
            // console.log('error\n')
            ret=json({message:err});
            ret={"message":"Cannot create Doctor","status":"0"}
            return ret;
        }



        const doctor=new Doctor({



            _id: obj.DocID,
            DocID: obj.DocID,
            Qualification: obj.Qualification,
            Certificate: obj.Certificate,
            Experience: obj.Experience,
            Speciality: obj.Speciality,
            ActiveDay: obj.ActiveDay,
            Timing: obj.Timing,
            AppSlot: obj.AppSlot,
            EmpID: obj.DocID,
            CheckupFee: obj.CheckupFee

        });

        try{
            const savedDoctor=await doctor.save();
            console.log(savedDoctor)
            ret={"message":"Doctor has been created","status":"1"}
        }catch(err){
            // console.log('error\n')
            ret=json({message:err});
            console.log(err);
            ret={"message":"Cannot create Doctor","status":"0"}
            return ret;
        }

        //console.log(ret);
        return ret;
        //return JSON.stringify(p.rows);      
    }

    async addDoc(obj){
        // console.log("Inside PH\n")
        // console.log(obj);
        // return obj;
        let ret;


        const emp=new Emp({
            _id:obj.DocID,
            EmpID:obj.DocID,
            Name:obj.Name,
            Gender:obj.Gender,
            Age:obj.Age,
            Contact:obj.Contact,
            CNIC:obj.CNIC,
            Job:obj.Job,
            Salary:obj.Salary,
            Address:obj.Address,
            DeptID:obj.DeptID,
            Speciality:obj.Speciality,
            Password:obj.Password,
            DOB:obj.DOB

        });



        try{
            const savedEmp=await emp.save();
            console.log(savedEmp)
            ret={"message":"Emp has been created","status":"1"}
        }catch(err){
            // console.log('error\n')
            ret=json({message:err});
            ret={"message":"Cannot create Doctor","status":"0"}
            return ret;
        }



        const doctor=new Doctor({



            _id: obj.DocID,
            DocID: obj.DocID,
            Qualification: obj.Qualification,
            Certificate: obj.Certificate,
            Experience: obj.Experience,
            Speciality: obj.Speciality,
            ActiveDay: obj.ActiveDay,
            Timing: obj.Timing,
            AppSlot: obj.AppSlot,
            EmpID: obj.DocID,
            CheckupFee: obj.CheckupFee

        });

        try{
            const savedDoctor=await doctor.save();
            console.log(savedDoctor)
            ret={"message":"Doctor has been created","status":"1"}
        }catch(err){
            // console.log('error\n')
            ret=json({message:err});
            console.log(err);
            ret={"message":"Cannot create Doctor","status":"0"}
            return ret;
        }

        //console.log(ret);
        return ret;
        //return JSON.stringify(p.rows);      

    }

    async addEmp(obj){
        // console.log("Inside PH\n")
        // console.log(obj);
        // return obj;
        let ret;

        const emp=new Emp({
            _id:obj.EmpID,
            EmpID:obj.EmpID,
            Name:obj.Name,
            Gender:obj.Gender,
            Age:obj.Age,
            CNIC:obj.CNIC,
            Job:obj.Job,
            Salary:obj.Salary,
            // Address:{
            //     type:String,
            //     default:'-'
            // },
            DeptID:obj.DeptID,
            // Speciality:{
            //     type:String
            // },
            Password:obj.Password,
            DOB:obj.DOB

        });

        try{
            const savedEmp=await emp.save();
            console.log(savedEmp)
            ret={"message":"Emp has been created","status":"1"}
        }catch(err){
            // console.log('error\n')
            ret=json({message:err});
            ret={"message":"Cannot create Emp","status":"0"}
        }

        //console.log(ret);
        return ret;
        //return JSON.stringify(p.rows);      
    }

    
    async addDept(DeptID,DeptName){
        let ret;

        const dept=new Dept({
            _id:DeptID,
            DeptID:DeptID,
            Name:DeptName
        });

        try{
            const savedDept=await dept.save();
            console.log(savedDept)
            ret={"message":"Dept has been created","status":"1"}
        }catch(err){
            // console.log('error\n')
            ret=json({message:err});
            ret={"message":"Cannot create dept","status":"0"}
        }

        //console.log(ret);
        return ret;
        //return JSON.stringify(p.rows);         
    }


    async getAllDept(){
        let ret;
        console.log("Critical area\n\n")
        ret=await Dept.find(
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )
        let ret2=[];
        ret.forEach(element => {
            if(!(element.DeptID=="M1")){
                ret2.push(element);
            }
        });
        //console.log(ret2);
       //console.log(ret);
        return ret2;
    }

    async selectspecificperson(ID){//for patient login //return stringify of all values(JSON)

        let p;
        if(typeof(ID)!="string") throw new Error("alpha error");


        let ret;
        await Patient.find(
            { "_id":ID},//filter check
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )
        let tret=JSON.stringify(ret);
        console.log(tret);
        return tret;



        // let tret;
        // let b_sync=await (async () => {
        //                     //const client = await this.#pool.connect();
                            
        //                     const query = "SELECT * FROM public.\"Patient\" where \"ID\"=\'"+ID+"\'" ;
        //                     //console.log(query);
        //                     //const cursor 
        //                     await this.connectionEstablish();
        //                     p= await this.#connector.query(query);
        //                     //console.log("ok till now \n")
        //                   })();
        // //console.log(p)
        // let tret=JSON.stringify(p.rows); ;
        //tret=tret.slice(1,-1);
        // return tret;
    }

    async selectPatientInfo(){ //return stringify of all values(JSON)
        let ret;
        let tret;

        await Patient.find({},{Password:0},
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )
        tret=JSON.stringify(ret);
        return tret;
        // let p;
        // let b_sync=await (async () => {
        //                     //const client = await this.#pool.connect();
        //                     await this.connectionEstablish();
        //                     const query = "SELECT * FROM \"Patient\"";
                        
        //                     //const cursor 
        //                     p= await this.#connector.query(query);
                            
        //                   })();
        // //console.log(p)
        // return JSON.stringify(p.rows); 
    }

    async makeRegisteration(Name,Age,Gender,Address,ContactNumber,Password,CNIC,PatID){
        // console.log(Name,Age,Gender,Address,ContactNumber,Password,CNIC,ID);
        let retmsg=await this.#validateCNICandID(CNIC,PatID);

        if(retmsg.status==0){ //duplicate ID or CNIC found.
            return retmsg;
        }


        let ret;

        const patient=new Patient({
            _id:PatID,
            ID:PatID,
            Name:Name,
            Age:Age,
            Gender:Gender,
            Address:Address,
            ContactNumber:ContactNumber,
            Password:Password,
            CNIC:CNIC
        });

        try{
            const savedPatient=await patient.save();
            console.log(savedPatient)
            ret={"message":"Patient has been created","status":"1"}
        }catch(err){
            // console.log('error\n')
            ret=json({message:err});
            ret={"message":"Cannot create Patient","status":"0"}
            return retmsg;
        }

        //console.log(ret);
        //return ret;
        //return JSON.stringify(p.rows);    
        return retmsg;
    }

    async #validateCNICandID(CNIC,ID){
        let returnmsg;
        let ret;
        let temp=await Patient.find(
            {},
            {ID:1,CNIC:1},
            (err,data)=>{
                if(err){
                    //console.log(err);
                    returnmsg={status: 0 ,msg:"Duplicate ID or Password"};
                    return returnmsg;
                }
                else{
                    //ret=data;


                    returnmsg={stauts:1,msg:"Created"};
                    let arr= data;//function that will fetch all records [cnic,emailID]
                    
                    for(let i=0;i<arr.length;i++){
                        // console.log(CNIC);
                        // console.log(arr[i].ID);
                        if(CNIC==arr[i].CNIC || ID==arr[i].ID){
                            console.log("ID matched");
                            if(CNIC==arr[i].CNIC && ID==arr[i].ID){
                                returnmsg={status: 0 ,msg:"Duplicate CNIC/ID"};
                            }
                            else if(CNIC==arr[i].CNIC){
                                returnmsg={status: 0 ,msg:"Duplicate CNIC"};    
                            }else{
                                returnmsg={status: 0 ,msg:"Duplicate ID"};
                            }
                            //returnmsg={status: 0 ,msg:"Duplicate ID"};
                            return returnmsg;
                            //break;
                            
                        }
                    }
                    return returnmsg;

                    //console.log(data);
                    //return res.send(data);
                }
            }
        )
    //    console.log("Critical Area:",ret);
    //     return ret;

        //true if person is already registered.

        console.log("executed first");
        return returnmsg;
    }



    async #AppenderName(JSobject,Attr){   ///just use to append name  for Doctor
        let temp=JSON.stringify(JSobject)
        temp=temp.slice(0,-1);
        temp=temp+",\"Name\":\""+Attr+"\"}";
        console.log("appennder function","-----",temp);
        temp=JSON.parse(temp);
        console.log("before return:",temp)
        return temp;
    }

    async #processGetAllDocOfDept(DeptID){
        let ret;
        console.log("Critical area\n\n")
        await Emp.find(
            {DeptID:DeptID},
            {Name:1,EmpID:1},
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )

        let docArr;
        await Doctor.find(
            {},
            {Speciality:1,DocID:1,_id:0},
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    docArr=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )

        // console.log('combinign')
        // console.log(docArr)
        // console.log(ret)

        // console.log(docArr.length)
        // console.log(ret.length)
        // console.log('combinign')

        let retVal=[]
        
        for (let i=0;i<docArr.length;i++){ //
            for(let j=0;j<ret.length;j++){
                //console.log(i,'-',j,'-----',docArr[i].DocID,ret[j].EmpID);
                if(docArr[i].DocID==ret[j].EmpID){
                    let temp=docArr[i];
                    //console.log(typeof(temp));
                    //temp.Name="asdasd"//ret[j].Name;
                    temp=await this.#AppenderName(temp,ret[j].Name)
                    // (temp['Name12']="abcbc")
                    console.log("temp:",temp);
                    retVal.push(temp);
                    //console.log('asd')
                    // (docArr[i])["Name"]=ret[j].Name;
                }
            }
        }
        //console.log(empArr);
        return retVal;
        //return (ret,docArr);
    }


    async getAllDocOfDept(DeptID){
        // let docArr;
        // let empArr;

        let ret=await this.#processGetAllDocOfDept(DeptID);
        // await (empArr=a[0])
        // await (docArr=a[1])
        // console.log("Doctor:-",a)
        // console.log("Emp:-",empArr)
        // let ret=null;
        // console.log("\nInside critical area doctor of department")



        // console.log('above query completed');
        // let empArr=ret;
        // //console.log(empArr[0].EmpID);

        

        
        // for (let i=0;i<ret.length;i++){ //
        //     for(let j=0;j<empArr.length;j++){
        //         console.log(i,'-',j)
        //         if(ret[i].DocID==empArr[j].EmpId){
        //             (ret[i])["Name"]=empArr[j].Name;
        //         }
        //     }
        // }
        // console.log(empArr);        
        console.log("insisde main func",ret);
       
        return ret;

        //docid,name,speciality,  //of particular dept.

        // let p;
        // let b_sync=await (async () => {
        //                     await this.connectionEstablish();
        //                     //const client = await this.#pool.connect();
        //                     const query = "SELECT \"Employee\".\"EmpId\",\"Employee\".\"Name\",\"Employee\".\"Speciality\" FROM \"Employee\" inner join \"Doctor\" on \"Employee\".\"EmpId\"=\"Doctor\".\"DocID\" where \"Employee\".\"DeptID\"=\'"+DeptID+"\'";
        //                     //const cursor 
        //                     p= await this.#connector.query(query);
                            
        //                   })();
        // //console.log(p)
        // return JSON.stringify(p.rows);        
    }    


    async getAllDetailOfDoctor(ID){
        console.log('input----',ID)
        let ret;
        console.log("Critical area\n\n")
        ret=await Doctor.findById(ID,
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )
       
        return ret;

        // let p;
        // let b_sync=await (async () => {
        //                     await this.connectionEstablish();
        //                     //const client = await this.#pool.connect();
        //                     const query = "SELECT * FROM \"Doctor\" where \"Doctor\".\"DocID\"=\'"+ID+"\'";
                        
        //                     //const cursor 
        //                     p= await this.#connector.query(query);
                            
        //                   })();
        // //console.log(p)
        // let ret=JSON.stringify(p.rows); 
        // console.log('\ntesting of get all doc\n'+ret+'\n');
        // ret=ret.slice(1,-1);
        // ret=JSON.parse(ret);
        // delete ret.EmpId;
        // return ret;

}


    async getAdmin(ID,Password){

        let ret;
        console.log("Critical area\n\n")
        await Emp.findById(ID,
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )

        if(ret.EmpID==undefined){
            return {status:0 ,msg:"Id not found",Job:"-"}
        }
        else if(ret.Password!=Password){
            return {status:0 ,msg:"Password not found",Job:"-"}
        }
        else{
            if(ret.Job=="Admin"){
                return {status:1,msg:"Id and Password is matched",Job:"Admin"}
            }
            else if(ret.Job=="Receptionist"){
                return {status:1,msg:"Id and Password is matched",Job:"Receptionist"}
            }
            else{
                return {status:0,msg:"Id not found",Job:"-"}
            }
        }
       
        return ret;

    }

    async getDoctor(ID,Password){
        let ret;
        console.log("Critical area\n\n")
        await Emp.find(
            {EmpID:ID,Job:"Doctor"},
            {EmpID:1,Password:1,_id:0},
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    try{
                        ret={EmpId:data[0].EmpID,Password:data[0].Password}
                    }catch{
                        ret={EmpId:"No ID",Password:"No Password"}
                    }
                    
                    //ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )
        let tret=JSON.stringify(ret); ;
        //tret=tret.slice(1,-1);
        console.log(tret);
        return tret;

        // let p;
        // let b_sync=await (async () => {
        //                     //const client = await this.#pool.connect();
        //                     await this.connectionEstablish();
        //                     const query = "Select \"Employee\".\"EmpId\" , \"Employee\".\"Password\" from \"Employee\" where \"Employee\".\"Job\"=\'DOCTOR\' and \"Employee\".\"EmpId\"=\'"+ID+"\'"; 
        //                     //console.log(query);
        //                     //const cursor 
        //                     p= await this.#connector.query(query);
        //                     //console.log("ok till now \n")
        //                   })();
        // //console.log(p)
        // let tret=JSON.stringify(p.rows); ;
        // tret=tret.slice(1,-1);
        // return tret;
    }
    
    
    async getEmpDetail(ID){
        let ret;
        //console.log("Critical area\n\n")
        await Emp.find(
            {EmpID:ID},
            {EmpID:0,_id:0},//{Name,DOB,Gender,Contact,Job,Salary,Address,Speciaity,Password},
            (err,data)=>{
                if(err){
                    console.log(err);
                    //return res.send(err);
                }
                else{
                    ret=data;
                    console.log(data);
                    //return res.send(data);
                }
            }
        )
        console.log("Data fetchhed here :",ret);
        return ret;        
        // let p;
        // let b_sync=await (async () => {
        //                     //const client = await this.#pool.connect();
        //                     await this.connectionEstablish();
        //                     const query = "Select \"Employee\".\"Name\" , \"Employee\".\"DOB\",\"Employee\".\"Gender\",\"Employee\".\"Contact\",\"Employee\".\"Job\",\"Employee\".\"Salary\",\"Employee\".\"Address\",\"Employee\".\"Speciality\",\"Employee\".\"Password\" from \"Employee\" where  \"Employee\".\"EmpId\"=\'"+ID+"\'"; 
        //                     //console.log(query);
        //                     //const cursor 
        //                     p= await this.#connector.query(query);
        //                     //console.log("ok till now \n")
        //                   })();
        // //console.log(p)
        // let tret=JSON.stringify(p.rows); ;
        // //tret=tret.slice(1,-1);
        // return tret;        
    }    

    async updateEmployee(EmpId,Name,DOB,Gender,Contact,Job,Salary,Address,Speciality,Password){
        console.log("trigger");
        let ret;
        await Emp.findByIdAndUpdate(
            EmpId,
            {Name:Name,DOB:DOB,Gender:Gender,Contact:Contact,Job:Job,Salary:Salary,Address:Address,Speciality:Speciality,Password:Password},
            function(err,data){
                if(err){
                    console.log(err);
                    ret={"status":"0","msg":"Error"};
                }else{
                    ret=data;
                    if(ret==null){
                        ret={"status":"0","msg":"Error"};
                    }else{
                        ret={"status":"1","msg":"Successfully updated"};
                    }
                }
            }

        )
        return ret;
        // // console.log("inside updateEmploy");
        // try {
        //     let p;
        //     let b_sync=await (async () => {
        //                         //const client = await this.#pool.connect();
        //                         await this.connectionEstablish();
        //                         const query = "UPDATE public.\"Employee\" SET \"Gender\" = \'"+Gender+"\', \"Contact\" = \'"+Contact+"\', \"Job\" = \'"+Job+"\', \"Salary\" = \'"+Salary+"\', \"Address\" = \'"+Address+"\', \"Speciality\" = \'"+Speciality+"\', \"DOB\" = \'"+DOB+"\', \"Name\" = \'"+Name+"\', \"Password\" = \'"+Password+"\'   WHERE \"EmpId\" = \'"+EmpId+"\'";
        //                         //console.log(query);
        //                         //const cursor 
        //                         p= await this.#connector.query(query);
        //                         //console.log("ok till now \n")
        //                       })();
        //     //console.log(p)
        //     //let tret=JSON.stringify(p.rows); ;
        //     //tret=tret.slice(1,-1);
        //     return {"status":"1","msg":"Successfully updated"};              
            
        // } catch (error) {
        //     return {"status":"0","msg":"Error check your values"};
        // }
    }
    
    
    async fetchPatientDetail(PatID){
    let ret;
    //console.log("Critical area\n\n")
    console.log("Critical Point Hit:",PatID);
    await Patient.find(
        {ID:PatID},
        {PatID:0,_id:0,__v:0},//{Name,DOB,Gender,Contact,Job,Salary,Address,Speciaity,Password},
        (err,data)=>{
            if(err){
                console.log(err);
                //return res.send(err);
            }
            else{
                ret=data;
                console.log(data);
                //return res.send(data);
            }
        }
    )
    if(ret.length==0){
        return ret;
    }
    ret=JSON.stringify(ret);
    ret=ret.slice(1,-1);
    ret=JSON.parse(ret);
    console.log("Data fetchhed here :",ret);
    return ret;

    //     try {
    //         let p;
    //         let b_sync=await (async () => {
    //                             //const client = await this.#pool.connect();
    //                             await this.connectionEstablish();
    //                             const query = "Select \"Name\",\"Age\",\"Gender\",\"ContactNumber\" from \"Patient\" where \"ID\"=\'"+PatID+"\'"; 
    //                             //console.log(query);
    //                             //const cursor 
    //                             p= await this.#connector.query(query);
    //                             //console.log("ok till now \n")
    //                           })();
    //         //console.log(p);

    //           let tret=JSON.stringify(p.rows); ;
    //           tret=tret.slice(1,-1);
    //           //if(tret.length==0){ return {"status":"0","Name":"-1","Age":"-1","Gender":"-1","ContactNumber":"-1"}; }
    //           if(tret.length==0){ return {"status":"0","Data":"-1"}; }
    //           tret=JSON.parse(tret);
    //           //return {"status":"1","Name":tret.Name,"Age":tret.Age,"Gender":tret.Gender,"ContactNumber":tret.ContactNumber};
    //           return {"status":"1","Data":tret};
            
              
            
    //     } catch (error) {
    //         //return {"status":"-1","Name":"-1","Age":"-1","Gender":"-1","ContactNumber":"-1"}
    //         return {"status":"-1","Data":"-1"}
    //         //throw new error("error");
    //         // let ret1={"status":"0","Date":"Error"};
    //         // ret1=JSON.stringify(ret1);
    //         // return ret1; 
    //    }        

    }


    async deletePatient(PatID){
        //console.log("inside trigger",PatID);
        let ret;
        ret={status:"1",msg:"Successfully Delete"}
        await Patient.remove(
        {_id:PatID}, 
        function(err, data) {
            if(err){
                //console.log(err);
                ret=err;
                ret={status:"0",msg:"Error in Delete"}
            }
            else{
                //ret=(data);
                ret={status:"1",msg:"Successfully Deleted"}
            }
        });
        return ret;  

    }

    async updatePatient(PatObj){
        let ret;
        let checker=await this.fetchPatientDetail(PatObj.PatID);
        if(checker.length==0){
            console.log("empty")
            return {status:"0",msg:"cant update ID not found"}
        }
        else{
            ret={status:"1",msg:"Successfully Updated"}
        }
        // return null;
    // let PatID=request.body.PatID;
    // let Name=request.body.Name;
    // let Age=request.body.Age;
    // let Address=request.body.Address;
    // let Gender=request.body.Gender;
    // let ContactNumber=request.body.ContactNumber;
    // let Password=request.body.Password;
        // console.log("trigger");
        //let ret;
        await Patient.findByIdAndUpdate(
            PatObj.PatID,
            {Name:PatObj.Name,Age:PatObj.Age,Address:PatObj.Address,Gender:PatObj.Gender,Contact:PatObj.Contact,Password:PatObj.Password},
            function(err,data){
                if(err){
                    console.log(err);
                    ret={"status":"0","msg":"Error"};
                }else{
                    ret=data;
                    if(ret==null){
                        ret={"status":"0","msg":"Error"};
                    }else{
                        ret={"status":"1","msg":"Successfully Updated"};
                    }
                }
            }

        )
        return ret;        
    }

    async #countDept(){
        let ret;
        ret=await Dept.countDocuments()
            //{},
            // (err,data)=>{
            //     if(err){
            //         console.log(err);
            //         //return res.send(err);
            //     }
            //     else{
            //         // // try{
            //         // //     //ret={EmpId:data[0].EmpID,Password:data[0].Password}
            //         // // }catch{
            //         // //     //ret={EmpId:"No ID",Password:"No Password"}
            //         // // }
            //         console.log("inside Dept exec")
            //         //return data;
            //         ret=data;
            //         //ret=data;
            //         // //console.log(data);
            //         // //return res.send(data);
            //     }
            // }
        
        //console.log("Dept ans:",tempo);
        console.log("Dept return")
        return ret;

    }

    async #countPatient(){
        let ret;
        ret=await Patient.countDocuments();
        //     {},
        //     (err,data)=>{
        //         if(err){
        //             console.log(err);
        //             //return res.send(err);
        //         }
        //         else{
        //             // try{
        //             //     //ret={EmpId:data[0].EmpID,Password:data[0].Password}
        //             // }catch{
        //             //     //ret={EmpId:"No ID",Password:"No Password"}
        //             // }
        //             console.log("inside PAt exec")
        //             ret=data;
        //             //console.log(data);
        //             //return res.send(data);
        //         }
        //     }
        // )
        console.log("patient return")
        return ret;

    }

    async #countEmp(){
        let docCounter=0;
        let AdminCounter=0;
        let ReceptionistCounter=0;
        let EmpArr;
        let ret=[0,0,0];
        
        EmpArr=await Emp.find();
        //     {},
        //     {Job:1},
        //     (err,data)=>{
        //         if(err){
        //             console.log(err);
        //             //return res.send(err);
        //         }
        //         else{
        //             console.log("inside emp exec")
        //             EmpArr=data;
        //             //console.log(data);
        //             //return res.send(data);
        //         }
        //     }
        // )

        for(let i=0;i<EmpArr.length;i++){
            //console.log(EmpArr[i].Job);
            if(EmpArr[i].Job=="Admin"){
                ret[0]=ret[0]+1
            }
            else if(EmpArr[i].Job=="Receptionist"){
                ret[1]=ret[1]+1
            }
            else if(EmpArr[i].Job=="Doctor"){
                ret[2]=ret[2]+1
            }
        }
        console.log("emp return")
        return ret;
    }

    async countAll(){
        let ret;
        let countEmp=0;
        let deptCounter=0;
        let patientCounter=0;
        ret={DeptCount:0,PatCount:0,AdminCount:0,RecepCount:0,DocCount:0};
        countEmp=await this.#countEmp();
        //console.log(countEmp);
        deptCounter=await this.#countDept();
        patientCounter=await this.#countPatient();
        ret={DeptCount:deptCounter ,PatCount:patientCounter,AdminCount:countEmp[0],RecepCount:countEmp[1],DocCount:countEmp[2]};
        // console.log("count all inside PH",deptCounter,patientCounter);
        return ret;
    } 

    async getAllDoctor(){
        let ret;
        console.log("Critical area\n\n")
        ret=await Emp.find({Job:"Doctor"})
            // (err,data)=>{
            //     if(err){
            //         console.log(err);
            //         //return res.send(err);
            //     }
            //     else{
            //         ret=data;
            //         console.log(data);
            //         //return res.send(data);
            //     }
            // }
        // )
       
        return ret;
    }

    async deleteDoctor(DocID){
        console.log("inside trigger",DocID);
        let ret;
        ret={status:"1",msg:"Successfully Delete"}
        await Doctor.deleteOne(
        {_id:DocID}
        );
        await Emp.deleteOne(
            {_id:DocID}
        );
        return ret;

        // let ret;
        // ret=await this.deleteDoctor(DocID);
        // return ret;
    }

    async updateDoctor(DocObj){
        // console.log(DocObj.DocID);
        let ret=await Doctor.findByIdAndUpdate(
            DocObj.DocID,
            {Certificate:DocObj.Certificate,Experience:DocObj.Experience,CheckupFee:DocObj.CheckupFee,Qualification:DocObj.Qualification,
                Speciality:DocObj.Speciality
            }
        )

        if(ret!=undefined){
            ret={status:1,msg:"updated"}
        }
        else{
            ret={status:0,msg:"updated"}
            return ret;
        }


        //DocID,Certificate,Experience,CheckupFee,Qualification,Address,Contact,Name,Salary
        return ret;
        // let ret;
        // ret=await this.#PHobject.updateDoctor(DocObj);
        // return ret;
    }
    
    async getAvailableDate(ID){
        console.log("Main:",ID);
        let ret;
        //console.log("Critical area\n\n")
        ret=await Doctor.findById(ID,{ActiveDay:1})
            // (err,data)=>{
            //     if(err){
            //         console.log(err);
            //         //return res.send(err);
            //     }
            //     else{
            //         ret=data;
            //         console.log(data);
            //         //return res.send(data);
            //     }
            // }
        // )
        if(ret==undefined){
            ret={ status:0,"Date":"-1"}
        }else if(ret.length==0){
            ret={ status:0,"Date":"-1"}
        }
        else{
            ret={ status:0,"Date":ret.ActiveDay}
        }
        return ret;

    }

    async countReservedSlot(ID,Date){ //YYYY_MM_DD
        console.log(ID,Date,'-------------}')

        let ret;
        ret=await App_Log.countDocuments({DocID:ID,Date:Date});
        ret={"count":ret};
        return ret;
        //console.log(ret,'-------------}')
        // try {
        //     let p;
        //     let b_sync=await (async () => {
        //                         //const client = await this.#pool.connect();
        //                         await this.connectionEstablish();
        //                         const query = "select count(*) from \"App_Log\" where \"Date\"=\'"+Date+"\' and \"DocID\"=\'"+ID+"\' and \"Status\"=true ";
        //                         //console.log(query);
        //                         //const cursor 
        //                         p= await this.#connector.query(query);
        //                         //console.log("ok till now \n")
        //                       })();
        //     //console.log(p);

        //      let tret=JSON.stringify(p.rows); ;
        //      tret=tret.slice(1,-1);
        //       tret=JSON.parse(tret);

        //       return tret;              
            
        // } catch (error) {
        //     throw new error("error");
        //     // let ret1={"status":"0","Date":"Error"};
        //     // ret1=JSON.stringify(ret1);
        //     // return ret1; 
        // }        
    }

    async getDoctorTiming(ID){

        let ret;
        ret=await Doctor.findById(
            {_id:ID},
            {AppSlot:1,Timing:1}
        );
        return ret;
    }    

    async allocateAppointment(DocID,PatID,Date,Time){
        //select checkup fee for doctor
        //counter number of appointments and add appointment+1
        //finalyy insert appointment and then send {Fee:Fee}
        //AppId and Fee
        let ret;
        let Fee;

        Fee=await Doctor.findById(
            DocID,
            {CheckupFee:1}           
        )
        Fee=Fee.CheckupFee
        console.log("FEE:",Fee);

        let NextAppID;
        NextAppID=await App_Log.countDocuments()
        NextAppID=NextAppID+1; //for next AppID
        
        ret={"AppID":NextAppID,"Fee":Fee}

        const App=new App_Log({
            _id:NextAppID,
            AppID:NextAppID,
            Date:Date,
            Time:Time,
            PatID:PatID,
            DocID:DocID,
            Fee:Fee,
            Status:true
        });

        try{
            const savedApp=await App.save();
            console.log(savedApp)
            ret={"AppID":NextAppID,"Fee":Fee}
        }catch(err){
            console.log(err);
            // console.log('error\n')
            ret=json({message:err});
            ret={"AppID":"-1","Fee":"0"}
        }

        //console.log(ret);
        return ret;        
        // try {
        //     try {
        //             let p;
        //             let b_sync=await (async () => {
        //                                 //const client = await this.#pool.connect();
        //                                 await this.connectionEstablish();
        //                                 const query = "select \"CheckupFee\" from \"Doctor\" where \"DocID\"=\'"+DocID+"\'";
        //                                 //console.log(query);
        //                                 //const cursor 
        //                                 p= await this.#connector.query(query);
        //                                 //console.log("ok till now \n")
        //                             })();
        //             //console.log(p);
        
        //             let tret=JSON.stringify(p.rows);
        //             tret=tret.slice(1,-1);
        //             tret=JSON.parse(tret);
        //             Fee=tret.CheckupFee;
        //             Fee=parseFloat(Fee);
        //             //console.log(Fee);
        //             // return tret;                
                
        //     } catch (error) {
                
        //     }
        //     let p;
        //     let b_sync=await (async () => {
        //                         //const client = await this.#pool.connect();
        //                         await this.connectionEstablish();
        //                         const query = "INSERT INTO public.\"App_Log\" (\"Date\", \"Time\", \"PatID\", \"DocID\", \"Status\", \"FeeBalance\") VALUES (\'"+Date+"\', \'"+Time+"\', \'"+PatID+"\', \'"+DocID+"\', false, \'"+Fee+"\') returning \"AppID\",\"FeeBalance\"";
        //                         //console.log(query);
        //                         //const cursor 
        //                         p= await this.#connector.query(query);
        //                         //console.log("ok till now \n")
        //                       })();
        //     console.log(p);

        //      let tret=JSON.stringify(p.rows);
        //      tret=tret.slice(1,-1);
        //       tret=JSON.parse(tret);

        //       return tret;              
            
        // } catch (error) {
        //     console.log(DocID+","+PatID+","+Date+","+Time);
        //     throw new error("error");
        //     // let ret1={"status":"0","Date":"Error"};
        //     // ret1=JSON.stringify(ret1);
        //     // return ret1; 
        // }         
    }

    async selectDoctorAppointment(DocID,Date){
        
    let ret;
    console.log("Critical area\n\n")
    if(Date=="%"){
        ret=await App_Log.find({DocID:DocID});
    }
    else{
        ret=await App_Log.find({DocID:DocID,Date:Date});
    }
   
    return ret;
       

    }
    
    async deactivateAppointment(AppID){
        console.log("complete app for doctor")
       let temp=await App_Log.findByIdAndUpdate(
        AppID,
        {Status:false}
       )
       let ret={status:1,"msg":"Appointment Completed"}
       return ret;
    }
    
    
    async getMyAppointment(ID){
        console.log("-----------",ID);
        let ret;
        console.log("Critical area\n\n")
        ret=await App_Log.find({PatID:ID,Status:true});
        return ret;
    }
    

    //-----------------------------------------------------------------------------------------------
    async testAppointment(obj){
        // console.log("Inside PH\n")
        // console.log(obj);
        // return obj;
        let ret;

        const App=new App_Log({
            _id:obj.AppID,
            AppID:obj.AppID,
            Date:obj.Date,
            Time:obj.Time,
            PatID:obj.PatID,
            DocID:obj.DocID
        });

        try{
            const savedApp=await App.save();
            console.log(savedApp)
            ret={"message":"Emp has been created","status":"1"}
        }catch(err){
            console.log(err);
            // console.log('error\n')
            ret=json({message:err});
            ret={"message":"Cannot create Emp","status":"0"}
        }

        //console.log(ret);
        return ret;
        //return JSON.stringify(p.rows);              
    }


};




 module.exports.PersistenceHandler = PersistenceHandler;
 module.exports.DBcontroller2 = DBcontroller2;
 module.exports.FileHandler = FileHandler;