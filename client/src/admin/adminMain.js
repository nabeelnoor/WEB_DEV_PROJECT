import "../home/home.css"
import React,{useState,useEffect}  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBInput,MDBBtn,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCardTitle} from "mdbreact";
import SidenavAdm from "./sidenav_adm"
import patient from "../patient/patient.png"
import doctor from "./doctor.jpeg"
import appointment from "./appointment.png"
import department from "./hospital.png"
import admin from "./man.png"
import receptionist from "./receptionist.png"



function AdminMain (props){


  const [DataPat, setData] = useState('');


  useEffect(() => {

    fetch(`http://localhost:3001/get/countAll`)
    .then((res) => res.json())
    .then(json => {
      setData(json);
      
     
    })
    console.log(DataPat);
  },[])
    

  return (
<div className="bgrAdmin" className="bgr">
<div>
    <SidenavAdm Operation1="Doctors" Operation2="Receptionist" Operation3="Patient"
    addDoctor="Add Doctor" editDoctor="Update Doctor" delDoctor="Delete Doctor"
     addRecep="Add Receptionist" editRecep="Update Receptionist" delRecep="Delete Receptionist"
     addPat="Add Patient" editPat="Update Patient" delPat="Delete Patient"
     />
    </div>
    <br></br>
<h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>DASHBOARD</h1>
<br></br>
<br></br>
<MDBRow className="cardAdmin">
      <MDBCol  md='4' style={{ maxWidth: "18rem"  }}>
      <MDBCard className="card">
        <MDBCardImage className="img-fluid" src={patient}/>
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Total Patients:{DataPat.PatCount}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

      <MDBCol md='4' style={{ maxWidth: "18rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={doctor}
          waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Total Doctors:{DataPat.DocCount}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


    <MDBCol md='4' style={{ maxWidth: "18rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={receptionist}
          waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Receptionists:{DataPat.RecepCount}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md='4' style={{ maxWidth: "18rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={department}
          waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Departments:{DataPat.DeptCount}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md='4' style={{ maxWidth: "18rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={admin}
          waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:'indigo'}}>Admin:{DataPat.AdminCount}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    

    </MDBRow>




    

    </div>
 
  );

};

export default AdminMain;