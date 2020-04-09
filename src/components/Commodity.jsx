import React from 'react';
import { Row, Col, Card } from '@terminus/nusi';

const Content = ({ width, height=1 }) => (
  <Col xs={width} style={{ paddingBottom: '10px', height: `${height * 15}vw` }}>
    <Card hoverable style={{ height: '100%' }}>
      Shadow Card
    </Card>
  </Col>
)

const Commodity = () => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ paddingBottom: '15px', fontWeight: 600 }}>
        {'商品'}
      </h3>
      
      <Row gutter={10}>
        <Content width={8} height={2} />
        <Content width={12} height={2} />
        <Content width={4} height={1} />
        <Content width={4} height={1} />
        <Col xs={4} style={{ paddingBottom: '10px', height: '30vw' }}>
          <Row>
            <Col xs={24} style={{ paddingBottom: '10px', height: '15vw' }}>
              <Card hoverable style={{ height: '100%' }}>
                Shadow Card
              </Card>
            </Col>
            <Col xs={24} style={{ paddingBottom: '10px', height: '15vw' }}>
              <Card hoverable style={{ height: '100%' }}>
                Shadow Card
              </Card>
            </Col>
          </Row>
        </Col>
        <Content width={8} height={2} />
        <Content width={12} height={2} />
      </Row>
    </div>
  )
}

export default Commodity