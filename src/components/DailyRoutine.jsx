import React from 'react';
import { Row, Col, Card } from '@terminus/nusi';
import Commodity from './Commodity';

const Content = ({ width, height=1 }) => (
  <Col xs={width} style={{ paddingBottom: '10px', height: `${height * 15}vw` }}>
    <Card hoverable style={{ height: '100%' }}>
      Shadow Card
    </Card>
  </Col>
)

const DailyRoutine = () => {
  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ paddingBottom: '15px', fontWeight: 600 }}>
          {'日常工作'}
        </h3>
        
        <Row gutter={10}>
          <Content width={8} height={1} />
          <Content width={4} height={1} />
          <Content width={4} height={1} />
          <Content width={8} height={1} />
          <Content width={12} height={2} />
          <Content width={8} height={1} />
          <Content width={4} height={1} />
          <Content width={4} height={1} />
          <Content width={4} height={1} />
          <Content width={4} height={1} />
        </Row>
      </div>
      <Commodity />
    </>
  )
};

export default DailyRoutine;