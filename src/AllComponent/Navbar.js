import React from 'react'
import { Col, Row } from 'reactstrap';
import { useEffect,useState } from 'react';
import './Navbar.css'
import { Breadcrumb } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Search } = Input;



function Navbar({locationFromHome}) {

    const [locationDropDownValues,setLocationDropDownValues] = useState([]) 
    const [locationObjectWithValues,setLocationObjectWithValues] = useState ({})
    useEffect(() => {
        
        setLocationObjectWithValues(locationFromHome)

    },[locationFromHome])
    
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            {(Object.keys(locationObjectWithValues).length >0 ) ? (locationObjectWithValues.results.map((e,index)=>(
               <Menu.Item key={index} icon={<UserOutlined />}>
                {e.formatted_address}
           </Menu.Item>
           )))
            :
           (
               <div></div>
           )
}
            {/*
            <Menu.Item key="2" icon={<UserOutlined />}>
                Tirupur
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                Erode
    </Menu.Item>*/}
        </Menu>

         

    );
    return (
        <div>
            <Row className='Navbarrowmain'>
                <Col>
                    <img src="background img1.jpg" />
                </Col>
                <Col >
                    <Row>
                        <Col lg={2} ><a className='Blog' href='#' >Blog </a></Col>
                        <Col lg={4} ><a className='Register' href='#'> Register As A Professional </a></Col>
                        <Col lg={4} ><a className='Login' href="#">Login/sign in</a></Col></Row></Col>
            </Row>


            <Row style={{ display:"flex",marginLeft: "39rem", marginTop: "5rem" }}>
                <Col  >
                    <Breadcrumb style={{ display:"flex",color: "white" }}>

                        <Breadcrumb.Item >
                            Home
                        </Breadcrumb.Item >

                        <Breadcrumb.Item style={{ color: "white" }}>
                            Chennai
                        </Breadcrumb.Item>

                    </Breadcrumb>
                </Col>




            </Row>
            <Row style={{ display: "flex" }}>
                <Col>
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold", textAlign: "center", marginTop: "1rem" }}> search for all  your need ...!</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Dropdown style={{ display: "flex" }} overlay={menu}>
                        <Button style={{ display: "flex", alignItems: "center" }} >
                            <EnvironmentOutlined />Location <DownOutlined />
                        </Button>
                    </Dropdown></Col>
                    
                <Col lg={5}>
                    <Search placeholder="search for service" enterButton />
                </Col>
            </Row>
            <Row style={{ display: "flex", padding: "0.1rem" }}>
                <Col style={{ display: "flex", color: "white", justifyContent: "flex-end", marginRight: "-16rem" }}><a style={{ color: "white", textDecoration: "underline" }} href='#'>Massage For Men,</a></Col>
                <Col style={{ display: "flex", justifyContent: "center", marginRight: "-16rem" }}><a style={{ color: "white", textDecoration: "underline" }} href='#'>Home Painting,</a></Col>
                <Col style={{ display: "flex", color: "white", justifyContent: "flex-start", marginRight: "-32rem" }}><a style={{ color: "white", textDecoration: "underline" }} href='#'>Electricions,</a></Col>
                <Col style={{ display: "flex", color: "white", justifyContent: "flex-start", marginRight: "1rem" }}><a style={{ color: "white", }} href='#'>etc</a></Col>



            </Row>


        </div>
    )
}

export default Navbar;
