import "./home.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import Posts from '../page/Posts';
import Pagination from '../page/Pagination';
import { MDBContainer,MDBCardImage,MDBCardTitle, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import axios from "axios";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});






function FindDoc (props){

  const [DataPat, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(() => {

    fetch(`http://localhost:3001/get/getAllDoctor`)
    .then((res) => res.json())
    .then(json => {
      setData(json);
      
     
    })
    console.log(DataPat);
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DataPat.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (

    <div>
 <Link to="/"><MDBBtn color="indigo">Home</MDBBtn></Link>

        <h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>ALL Doctors Information</h1>
        <input type = "text" style={{borderRadius:'5px',fontSize:'3vh',margin:'20px'}} placeholder ="search..." onChange = {(event)=> {setSearchTerm(event.target.value)}}
      
      />
    <br />
    <br />
    <br />
    
    <div  className="mainContainer">
        {
        DataPat.filter((val)=> { if (searchTerm == "") { return val;} else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())) { return val;}}).map((val, DOB )=>(
          <div key={DOB}>
            
    
      <MDBCol   style={{ maxWidth: "30rem"  }} className="listContainer">
      <MDBCard className="card" >
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Name: {val.Name}</MDBCardTitle>
          <span><h5>Job: {val.Job}</h5></span>
          <span><h5>ID: {val.EmpID}</h5></span>
         <span><h5>ContactNumber:{val.Contact}</h5></span> 
         <span><h5>CNIC:{val.CNIC}</h5></span>
         <span><h5>Addrss: {val.Address}</h5></span>
         <span><h5>Age: {val.Age}</h5></span>
         <span><h5>Salary: {val.Salary}</h5></span>
         <span><h5>Gender: {val.Gender}</h5></span>
        </MDBCardBody>
        <MDBBtn color="green" href = {`http://localhost:3000/viewD?id=${val.EmpID}`}>View Doctor</MDBBtn>
      </MDBCard>
    </MDBCol>

          
          </div>
          
        ))
      }
    </div>
    <div>
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={DataPat.length}
        paginate={paginate}
      />
    </div>

    </div>

  );
};



export default FindDoc;