import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IndividualIntervalsExample() {
  return (
    <Container fluid>
    <img className="d-block w-100"
            src="https://anandhaassweets.com/cdn/shop/files/banner-gifting_1944x.jpg?v=1683624507"
          />
      <Container>
        <Row>
          <Col className='col-12'>
            <h2 className='text-success mx-auto p-4'>Gift With Sweetness</h2>
            <h6 className='text-center lh-lg'>The joy of gifting sweets is a feeling that is shared across cultures and traditions. By giving someone a box of delicious sweets is a thoughtful act that can make their day happier and can bring a smile to their face. They are a means of spreading happiness and goodwill among friends, family, and acquaintances. So, why not send sweet boxes for gifting as a token of love to your special ones from the comfort of your home?</h6>
          </Col>
        </Row>
        <Row>
            <Col><h1 className='fw-normal text-success'>Gift boxes</h1></Col>
        </Row>
        <Row>
          <Col className='col border border-black border-1 m-1'>
            <img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/LuxuryLaddu-12Piece_720x.jpg?v=1680069666"/>
            <h4 className='text-success'>Luxury Laddu - 12 Piece</h4>
              <h5 className='text-danger'>Rs.220.00</h5>  
            </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/Panjiribox_720x.jpg?v=1680005263"/>
          <h4 className='text-success'>Panjiri</h4>
              <h5 className='text-danger'>130g - Rs.181.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/CashewRollBox_720x.jpg?v=1680069582"/>
          <h4 className='text-success'>Cashew Roll Box</h4>
              <h5 className='text-danger'>Rs.1,166.00</h5>  </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default IndividualIntervalsExample;
