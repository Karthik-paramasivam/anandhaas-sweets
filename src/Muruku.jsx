import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Muruku(){
    return(
        <Container>

            <Row>
                <Col>
                <h1 className='text-center p-5 text-success'>Muruku</h1>
                </Col>
            </Row>
            <Row>
            <Col className='col border border-black border-1 m-1'>
            <img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/GulkandBiscuit_720x.jpg?v=1658153159"/>
            <h4 className='text-success'>Gulkand Biscuit</h4>
              <h5 className='text-danger'>250g - Rs.385.00</h5>  
            </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/PremiumKajuKatli_720x.jpg?v=1657016151"/>
          <h4 className='text-success'>Premium Kaju Katli</h4>
              <h5 className='text-danger'>250g - Rs.347.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/Rich-nuts_720x.jpg?v=1662379259"/>
          <h4 className='text-success'>Rich Nuts</h4>
              <h5 className='text-danger'>6 Pcs - Rs.263.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/BadamRoseLaddu_720x.jpg?v=1658153084"/>
          <h4 className='text-success'>Badam Rose Laddu</h4>
              <h5 className='text-danger'>220g - Rs.220.00</h5>  </Col>
            </Row>
        </Container>
    );
}
export default Muruku;