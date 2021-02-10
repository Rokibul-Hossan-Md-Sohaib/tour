import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { MDBInput, MDBBtn } from "mdbreact";
import { Card, ListGroup, Tab, Row, Col, Sonnet } from 'react-bootstrap';
import { Link } from "react-router-dom";

import ReactDOM from "react-dom";
import './TravelWall.css'


const TravelWall = () => {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (

        <ReactBootstrap.Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" 
        style={{ backgroundColor: "black", width:"80%", 
        justifyContent:"center", alignItem:"center", marginLeft:"10%" }} >
            <ReactBootstrap.Tab eventKey="Share Post" title="Share Post">
                <div className="item" >
                    <input

                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={imageUploader}
                        className="input"
                    //   style={{
                    //     display: "none"
                    //   }}
                    />
                    <div

                        //   style={{
                        //     height: "60px",
                        //     width: "60px",
                        //     border: "1px dashed black"
                        //   }}
                        onClick={() => imageUploader.current.click()}
                    >

                        <img
                            className="img"
                            ref={uploadedImage}
                            style={{
                                width: "20%",
                                height: "150px",

                            }}
                        />

                    </div>
                    <div style={{ width: "250px" }}>
                        <MDBInput
                            type="textarea"
                            label="Icon Prefix"
                            rows="2"
                            icon="pencil-alt"
                        />
                        <MDBBtn gradient="peach">Post</MDBBtn>
                    </div>


                </div>
                {/* <Sonnet /> */}
            </ReactBootstrap.Tab>
            <ReactBootstrap.Tab eventKey="watchpost" title="Watch-Post">
                {/* <Sonnet /> */}
            </ReactBootstrap.Tab>
            <ReactBootstrap.Tab eventKey="home" title="Home" >
                <Link to="/home" style={{ fontSize: "30px", fontWeight: "bold" ,
                marginLeft:"15%"}}> Go  to Home Page</Link>
                {/* <Sonnet /> */}
            </ReactBootstrap.Tab>
        </ReactBootstrap.Tabs>
    )
}


export default TravelWall;