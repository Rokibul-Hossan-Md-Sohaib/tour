import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import { MDBCarousel, MDBCarouselInner,MDBCarouselCaption, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact"
import './Navigation.css'
// import imageA from '../../Images/image1.png'
// import imageB from '../../Images/image2.png'
// import imageC from '../../Images/image3.png';
import videoA from '../../videos/v1.mp4';
import videoB from '../../videos/v4.mp4';
import logo from '../../Images/trip.png'
import logo2 from '../../Images/favicon.png'



import Card from '../Card/Card';
import Footer from './Footer';
export default function Navigation() {
    return (
        <div>
          
            <div>
            <img src={logo} style={{width:"100%", height:"15vw"}} alt=""/>
            <ReactBootstrap.Navbar bg="dark" variant="dark">
                <nav className ="nav">
                    <a href="/home">Home</a>
                    <a href="/">Travel Plan</a>
                    <a href="/">Travel Wall</a>
                    <a href="/">Mingle</a>
                    <a href="/">Travel Memories</a>
                    <a className="signin" href="/signin">Sign In</a>
                    <img src={logo2}  alt=""/>
                </nav>
              
    {/* <ReactBootstrap.Navbar.Brand href="#home">Navbar</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link  style={{marginInlineEnd:"10px"}} href="#pricing">Pricing</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
    <ReactBootstrap.Nav.Link href="#pricing" >Pricing</ReactBootstrap.Nav.Link> */}
      {/* <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-light">Search</ReactBootstrap.Button> */}
    {/* </ReactBootstrap.Form> */}
  </ReactBootstrap.Navbar>
            </div>
           

            {/* images and videos setion */}
            <div>
                <ReactBootstrap.Container>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col className="videos" xs={6} md={4} sm={2}>
                            <div className="vdo">

                                <video src={videoA} width="100%" height="42%"
                                    controls="autoPlay"
                                    autoplay="true" />
                            </div>
                            <div className="vdo">
                                <video src={videoB} width="100%" height="42%"
                                    controls="controls"
                                    autoplay="true" />
                            </div>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} md={8}>

                        <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 image"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView className="view">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                alt="First slide"
              />
              
            </MDBView>
            <MDBCarouselCaption>
            <h2>Beach Shining</h2>
            <p>The beach can help to relive stress, regulate hormones,
            and give you the daily dose of exercise you need to feel tired.
            </p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView className="view">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView className="view">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Container>
            </div>
            <div>
                <Card></Card>
                <Footer></Footer>

            </div>

        </div>
    )
}






