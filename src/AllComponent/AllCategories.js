import React from 'react'
import { Col, Row } from 'reactstrap';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Categories.css'


 function AllCategories() {
    return (
        <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col lg={8}>
            <Row style={{ backgroundColor: "rgb(237 ,234 ,234)", position: "relative", marginTop: "-8rem" }}>
                <Col lg={2} style={{ height: "fit-content" ,marginTop:"1rem"}}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" />
                    <p>sallon for women</p>
                </Col>

                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" />
                    <p>Hair Servieces For Women</p>
                </Col>
                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" />
                    <p>Women's Therapies </p>
                </Col>
                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" />
                    <p>Salon For Men</p>
                </Col>
                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" />
                    <p>Men's Therapies</p>
                </Col>
                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" />
                    <p>AC/Appliance Repair</p>
                </Col>
                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem",marginLeft: "12rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" />
                    <p>Home Painting</p>
                </Col>
                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" />
                    <p>Cleaning & Pest Control </p>
                </Col>
                <Col lg={2} style={{ height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg" />
                    <p>Electricians</p>
                </Col>
                <Col lg={2} style={{display:"flex", height: "fit-content",marginTop:"1rem" }}  >
                    <Avatar size={45}src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" />
                    <p>Plumber & Carpenters</p>
                </Col>
            </Row>
        </Col>
    </Row>
    )
}


export default AllCategories;