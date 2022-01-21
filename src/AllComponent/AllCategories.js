import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Categories.css'
import axios from 'axios';


function AllCategories() {

const [dataAllCategory,setDataAllCategory]= useState([])
const [categoryWithoutDups,setCategoryWithoutDups] = useState([])

useEffect(() => {
    
    let getAllCategoryData = async()=>{

        let data = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
        setDataAllCategory(await data.data)
        debugger
        let withoutDup=[]
        let categoryWithout=await data.data.map(e=>{
            if(!withoutDup.includes(e.mainCategory)){
                if(e.mainCategory !=undefined){
                
                    withoutDup.push(e.mainCategory)
                }
            }
        })
        setCategoryWithoutDups(withoutDup)
    }
    getAllCategoryData()
}, [])



    let icons ={
        "Electrician":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
        "Cleaning & Pest Control":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
        "Plumbers & Carpenters":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
        "AC/Appliance Repair":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
        "sallon for women":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
        "Hair Servieces For Women":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png",
        "Women's Therapies":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
        "Salon For Men":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
        "Men's Therapies":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
        "Home Painting":"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",


    }
    return (
        <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col lg={8}>
                <Row style={{ backgroundColor: "rgb(237 ,234 ,234)", position: "relative", marginTop: "-8rem" }}>
                   
                   {categoryWithoutDups.map(e=>(   
                    <Col lg={2} style={{ height: "fit-content", marginTop: "1rem",marginLeft:"1.3rem" }}  >
                        <Avatar size={45} src={icons[e]} />
                        <p>{e}</p>
                    </Col>
                   ))}   
                </Row>
            </Col>
        </Row>
    )
}


export default AllCategories;