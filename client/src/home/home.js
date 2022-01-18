import "./home.css"
import React  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel,MDBRow,MDBFooter,MDBCol, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import logo from "./pic2.jpg";
import logo1 from "./pic1.jpg";
import logo2 from "./pic4.jpg";
import Sidenav from "./sidenav"



function HomePage (){

    

  return (
    <div>
<div className="bgr">
<div>
    <Sidenav name1="Admin Portal" name2="Make Appointment" name3="Doctor Portal" name4="Find Doctor" link1="admin" link2="patient" link3="doctor" link4="find"/>
    </div>
<MDBContainer>
  <br></br>
<h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>HEALTH CARE <i class="fas fa-laptop-medical"></i></h1>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        className="pad"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView >
              <img
                className="d-block  w-100"
                src={logo2}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-120"
                src={logo}
                alt="Second slide"
                class="img-fluid"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-120"
                src={logo1}
                alt="Third slide"
                class="img-fluid"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel> 
    </MDBContainer>

    </div>


    <MDBFooter className="foot" color="indigo" className="font-large pt-8 ml-5 mt-3">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: HealthCare <i class="fas fa-laptop-medical"></i>
        </MDBContainer>
      </div>
    </MDBFooter>


    
 </div>
  );

};

export default HomePage;