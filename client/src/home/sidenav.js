import "./home.css"
import React from "react";
import { Link } from 'react-router-dom';
import { MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle} from "mdbreact";
import {createBrowserHistory} from 'history';


const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function Sidenav (props) {

    return (

        <div class="sidebar">
        <strong><a class="active" href="/" style={{color:'#151B54'}}>Home</a></strong>
        <Link to={props.link1} >{props.name1}</Link>
        <Link to={props.link2} >{props.name2}</Link>
        <Link to={props.link3} >{props.name3}</Link>
        <Link to={props.link4} >{props.name4}</Link>
      </div>

    );

}

export default Sidenav;