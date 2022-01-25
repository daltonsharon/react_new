import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import VerticalTabs from './TabSwitchers';

function Details(props) {
    return (
        <Row style={{display:"flex",marginTop:"1rem"}}>
            <Col ><Row > <VerticalTabs/> </Row></Col>

            <Col lg={5}>main </Col>

        </Row>
    );
}

export default Details;