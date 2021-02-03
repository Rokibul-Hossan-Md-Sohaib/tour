import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBIcon } from 'mdbreact';

import "./SignIn.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
 return(

    <div>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4"  style={{fontWeight:"bold", fontSize:"30px"}}>Sign In</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Your password" icon="lock" group type="password" validate />
        </div>
        <MDBRow className='d-flex align-items-center mb-4'>
                <MDBCol md='6' className='text-center'>
                  <MDBBtn className='z-depth-1' gradient="aqua" rounded block>
                  <a href='/register' className='blue-text ml-1'>
                      Sign In
                    </a>
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='6' style={{fontWeight:"bold", fontSize:"20px"}}>
                  <p className='font-small grey-text d-flex justify-content-end' >
                    Have an account?
                    <a href='/signup' className='blue-text ml-1'>
                      Sign Up
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
        {/* <div className="text-center">
           
          <MDBBtn color="primary">Register</MDBBtn>
        
        </div>
         */}

      </form>
      <div className='footer pt-3 mdb-color lighten-6' style={{width:"95%", marginLeft:"10px"}}>
              <MDBRow className='d-flex justify-content-center'>
                <p className='font-small white-text mb-2 pt-3'>
                  or Sign up with
                </p>
              </MDBRow>
              <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
                <a href='#!' className='fa-lg p-2 m-2 fb-ic'>
                  <MDBIcon
                    icon='facebook-f'
                    fab
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-lg p-2 m-2 tw-ic'>
                  <MDBIcon
                    fab
                    icon='twitter'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
                  <MDBIcon
                    fab
                    icon='google-plus-g'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
              </MDBRow>
            </div>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};






export default SignIn;