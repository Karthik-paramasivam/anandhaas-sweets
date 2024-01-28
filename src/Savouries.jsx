import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IndividualIntervalsExample() {
  return (
    <Container fluid>
    <img className="d-block w-100"
            src="https://anandhaassweets.com/cdn/shop/collections/Savouries_Banner_1800x.jpg?v=1688186200"
          />
      <Container>
        <Row>
          <Col className='col-12'><h2 className='text-success mx-auto p-4'>Enjoy Your Sweets!</h2></Col>
        </Row>
        <Row>
          <Col className='col border border-black border-1 m-1'>
            <img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/GheeLaddu_720x.jpg?v=1657180507"/>
            <h4 className='text-success'>Ghee Laddu</h4>
              <h5 className='text-danger'>220g - Rs. 220.00</h5>  
            </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/Karupattiladdu_720x.jpg?v=1657290707"/>
          <h4 className='text-success'>Karupatti Laddu</h4>
              <h5 className='text-danger'>220g - Rs.194.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/DatesLaddu_720x.jpg?v=1657096088"/>
          <h4 className='text-success'>Dates Laddu</h4>
              <h5 className='text-danger'>220g - Rs.189.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/BadamRoseLaddu_720x.jpg?v=1658153084"/>
          <h4 className='text-success'>Badam Rose Laddu</h4>
              <h5 className='text-danger'>200g - Rs.172.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/SoanHalwa_720x.jpg?v=1657089511"/>
          <h4 className='text-success'>Soan Halwa</h4>
              <h5 className='text-danger'>6 Pcs - Rs.382.00</h5>  </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default IndividualIntervalsExample;
