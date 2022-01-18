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

function EditDoctor(props) {

const [loginID, setloginID] = useState('');
const [regStatus, setregStatus] = useState('');

const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 




    return (
<div className={`back-color`} >

<Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
<Link to="/admM"><MDBBtn color="indigo">Go Back</MDBBtn></Link>

<MDBContainer className={`card-displayR`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-widthR`}>
        <MDBCardBody>
      <form className="needs-validation"
         >
      <div className={`centered-reg`}>
    <img src={logo} alt="User" />
    
    <p className="h5 text-center mb-4">Enter Doctor ID:</p>
        <div className="blue-text">
          <MDBInput label="Type Doctor ID" icon="users" onChange={(e) => {setloginID(e.target.value)}}  />
          <h5 style={{color: '#F08080' , textAlign:'center'}}>{regStatus}</h5>
           </div>
           <br />
        <div className="text-center">
          <MDBBtn href = {`http://localhost:3000/updDoc?id=${loginID}`}color="indigo">Enter</MDBBtn>
        </div>
        </div>
        <br />
        <h3 style={{color:'green',padding:'25px'}}>{IdFromURL}</h3>
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

  

</div>
    );
}

export default EditDoctor;