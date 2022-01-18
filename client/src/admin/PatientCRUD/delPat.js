import "../admin.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import { MDBContainer,MDBCardImage,MDBCardTitle, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import patient from "./patient.png"
import axios from "axios";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});






function DelPat (props){

  const [DataPat, setData] = useState([]);


  useEffect(() => {

    fetch(`http://localhost:3001/get/getAllPatients`)
    .then((res) => res.json())
    .then(json => {
      setData(json);
      
     
    })
    console.log(DataPat);
  },[])

  

  return (

    <div>
 <Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
<Link to="/admM"><MDBBtn color="indigo">Go Back</MDBBtn></Link>

        <h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>ALL Patients Information</h1>
    <br />
    <div  className="mainContainer">
        {
        DataPat.map((item,index)=>(
          <div key={index}>
            
    
      <MDBCol   style={{ maxWidth: "30rem"  }} className="listContainer">
      <MDBCard className="card" >
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Name: {item.Name}</MDBCardTitle>
          <span><h5>ID: {item.ID}</h5></span>
         <span><h5>ContactNumber:{item.ContactNumber}</h5></span> 
         <span><h5>CNIC:{item.CNIC}</h5></span>
         <span><h5>Addrss: {item.Address}</h5></span>
         <span><h5>Age: {item.Age}</h5></span>
         <span><h5>Gender: {item.Gender}</h5></span>
        </MDBCardBody>
        <MDBBtn color="red" onClick={() => {delPatient(item.ID)}}>Delete Patient</MDBBtn>
      </MDBCard>
    </MDBCol>

          
          </div>
        ))
      }

        
    </div>

    </div>

  );
};


function delPatient(ID) {
    axios.post("http://localhost:3001/posts/deletePatient", {
        PatID: ID
        //Password: loginPass,
      })
        .then((Response) => {
                  if(Response.data.status == "1") {
                      window.location.href = `http://localhost:3000/admM`;
                  }
  
        })
}



export default DelPat;