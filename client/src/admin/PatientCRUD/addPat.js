import "../admin.css"
import React, {useState,useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import  { Redirect } from 'react-router-dom'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBInput,MDBBtn,MDBRow,MDBCol,MDBCard,MDBCardBody     } from "mdbreact";

function PatientReg() {

const [nameReg, setnameReg] = useState('');
const [unameReg, setunameReg] = useState('');
const [ageReg, setageReg] = useState('');
const [addressReg, setaddressReg] = useState('');
const [contactReg, setcontactReg] = useState('');
const [cnicReg, setcnicReg] = useState('');
const [passwordReg, setpasswordReg] = useState('');
const [genderReg,setgenderReg] = useState('');
const [regStatus, setregStatus] = useState('');





function Register () {
  console.log('Registration function called');
  axios.post("http://localhost:3001/posts/makeRegisteration", {
    Name : nameReg,   
    Age : ageReg,
    Gender : genderReg, 
    Address : addressReg,
    ContactNumber : contactReg,   
    Password : passwordReg,
    CNIC : cnicReg,
    ID:unameReg
  })
    .then((Response) => {
      if(Response.data.status == "0") {
        setregStatus(Response.data.msg);
      }
      else {
        var id=Response.data.msg;
        window.location.href = `http://localhost:3000/admM`;
      }

   })

};













    return (
<div className={`back-color`} >

<Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
<Link to="/patient"><MDBBtn color="indigo">Go Back</MDBBtn></Link>

<MDBContainer className={`card-displayR`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-widthR`}>
        <MDBCardBody>
      <form className="needs-validation"
         >
      <div className={`centered-reg`}>
    
    <p className="h5 text-center mb-4">Add Patient Profile</p>
        <div className="blue-text">
          <MDBInput label="Type your Name" icon="users" onChange={(e) => {setnameReg(e.target.value)}}  />
          <MDBInput label="Type your UserName" icon="users" type="email" onChange={(e) => {setunameReg(e.target.value)}} required/>
          <MDBInput label="Type your Age" icon="lock" type="number" min="0" onChange={(e) => {setageReg(e.target.value)}} required/>
          <MDBInput label="Type your Gender M or F" icon="male" type="text" maxlength="1" onChange={(e) => {setgenderReg(e.target.value)}} required/>
          <MDBInput label="Type your Address" icon="address-book" type="text" onChange={(e) => {setaddressReg(e.target.value)}} required />
          <MDBInput label="Type your Contact Number" icon="phone-volume" type="number" min="0" onChange={(e) => {setcontactReg(e.target.value)}} required/>
          <MDBInput label="Type your CNIC" icon="lock" type="number" min="0" onChange={(e) => {setcnicReg(e.target.value)}} required/>
          <MDBInput label="Type your Passowrd" icon="lock" group type="Password" onChange={(e) => {setpasswordReg(e.target.value)}} required/>

          <h5 style={{color: '#F08080' , textAlign:'center'}}>{regStatus}</h5>

           </div>
           <br />
        <div className="text-center">
          <MDBBtn onClick={Register} color="indigo">Add Patient</MDBBtn>
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

export default PatientReg;