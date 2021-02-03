import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

import "./Signup.css"
const Signup = () => {
  return (
   
    <div>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4"  style={{fontWeight:"bold", fontSize:"30px"}}>Sign Up</p>
        <div className="grey-text">
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Your password" icon="lock" group type="password" validate />
        </div>
        <MDBRow className='d-flex align-items-center mb-4'>
                <MDBCol md='6' className='text-center'>
                  <MDBBtn className='z-depth-1' gradient="purple" rounded block>
                  <a href='/register'>
                    Sign Up
                    </a>
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='6'>
                  <p className='font-small grey-text d-flex justify-content-end' style={{fontWeight:"bold", fontSize:"15px"}}>
                   Forget
                    <a href='#' className='blue-text ml-1'>
                    password
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>

              <p className='font-small grey-text d-flex justify-content-end'  >
                    Don't Have an account
                    <a href='/signin' className='blue-text ml-1'>
                     <h5 style={{fontWeight:"bold", fontSize:"20px"}} >Sign In</h5> 
                    </a>
                    </p>
        {/* <div className="text-center">
           
          <MDBBtn color="primary">Register</MDBBtn>
        
        </div>
         */}

      </form>
      
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
  );
};

export default Signup;