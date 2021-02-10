import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon ,
  MDBCard, MDBCardBody, MDBInput,  MDBBtn,MDBSelect
} from
"mdbreact";
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from "react-router-dom";

class TravelPlan extends Component {
  constructor(){
    super()
    this.state={
      show:true
    }
  }
operation(){
  this.setState({
    show:false
  })
}

state = {
  activeItemJustified: "1",
 
}

toggleJustified = tab => e => {
  if (this.state.activeItemJustified !== tab) {
    this.setState({
      activeItemJustified: tab
    });
  }
};



render() {
    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified" style={{backgroundColor:"black"}} color='black'>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
              <MDBIcon icon="user-friends" /> Make Plan
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
              <MDBIcon icon="heart" /> Watch Other Plan
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
              <MDBIcon icon="home" /> Home
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card"
          activeItem={this.state.activeItemJustified}
        >
          <MDBTabPane tabId="1" role="tabpanel">
        
            <div className="mt-7">
              <div >
               
      <MDBContainer>
            {this.state.show?
      <MDBRow>
        <MDBCol md='12'>
          <MDBCard>
            <MDBCardBody className='mx-4'>
              <div className='text-center'>
                <h3 className='blue-text mb-5'>
                  <strong>Make Plan</strong>
                </h3>
              </div>
            
              <MDBRow>
              <MDBCol> <MDBInput 
              label="Desire Place"
               icon="globe-europe"
                group type="text" 
                validate error="wrong"
                success="right"
                 name="address"
                id="address"
                />
                </MDBCol>
            {/* <MDBCol>
               <MDBInput 
              label="Your country" 
              icon="flag" 
              group type="text" 
              validate error="wrong"
              success="right" 
              name="country"
              id="country"
             /> </MDBCol> */}

             </MDBRow>
             
             
             <MDBRow>
            
            <MDBCol>
            <div>
                <select class="custom-select" name="gender" 
                                  success="right" >
                  <option selected>How Long</option>
                  <option value="female">2-5 days</option>
                  <option value="male">7-15 days</option>
                  <option value="other">20-40 days</option>
                </select>
              </div> </MDBCol>
              <MDBCol>
            <div>
                <select class="custom-select" name="gender" 
                                  success="right" >
                  <option selected>How Many People</option>
                  <option value="female">2-5 </option>
                  <option value="male">7-15 </option>
                  <option value="other">20-40 </option>
                  <option value="other">or Single </option>
                </select>
              </div> </MDBCol>
              
  

             </MDBRow>
            
              <MDBRow>
              <MDBCol> <MDBInput 
              label="Estimated Budget"
               icon="file-invoice-dollar"
                group type="text" 
                validate error="wrong"
                success="right"
                 name="budget"
                id="budget"
                />
                </MDBCol>
            <MDBCol>
               <MDBInput 
              label="Contact" 
              icon="phone" 
              group type="text" 
              validate error="wrong"
              success="right" 
              name="phone"
              id="phone"
             /> </MDBCol>

             </MDBRow>
             
             
              <div className='md-form pb-3'>
                <div className='form-check my-4'>
                  <MDBInput
                    label={
                      <>
                        Accept&nbsp;
                        <a href='/' className='blue-text'>
                          the Terms and Conditions
                        </a>
                      </>
                    }
                    type='checkbox'
                    id='checkbox1'
                  />
                </div>
              </div>
              <MDBRow className='d-flex align-items-center mb-4'>
                <MDBCol md='6' className='text-center'>
                <MDBBtn  className='z-depth-1' gradient="aqua" rounded block onClick={()=>this.operation()} >
                    Post Plan Request
                  </MDBBtn>
                </MDBCol>         
              </MDBRow>
             
            </MDBCardBody>
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
     : 
     <div>success</div>
    }    
    </MDBContainer>
    </div>
            </div>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit,
              blog sartorial PBR leggings next level wes anderson artisan
              four loko farm-to-table craft beer twee. Qui photo booth
              letterpress, commodo enim craft beer mlkshk aliquip jean
              shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
              assumenda labore aesthetic magna delectus mollit. Keytar
              helvetica VHS salvia yr, vero magna velit sapiente labore
              stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
              sustainable jean shorts beard ut DIY ethical culpa terry
              richardson biodiesel. Art party scenester stumptown, tumblr
              butcher vero sint qui sapiente accusamus tattooed echo park.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
         <Link to ="/home">Go  to Home Page</Link> 
         </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default TravelPlan;