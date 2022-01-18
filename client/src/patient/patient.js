import "./patient.css"
import React, {useState,useEffect}  from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBInput,MDBBtn,MDBRow,MDBCol,MDBCard,MDBCardBody     } from "mdbreact";
import logo from './patient.png'

function PatientPage(props) {

  

const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 

const [loginID, setloginID] = useState('');
const [loginPass, setloginPass] = useState('');
const [loginStatus, setloginStatus] = useState('');


const Login = () => {
  console.log('Login function called');
  axios.post("http://localhost:3001/posts/login", {
    ID: loginID,
    Password: loginPass,
  })
    .then((Response) => {
      
      if(Response == Response.data.msg) {
        setloginStatus(Response.data.msg);
      }
      if(Response.data.msg == "Password matched") {
        window.location.href = `http://localhost:3000/patM?id=${loginID}`;
      }
      else {
        setloginStatus(Response.data.msg);
      }
    })

}
    

  
    return (
        <div className={`back-color`} className="bgrP" >
          <Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
          <h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>PATIENT PORTAL</h1>
          <br></br>
        <MDBContainer className={`card-display`}>
          <MDBRow md="4">
            <MDBCol >
            <MDBCard className={`card-width`}>
                <MDBCardBody>
              <form>
              <div className={`centered-login`}>
            <img src={logo} alt="Responsive image" />
            <p className="h5 text-center mb-4">Sign in Please</p>
                <div className="blue-text">
                  <MDBInput label="Type your ID" icon="envelope"  onChange={(e) => {setloginID(e.target.value)}} />
                  <MDBInput label="Type your Password" icon="lock" group type="Password" onChange={(e) => {setloginPass(e.target.value)}} />
                </div>
                <div className="text-center">
                <MDBBtn onClick={Login} color="indigo">Login</MDBBtn>
                  <br />
                  <h2 style={{color:'#4863A0'}}>OR</h2>
                  <Link to="/register"><MDBBtn color="indigo">Sign Up</MDBBtn></Link>
                </div>
                </div>
                <br></br>
                <h3 style={{color: 'red' , textAlign:'center'}}>{loginStatus}</h3>
                <h3 style={{color: 'green' , textAlign:'center'}}>{IdFromURL}</h3>

              </form>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
    );
}

export default PatientPage;