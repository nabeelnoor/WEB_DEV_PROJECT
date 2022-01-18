import "../home/home.css"
import React  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBFooter,MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBInput,MDBBtn,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCardTitle} from "mdbreact";
import Sidenav from "../home/sidenav"
import P1 from "./p1.jpeg";
import P3 from "./p3.jpeg";



function DoctorMain (){



  return (
      <div>
<div className="bgr">
<div>
    <Sidenav name1="View Appointments" name2="Add Report"/>
    </div>
<h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>DOCTOR PORTAL</h1>
<MDBContainer>
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
                src={P3}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-120"
                src={P1}
                alt="Second slide"
                class="img-fluid"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel> 

    </MDBContainer>

    </div>

</div>

 
  );

};

export default DoctorMain;