import React from 'react';
import { Card, Avatar } from 'antd';
import { Col, Row } from 'reactstrap';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./CardFile.css"
const { Meta } = Card

function cardFile({ jobFromData, priceFromData, ratingFromData, detailsFromData }) {
  
  return (
  
    <div>
      <Card
        className='cardTotal'
        style={{ width: 300}}
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
          <Col>{jobFromData}</Col>
          <Col>{priceFromData}
            {ratingFromData}
          </Col>
        </Row>
        description
          {detailsFromData.indexOf(",") != -1 ? detailsFromData.split(",").map(e=>(
          <Row>
          <Col>
            {e}
          </Col>
          </Row>
          )):
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