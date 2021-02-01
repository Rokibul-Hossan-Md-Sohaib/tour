import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

import 'mdbreact/dist/css/mdb.css';
import './Card.css';


const Card = () => {
    return (
        <div>
            <MDBCardGroup className='card'>
                <MDBCard style={{ borderRadius: "40px 30px" }}>
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                    <MDBCardBody >
                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
          </MDBCardText>
                        <MDBBtn color="primary" size="md sm">
                            read more
          </MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ borderRadius: "40px 30px" }}>
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
          </MDBCardText>
                        <MDBBtn color="primary" size="md sm">
                            read more
          </MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ borderRadius: "40px 30px" }}>
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
          </MDBCardText>
                        <MDBBtn color="primary" size="md sm">
                            read more
          </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>

        </div>
    );
};

export default Card;