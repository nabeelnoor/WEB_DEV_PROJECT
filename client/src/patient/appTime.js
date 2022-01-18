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






function BookTime (props){

  const [DataPat, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const search = props.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdFromURL = params.get('id');  
  const DateFromURL = params.get('date'); 
  const PidFromURL = params.get('pid'); 
  
 // console.log(IdFromURL);
  //console.log(DateFromURL);
  

const [dateAppointment, setdateAppointment] = useState("");


useEffect(() => {


    axios.post("http://localhost:3001/posts/requestTime", {
      Date: DateFromURL,
      ID:IdFromURL
      //Password: loginPass,
    })
      .then((Response) => {
 
          setdateAppointment(Response.data.timing);

          console.log(Response);
      
     })
    
    },[])
  

  return (

    <div>
 <Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
 <Link to="/patM"><MDBBtn color="indigo">Back</MDBBtn></Link>
        <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Appointment Info.</h2>
          <h3>Your Timing for your Appointment is : {dateAppointment}</h3>  
          <MDBBtn color="indigo" onClick={()=>Time(DateFromURL,PidFromURL,IdFromURL,dateAppointment)}>Submit</MDBBtn>
     <br />
    <br />
 


    </div>

  );
};


const Time = (id1,id2,id3,id4) => {
    console.log(id1 ,id2,id3,id4)
        axios.post("http://localhost:3001/posts/confirmAppointment", {
  Date: id1,
  ID:id2,
  DocID:id3,
  Time:id4

})
  .then((Response) => {
         //setFeeAppointment(Response.data.FeeBalance);
         
         var id="Appointment Booked."
         window.location.href = `http://localhost:3000/patient?id=${id}`;

 })
}


export default BookTime;