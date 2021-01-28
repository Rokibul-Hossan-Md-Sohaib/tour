import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './Footer.css';
import 'mdbreact/dist/css/mdb.css'; //eta index.js e chilo ekhne ansi cz navbar r color change hochio na

const Footer = () => {
    return (
        <div>
            <MDBFooter color="" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Travel Content</h5>
            <p>
              Contact us through This Link
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled" style={{color:"blue",fontSize:"30px"}}>
                <a href="#!"><i class="fab fa-facebook-square"></i></a>
              </li>
              <li className="list-unstyled" style={{color:"gray",fontSize:"30px"}}>
                <a href="#!"><i class="fas fa-house-user"></i></a>
              </li>
              <li className="list-unstyled" style={{color:"blue",fontSize:"30px"}}>
                <a href="#!"><i class="fas fa-sign-in-alt"></i></a>
              </li>
              <li className="list-unstyled" style={{color:"black",fontSize:"30px"}}>
                <a href="#!"><i class="fas fa-phone"></i> </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> ProbhashiApp.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
        </div>
    );
};

export default Footer;