import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import './Navigation.css'
import imageA from '../../Images/image1.png'
import imageB from '../../Images/image2.png'
import imageC from '../../Images/image3.png'


// import Card from '../Card/Card';
import Footer from './Footer';
export default function Navigation() {
  return (

    <div>
      <div>
        {/* navbar setion*/}
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="rgb(2, 41, 41)" className="navbar" >
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto nav">
              <ReactBootstrap.Nav.Link href="#home" >Sing In</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="#home" >Sing Up</ReactBootstrap.Nav.Link>

              <ReactBootstrap.NavDropdown title="Home" id="basic-nav-dropdown ">
                <div className="navdrop">
                  <ReactBootstrap.NavDropdown.Item href="#action/3.1">Travel Plan</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.2">Travel Wall</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.3"> Mingle</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.4"> Travel Memories</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                </div>

              </ReactBootstrap.NavDropdown>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Form inline>
              <ReactBootstrap.FormControl type="text" placeholder="Search" />
              <ReactBootstrap.Button varient='dark'>Search</ReactBootstrap.Button>
            </ReactBootstrap.Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </div>

      {/* images and videos setion */}
      <div>
        <ReactBootstrap.Container>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col className="videos" xs={6} md={4} sm={2}>
              <div>
                <video src= {""} width="100%" height="42%"
                  controls="controls"
                  autoplay="true" />
              </div>
              <div className="vdo">
                <video src={""} width="100%" height="42%"
                  controls="controls"
                  autoplay="true" />
              </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs={12} md={8}>

              <ReactBootstrap.Carousel className="image">
                <ReactBootstrap.Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={imageC}
                    alt="First slide"
                  />
                  <ReactBootstrap.Carousel.Caption>
                    <h2>Beach Shining</h2>
                    <p>The beach can help to relive stress, regulate hormones,
                    and give you the daily dose of exercise you need to feel tired.
                    You can absorb your daily amount of Vitamin D,
                    and more! Spending as little time as 10 minutes in the sun,
        you can absorb an entire day's worth of vitamin D!</p>
                  </ReactBootstrap.Carousel.Caption>
                </ReactBootstrap.Carousel.Item>
                <ReactBootstrap.Carousel.Item interval={800}>
                  <img
                    style={{ height: "465px", weight: "50%" }}
                    className="d-block w-100"
                    src={imageB}
                    alt="Third slide"
                  />
                  <ReactBootstrap.Carousel.Caption>
                    <h2>Hill River</h2>
                    <p>The team sentiment by the end of the weekend’s immersion in the beauty of the river and estuary was a sense of
        ‘we must do all we can to save this place”.</p>
                  </ReactBootstrap.Carousel.Caption>
                </ReactBootstrap.Carousel.Item>
                <ReactBootstrap.Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imageA}
                    alt=""
                  />
                  <ReactBootstrap.Carousel.Caption>
                    <h2>Mountain Sunset</h2>
                    <p>Mother Nature doesn't need a filter.
                    Sunset state of mind.
                    Fifty shades of pink.
                    Born to chase sunsets.
                    The setting sun kindled the sky.
                    Sunset. This is my favorite color.
                    The only kinds of sunsets that I don't like are the ones that I missed.
        You can never watch too many sunsets.</p>
                  </ReactBootstrap.Carousel.Caption>
                </ReactBootstrap.Carousel.Item>
              </ReactBootstrap.Carousel>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </div>
      <div>
      {/* <Card></Card> */}
        <Footer></Footer>
        
      </div>

    </div>
  )
}






