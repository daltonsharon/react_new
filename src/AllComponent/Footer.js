import React from 'react';
import { Col, Row } from 'reactstrap';
import './Footer.css'
import {  InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
function Footer(props) {
    return (
      
        <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col>
            <Row style={{ backgroundColor: "black", height: "fit-content", marginTop: "3rem" }}>
                <Col lg={1} style={{ dispaly: "flex", marginLeft: "5rem", display: "flex", marginLeft: "5rem", marginLeft: "5rem", margin: "auto" }}><a style={{ color: "white",fontSize:"1rem" }} href="#" >About Us</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto", marginLeft: "-1rem" }}><a style={{ color: "white",fontSize:"1rem" }} href="#" >HG impact</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto", marginleft: "-1rem" }}><a style={{ color: "white",fontSize:"1rem" }} href="#" >Terms&condition</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto", marginRight: "-4rem" }} ><a style={{ color: "white",fontSize:"1rem" }} href="#" >Policy</a></Col>
                <Col lg={2} style={{ display: "flex", margin: "auto", marginRight: "-5rem" }}><a style={{ color: "white",fontSize:"1rem" }} href="#" >Anti Discrimination Policy</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto", marginLeft: "3rem", marginRight: "-1rem" }}><a style={{ color: "white",fontSize:"1rem" }} href="#" >Blog</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto" }}><a style={{ color: "white",fontSize:"1rem" }} href="#" >Reviews</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto" }} ><a style={{ color: "white",fontSize:"1rem" }} href="#" >Near Me</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto" }} ><a style={{ color: "white",fontSize:"1rem" }} href="#" >Careers</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto" }} ><a style={{ color: "white",fontSize:"1rem" }} href="#" >Gift Card</a></Col>
                <Col lg={1} style={{ display: "flex", margin: "auto" }} ><a style={{ color: "white",fontSize:"1rem" }} href="#" >Contact Us</a></Col><br />
                <br />
                <br />
                <div className="FooterTop"></div>
                
                <Row style={{marginLeft: "3%",
    fontSize: "initial"}}>
            <Row style={{color:"white",fontSize:"bold",marginLeft:"-2%"}}>
              <u>Serving in</u>
            </Row>
            <Row style={{color:"white",fontSize:"bold"}}>
                Aus
            </Row>
            <Row style={{color:"grey",padding:"10px"}}>
                Melbourne ,
                Sydney ,
            </Row>
            <Row style={{color:"white",fontSize:"bold"}}>
                Ind
            </Row>
            <Row>
                <Col style={{color:"grey",marginLeft:"-1%",display: "flex",
    
    flexWrap: "wrap",padding:"10px"}}>
                Agra , 
                Ahmedabad , 
                Amritsar , 
                Aurangabad , 
                Bangalore , 
                Bhopal , 
                Bhubaneswar , 
                Chandigarh Tricity , 
                Chennai , 
                Coimbatore , 
                Dehradun , 
                Delhi NCR , 
                Guwahati , 
                Gwalior , 
                Hyderabad , 
                Indore , 
                Jabalpur , 
                Jaipur , 
                Jamshedpur , 
                Kanpur , 
                Kochi , 
                Kolkata , 
                Kota , 
                Lucknow , 
                Ludhiana , 
                Meerut , 
                Mumbai , 
                Mysore , 
                Nagpur , 
                Nashik , 
                Patna , 
                Prayagraj , 
                Pune , 
                Raipur , 
                Ranchi , 
                Surat , 
                Thiruvananthapuram ,
                Vadodara , 
                Varanasi , 
                VijayaWada , 
                Visakhapatnam ,
                </Col>
            </Row>
            <Row style={{color:"white",fontSize:"bold"}}>
                Ksa 
            </Row>
            <Row style={{color:"grey",padding:"10px"}}>
                    Jeddah , 
                    Riyadh ,
                </Row>
                <Row style={{color:"white",fontSize:"bold"}}>
                    SGP
                </Row>
                <Row style={{color:"grey",padding:"10px"}}>
                Singapore
                </Row >
                <Row style={{color:"white",fontSize:"bold"}}>
                    UAE
                </Row>
                <Row style={{color:"grey",padding:"10px"}}>
                    Abu dhabi ,  
                    Dubai , 
                    Sharjah
                </Row>
                
                
                </Row>
                <div className="FooterTop"></div>
                <Row>
                          <Col style={{display:"flex",marginTop:"-1rem",color:"white"}}><h6 style={{color:"white"}}>© 2014-20 UrbanClap Technologies India Pvt. Ltd. </h6></Col> <Col style={{display:"flex",justifyContent:"center",marginTop:"-2rem",marginRight:"-10rem"}}><h3 style={{color:"white"}}><InstagramOutlined /> <YoutubeOutlined /> <TwitterOutlined /> <LinkedinOutlined /></h3></Col>
                          <Col style={{display:"flex",justifyContent:"flex-end",marginTop:"-2rem",height:"10vh",marginRight:"-5rem"}}><img src='https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png'/></Col>
                          <Col style={{display:"flex",justifyContent:"flex-end",marginTop:"-2rem",height:"10vh"}}><img src='https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png'/></Col>
                          
                      </Row>
                </Row>
        </Col>  
          </Row>

        



    


           
    )
}

export default Footer;