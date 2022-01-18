import "../home/home.css"
import React from "react";
import { Link } from 'react-router-dom';
import { MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle} from "mdbreact";
import {createBrowserHistory} from 'history';


const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function SidenavAdm (props) {

    return (

        <div class="sidebar">
        <strong><a class="active" href="/" style={{color:'#151B54'}}>Home</a></strong>
        <MDBDropdown>
      <MDBDropdownToggle caret color="indigo">
        {props.Operation1}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
       <Link to="addDoc"><MDBDropdownItem>{props.addDoctor}</MDBDropdownItem></Link> 
       <Link to="editDoc"><MDBDropdownItem>{props.editDoctor}</MDBDropdownItem></Link>
       <Link to="delDoc"><MDBDropdownItem>{props.delDoctor}</MDBDropdownItem></Link> 
      </MDBDropdownMenu>
    </MDBDropdown>
    <br></br>
    <br></br>
    <MDBDropdown>
      <MDBDropdownToggle caret color="indigo">
        {props.Operation2}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
       <Link to="addRec"> <MDBDropdownItem>{props.addRecep}</MDBDropdownItem></Link>
      </MDBDropdownMenu>
    </MDBDropdown>
    <br></br>
    <br></br>
    <MDBDropdown>
      <MDBDropdownToggle caret color="indigo">
        {props.Operation3}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <Link to="addPat"><MDBDropdownItem>{props.addPat}</MDBDropdownItem></Link>
        <Link to="delPat"><MDBDropdownItem>{props.delPat}</MDBDropdownItem></Link>
      </MDBDropdownMenu>
    </MDBDropdown>
      </div>

    );

}

export default SidenavAdm;