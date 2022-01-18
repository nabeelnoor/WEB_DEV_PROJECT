import React, { useState } from 'react';
import ReactDom from 'react-dom';
import HomePage from "./home/home"
import {Route,Router,Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
import PatientPage from './patient/patient';
import PatientReg from './patient/patientR';
import AdminPage from './admin/adminL';
import AdminMain from './admin/adminMain';
import PatientMain from './patient/patientMain';
import AddDoctor from './admin/DoctorsCRUD/addDoctor';
import AddRecep from './admin/RecepCRUD/addRecep';
import EditDoctor from './admin/DoctorsCRUD/editDoctor';
import AddPatient from './admin/PatientCRUD/addPat';
import DelPat from './admin/PatientCRUD/delPat';
import UpdateDoc from './admin/DoctorsCRUD/updateDoc';
import DelDoc from './admin/DoctorsCRUD/delDoc';
import FindDoc from './home/find';
import ViewDoc from './home/viewDoctor';
import DoctorPage from './doctor/doctor';
import DoctorMain from './doctor/doctorMain';
import BookApp from './patient/bookApp';
import BookAppD from './patient/bookAppD';
import BookAppT from './patient/make';
import BookTime from './patient/appTime';



const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div>
        <Switch>
          <Route exact path="/" component= {HomePage}/>
          <Route exact path="/patient" component= {PatientPage}/>
          <Route exact path="/register" component= {PatientReg}/>
          <Route exact path="/admin" component= {AdminPage}/>
          <Route exact path="/admM" component= {AdminMain}/>
          <Route exact path="/patM" component= {PatientMain}/>
          <Route exact path="/addDoc" component= {AddDoctor}/>
          <Route exact path="/addRec" component= {AddRecep}/>
          <Route exact path="/editDoc" component= {EditDoctor}/>
          <Route exact path="/addPat" component= {AddPatient}/>
          <Route exact path="/delPat" component= {DelPat}/>
          <Route exact path="/updDoc" component= {UpdateDoc}/>
          <Route exact path="/delDoc" component= {DelDoc}/>
          <Route exact path="/find" component= {FindDoc}/>
          <Route exact path="/viewD" component= {ViewDoc}/>
          <Route exact path="/doctor" component= {DoctorPage}/>
          <Route exact path="/doctorM" component= {DoctorMain}/>
          <Route exact path="/bookA" component= {BookApp}/>
          <Route exact path="/bookD" component= {BookAppD}/>
          <Route exact path="/bookT" component= {BookAppT}/>
          <Route exact path="/bookTime" component= {BookTime}/>
          <Route/>
        </Switch>
        </div>
      </Router>
      )  
    }
};


ReactDom.render(<App />, document.querySelector('#root'));