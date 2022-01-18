import React from 'react';
import { MDBContainer,MDBCardImage,MDBCardTitle, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
const Posts = ({ posts}) => {

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
      <li key={post.id}>
              
      <MDBCol   style={{ maxWidth: "30rem"  }} className="listContainer">
      <MDBCard className="card" >
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Name: {post.Name}</MDBCardTitle>
          <span><h5>Job: {post.Job}</h5></span>
          <span><h5>ID: {post.EmpID}</h5></span>
         <span><h5>ContactNumber:{post.Contact}</h5></span> 
         <span><h5>CNIC:{post.CNIC}</h5></span>
         <span><h5>Addrss: {post.Address}</h5></span>
         <span><h5>Age: {post.Age}</h5></span>
         <span><h5>Salary: {post.Salary}</h5></span>
         <span><h5>Gender: {post.Gender}</h5></span>
        </MDBCardBody>
        <MDBBtn color="green" href = {`http://localhost:3000/viewD?id=${post.EmpID}`}>View Doctor</MDBBtn>
      </MDBCard>
    </MDBCol>

        </li>
      ))}
    </ul>
  );
};

export default Posts;