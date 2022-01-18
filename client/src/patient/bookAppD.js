import "./patient.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer,MDBCardImage,MDBCardTitle, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import axios from "axios";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});






function BookAppD (props){

  const [DataPat, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 

  useEffect(() => {

    fetch(`http://localhost:3001/get/doctorofDept?id=${IdFromURL}`)
    .then((res) => res.json())
    .then(json => {
      setData(json);
      
     
    })
    console.log(DataPat);
  },[])

  

  return (

    <div>
 <Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
 <Link to="/patM"><MDBBtn color="indigo">Back</MDBBtn></Link>

        <h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>ALL Doctors Information</h1>
    <br />
    <br />
    <div  className="mainContainer">
        {
        DataPat.map((item,index)=>(
          <div key={index}>
            
    
      <MDBCol   style={{ maxWidth: "30rem"  }} className="listContainer">
      <MDBCard className="card" >
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Department Name: {item.Name}</MDBCardTitle>
          <span><h5>ID: {item.DocID}</h5></span>
          <span><h5>Speciality: {item.Speciality}</h5></span>
        </MDBCardBody>
        <MDBBtn color="green" href = {`http://localhost:3000/bookT?id=${item.DocID}`}>Make Appointment</MDBBtn>
      </MDBCard>
    </MDBCol>

          
          </div>
        ))
      }

        
    </div>

    </div>

  );
};



export default BookAppD;