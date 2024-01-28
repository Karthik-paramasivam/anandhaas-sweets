import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IndividualIntervalsExample() {
  return (
    <Container fluid>
    <img className="d-block w-100"
            src="https://anandhaassweets.com/cdn/shop/files/about-us-corporate-orders_0b71503f-af91-4134-9191-96f30abd6389_1944x.jpg?v=1685107917"
          />
      <Container>
        <Row>
          <Col className='col-12'>
            <h2 className='text-success mx-auto p-4'>Life is Sweet</h2>
            <h6 className='text-center lh-lg'>Shree Anandhaas is a family-owned business that set up its first restaurant in Coimbatore in 1998. With the expertise gained from the field and years of extensive study, the first sweets and snacks outlet was launched in 2017.</h6>
          </Col>
        </Row>
        <Row>
          <Col className='col border border-black border-1 m-1'>
            <img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/files/0002_01-1656425779463.webp?v=1685186318"/>
            </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/files/0001_02-1656425800165.webp?v=1685186320"/>
          </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/files/0000_03-1656425820708.webp?v=1685186323"/>
        </Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default IndividualIntervalsExample;
