import "../admin.css"
import React, {useState,useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import  { Redirect } from 'react-router-dom'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBInput,MDBBtn,MDBRow,MDBCol,MDBCard,MDBCardBody     } from "mdbreact";
import logo from '../doctor.jpeg'

function AddDoctor() {

const [nameReg, setnameReg] = useState('');
const [unameReg, setunameReg] = useState('');
const [ageReg, setageReg] = useState('');
const [genderReg, setgenderReg] = useState('');
const [addressReg, setaddressReg] = useState('');
const [contactReg, setcontactReg] = useState('');
const [cnicReg, setcnicReg] = useState('');
const [passwordReg, setpasswordReg] = useState('');
const [salary,setSalary] = useState('');
const [deptID,setdptID] = useState('');
const [speciality,setspeciality] = useState('');
const [dob,setdob] = useState('');
const [Qualification,setqualification] = useState('');
const [Experience,setexperince] = useState('');
const [Certificate,setcertificate] = useState('');
const [activeday,setactiveday] = useState('');

const [timing, settiming] = useState('');
const [slots, setslots] = useState('');
const [checkup, setcheckup] = useState('');
const [regStatus, setregStatus] = useState('');






function Register () {
  console.log('Registration function called');
  axios.post("http://localhost:3001/posts/addDoc", {
    DocID:unameReg,
    Name : nameReg,
    Gender : genderReg,   
    Age : ageReg, 
    Contact : contactReg,
    CNIC : cnicReg,
    Job:"Doctor",
    Salary:salary,
    Address : addressReg,   
    DeptID:deptID,
    Speciality:speciality,
    Password : passwordReg,
    DOB:dob,
    Qualification:Qualification,
    Certificate:Certificate,
    Experience:Experience,
    ActiveDay:activeday,
    Timing:timing, 
    AppSlot:slots,
    CheckupFee:checkup

  })
    .then((Response) => {
      if(Response.data.status == "0") {
        setregStatus(Response.data.message);
      }
      else {
        var id="Doctor Created";
        window.location.href = `http://localhost:3000/admM`;
      }

   })

};













    return (
<div className={`back-color`} >

<Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
<Link to="/admM"><MDBBtn color="indigo">Go Back</MDBBtn></Link>
<br></br>
<br></br>
<br></br>

<MDBContainer className={`card-displayDR`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-widthDR`}>
        <MDBCardBody>
      <form className="needs-validation"
         >
      <div className={`centered-reg`}>

    <p className="h5 text-center mb-4">Add Doctor Profile</p>
        <div className="blue-text">
          <MDBInput label="Type Doctor ID" icon="users" type="email" onChange={(e) => {setunameReg(e.target.value)}} required/>
          <MDBInput label="Type Doctor Name" icon="users" type="text" onChange={(e) => {setnameReg(e.target.value)}}  />
          <MDBInput label="Type Doctor Gender M or F" icon="male" type="text" maxlength="1" onChange={(e) => {setgenderReg(e.target.value)}} required/>
          <MDBInput label="Type Doctor Age" icon="lock" type="number" maxlength="1" onChange={(e) => {setageReg(e.target.value)}} required/>
          <MDBInput label="Type your Contact Number" icon="phone-volume" type="text" min="0" onChange={(e) => {setcontactReg(e.target.value)}} required/>
          <MDBInput label="Type your CNIC" icon="phone-volume" type="text" min="0" onChange={(e) => {setcnicReg(e.target.value)}} required/>
          <MDBInput label="Type Doctor Salary" icon="lock" type="number" min="0" onChange={(e) => {setSalary(e.target.value)}} required/>
          <MDBInput label="Type your Address" icon="address-book" type="text" onChange={(e) => {setaddressReg(e.target.value)}} required />
          <MDBInput label="Type your Deptrtment ID" icon="address-book" type="text" onChange={(e) => {setdptID(e.target.value)}} required />
          <MDBInput label="Type your Speciality" icon="lock" type="text" min="0" onChange={(e) => {setspeciality(e.target.value)}} required/>
          <MDBInput icon="lock" label="Type date in this format : yyyy/mm/dd" type="text" min="0" onChange={(e) => {setdob(e.target.value)}} required/>
          <MDBInput label="Type Doctor Qualification" icon="lock" type="text" min="0" onChange={(e) => {setqualification(e.target.value)}} required/>
          <MDBInput label="Type Doctor Certificate" icon="lock" type="text" min="0" onChange={(e) => {setcertificate(e.target.value)}} required/>
          <MDBInput label="Type Doctor Experience" icon="lock" type="text" min="0" onChange={(e) => {setexperince(e.target.value)}} required/>
          <MDBInput label="Type Doctor Active Day" icon="lock" type="text" min="0" onChange={(e) => {setactiveday(e.target.value)}} required/>
          <MDBInput label="Type Doctor Timing" icon="lock" type="Text" min="0" onChange={(e) => {settiming(e.target.value)}} required/>
          <MDBInput label="Type Doctor Appointment slots" icon="lock" type="number" min="0" onChange={(e) => {setslots(e.target.value)}} required/>
          <MDBInput label="Type your Checkup fee" icon="address-book" type="number" onChange={(e) => {setcheckup(e.target.value)}} required />
          <MDBInput label="Type your Passowrd" icon="lock" group type="Password" onChange={(e) => {setpasswordReg(e.target.value)}} required/>

          <h5 style={{color: '#F08080' , textAlign:'center'}}>{regStatus}</h5>

           </div>
           <br />
        <div className="text-center">
          <MDBBtn  onClick={Register} color="indigo">Add Doctor</MDBBtn>
        </div>
         
        </div>
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

  

</div>
    );
}

export default AddDoctor;