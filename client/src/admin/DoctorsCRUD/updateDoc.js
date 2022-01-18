import "../admin.css"
import React, { useState,useEffect }  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import {Route,Router,Switch} from "react-router-dom";
import { MDBContainer, MDBSelect ,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBCardImage,MDBInput, MDBBtn } from 'mdbreact';
import {createBrowserHistory} from 'history';
import { render } from "@testing-library/react";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function UpdateDoc (props){


    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id');
    
    var counter=1;

 // console.log(IdFromURL);

//    console.log(props)


const [Qualification,setQualification] = useState('');
const [Experience,setExperince] = useState('');
const [Certificate,setCertificate] = useState('');
const [checkup, setCheckup] = useState('');
const [speciality, setSpeciality] = useState('');
const [regStatus, setregStatus] = useState('');


   
 useEffect(() =>{
  axios.post("http://localhost:3001/posts/detailOfDoctor", {
    ID: IdFromURL,
    //Password: loginPass,
  })
    .then((Response) => {
        console.log(Response)
        setCertificate(Response.data.Certificate);
        setExperince(Response.data.Experience);
        setSpeciality(Response.data.Speciality);
        setCheckup(Response.data.CheckupFee);
        setQualification(Response.data.Qualification);

   })
   

 },[])


 const Update = () => {

    console.log("Update Function Called.");


  axios.put("http://localhost:3001/put/updateDoctor", {
  
    DocID: IdFromURL,
    Certificate:Certificate,
   Experience:Experience,
   CheckupFee:checkup,
   Qualification:Qualification,
   Speciality:speciality
 })
   .then((Response) => {

      if(Response.data.msg =="updated") {
          var id="Doctor Profile Update";
        window.location.href = `http://localhost:3000/editDoc?id=${id}`
      }

      //console.log(Response.data.msg);

      //console.log(nameUpdate);
      //console.log(genderUpdate);
   
  })



  }


 







return (
  <div className={`back-color`} >

<Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>
<Link to="admM"><MDBBtn color="indigo">Go Back</MDBBtn></Link>

<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard style={{width:"60rem"}}>
        <MDBCardBody>
      <form>
    <p className="h5 text-center mb-4">Update Doctor Here</p>
        <div className="blue-text">
            <h6> Certificate:
          <MDBInput label={Certificate} icon="users" onChange={(e) => {setCertificate(e.target.value)}} />
          </h6>
          <h6> Experience:
          <MDBInput label={Experience} icon="users" onChange={(e) => {setExperince(e.target.value)}} />
          </h6>
          <h6> Qualification:
          <MDBInput label={Qualification} icon="users"  onChange={(e) => {setQualification(e.target.value)}}/>
          </h6>
          <h6> Speciality:
          <MDBInput label={speciality} icon="users"  onChange={(e) => {setSpeciality(e.target.value)}}/>
          </h6>
          <h6>Checkup Fee:
          <MDBInput label={checkup} icon="users"  onChange={(e) => {setCheckup(e.target.value)}}/>
          </h6>
           </div>
        <br />
        <br />
        <div className="text-center">
          <MDBBtn color="indigo" onClick={Update}>Update</MDBBtn>
        </div>
         
        
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

  

</div>
);
};




export default UpdateDoc;