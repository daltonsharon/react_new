import React from 'react';
import { Col, Row } from 'reactstrap';
import './AdsCategories.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function AdsCategories(props) {
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
        <div>
            <Row>
                <Col style={{display:"flex",height: "13rem",marginTop:"2rem",width:"20rem"}}>
                <img  src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1641569812728-a8517a.jpeg' /></Col>
            </Row>
            <Row style={{display:"flex",marginTop:"5rem"}}>
                <Col style={{display:"flex",justifyContent:"center"}}> 
                <h1 className='BestOffer'>Best Offers</h1></Col>
            </Row>
            <Row style={{display:"flex"}}>
                <Col style={{display:"flex",justifyContent:"center"}}>
                <span className='Hygienic'>Hygienic & single-use products | low-contact services</span></Col>
                <br></br>
                <br></br>
                <Carousel style={{flex: "1 1 auto",position: "relative",width: "458px",marginLeft:" 4rem",  marginRight: "-6rem"}} responsive={responsive}>
  <div><img style={{height:"17rem",width:"20rem",}} src='https://s3.ap-southeast-1.amazonaws.com/assets.paprika.co.id/width_612/57159e37b4615.png'/></div>
  <div><img style={{height:"20rem",width:"28rem"}} src='https://robertfiance.edu/wp-content/uploads/2018/09/ROB-109066-Thank-You-Barber-min.jpg'/></div>
  <div><img style={{height:"20rem",width:"28rem"}} src='https://image.freepik.com/free-psd/electrician-banner-template_23-2148636096.jpg'/></div>
  <div><img style={{height:"20rem",width:"28rem"}} src='https://img.freepik.com/free-psd/plumbing-quality-service-banner-template_23-2148709810.jpg?size=626&ext=jpg'/></div>
</Carousel>;
            </Row>
        </div>
    );
}

export default AdsCategories;