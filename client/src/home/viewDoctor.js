import "./home.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer,MDBCardImage,MDBCardTitle, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import axios from "axios";
import logo from "./doctor.jpeg"
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});






function ViewDoc (props){

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id');


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
const [searchterm, setSearchTerm] = useState('');



    useEffect(() =>{
        axios.post("http://localhost:3001/posts/detailOfDoctor", {
          ID: IdFromURL,
          //Password: loginPass,
        })
          .then((Response) => {
              console.log(Response)
              settiming(Response.data.Timing);
              setactiveday(Response.data.ActiveDay);
              setslots(Response.data.AppSlot);
              setdptID(Response.data.DocID);
              setcertificate(Response.data.Certificate);
              setexperince(Response.data.Experience);
              setspeciality(Response.data.Speciality);
              setcheckup(Response.data.CheckupFee);
              setqualification(Response.data.Qualification);
      
         })
         
      
       },[])

  

  return (

    <div>
 <Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
 <Link to="/find"><MDBBtn color="indigo">Back</MDBBtn></Link>

    <br />
    <br />
    <br />

    <img src={logo} style={{height:'20vh',paddingLeft:'20vh'}} />
      <MDBCol   style={{ maxWidth: "40rem"  }} className="listContainer">
      <MDBCard className="card" >
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Doctor ID: {deptID}</MDBCardTitle>
          <span><h5>Doctor Timing: {timing}</h5></span>
          <span><h5>Doctor Qualification: {Qualification}</h5></span>
         <span><h5>Doctor Active Days:{activeday}</h5></span> 
         <span><h5>Doctor Certificate:{Certificate}</h5></span>
         <span><h5>Doctor Experience: {Experience}</h5></span>
         <span><h5>Doctor Checkup Fees: {checkup}</h5></span>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


    </div>

  );
};



export default ViewDoc;