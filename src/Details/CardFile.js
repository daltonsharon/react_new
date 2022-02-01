import React from 'react';
import { Card, Avatar } from 'antd';
import { Col, Row } from 'reactstrap';
import { EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Rate } from 'antd';
import "./CardFile.css"
const { Meta } = Card

function cardFile({ jobFromData, priceFromData, ratingFromData, detailsFromData, calSet }) {
  
  return (
  
    <div>
      <Card
        className='cardTotal'
        style={{ width: 300,
        padding:"1rem",borderColor:"grey",marginRight:"13rem"}}
        cover={
          <div className='cardCover' style={{display:"flex"}}>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="100"
            />
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="100"
            />
           
          </div>
        }
      // actions={[
      //   <SettingOutlined key="setting" />,
      //    <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
      >
        
<Row>

<b><Row>{jobFromData}</Row></b>
  <Row style={{color: "blue"}} >{priceFromData}</Row>
  <Row><Col lg={1} style={{marginTop:"-3px", color: "green",display:"inline-block",height:"3rem"}}><StarOutlined/></Col><Col style={{fontWeight:"800",color: "green"}} lg={1}>{ratingFromData}</Col>
    <Col>
      <Button style={{    marginLeft: "8rem",
    height: "2rem",
    
    position:"relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "6rem"}} type="primary" ghost>
      <Button styel={{  display:"flex",  position: "absolute",height:"0.5rem",width:"0.5rem",
    marginRight: "8.5rem"}} type='primary'>-  </Button>

        <b>  Add  </b>      
        <Button
        onClick={()=>{calSet(jobFromData, priceFromData, ratingFromData, detailsFromData)}}
        styel={{ display:"flex",   position:"absolute",height:"0.5rem",width:"0.5rem",
    marginLeft: "8.5rem"}} type='primary'>  +</Button>
      </Button>
    </Col>
  </Row>



</Row>
<u><p><b style={{marginRight:"13rem"}}>Description</b></p></u>
{detailsFromData.indexOf(",") != -1 ? detailsFromData.split(",").map(e => (
  <Row>
    <Col>{e}</Col>
  </Row>
)) :
  <Row>
    {detailsFromData}
  </Row>
} 
        

        {/* <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    /> */}
      </Card>
    </div>
  );
}

export default cardFile;