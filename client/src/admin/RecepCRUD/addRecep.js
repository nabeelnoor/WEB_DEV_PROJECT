import "../admin.css"
import React, {useState,useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import  { Redirect } from 'react-router-dom'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBInput,MDBBtn,MDBRow,MDBCol,MDBCard,MDBCardBody     } from "mdbreact";

function AddRecep() {

const [nameReg, setnameReg] = useState('');
const [unameReg, setunameReg] = useState('');
const [ageReg, setageReg] = useState('');
const [genderReg, setgenderReg] = useState('');
const [cnicReg, setcnicReg] = useState('');
const [passwordReg, setpasswordReg] = useState('');
const [salary,setSalary] = useState('');
const [deptID,setdptID] = useState('');

const [regStatus, setregStatus] = useState('');






function Register () {
  console.log('Registration function called');
  axios.post("http://localhost:3001/posts/addEmp", {
    EmpID:unameReg,
    Name : nameReg,
    Geder : genderReg,   
    Age : ageReg, 
    CNIC : cnicReg,
    Job:"Receptionist",
    Salary:salary, 
    DeptID:deptID,
    Password : passwordReg

  })
    .then((Response) => {
      if(Response.data.status == "0") {
        setregStatus("Cannot Create Receptionist");
      }
      else {
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

    <p className="h5 text-center mb-4">Add Receptionist Profile</p>
        <div className="blue-text">
          <MDBInput label="Type Receptionist ID" icon="users" type="email" onChange={(e) => {setunameReg(e.target.value)}} required/>
          <MDBInput label="Type Receptionist Name" icon="users" type="text" onChange={(e) => {setnameReg(e.target.value)}}  />
          <MDBInput label="Type Receptionist Gender M or F" icon="male" type="text" maxlength="1" onChange={(e) => {setgenderReg(e.target.value)}} required/>
          <MDBInput label="Type Receptionist Salary" icon="lock" type="number" min="0" onChange={(e) => {setSalary(e.target.value)}} required/>
          <MDBInput label="Type Receptionist CNIC" icon="phone-volume" type="text" min="0" onChange={(e) => {setcnicReg(e.target.value)}} required/>
          <MDBInput label="Type Receptionist Deptrtment ID" icon="address-book" type="text" onChange={(e) => {setdptID(e.target.value)}} required />
          <MDBInput label="Type your Passowrd" icon="lock" group type="Password" onChange={(e) => {setpasswordReg(e.target.value)}} required/>
           </div>
           <br />
           
          <h5 style={{color: '#F08080' , textAlign:'center'}}>{regStatus}</h5>

           <br></br>
        <div className="text-center">
          <MDBBtn  onClick={Register} color="indigo">Add Receptionist</MDBBtn>
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

export default AddRecep;