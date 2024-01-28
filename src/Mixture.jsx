import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mixture(){
    return(
        <Container>
            <Row>
                <Col>
                <h1 className='text-center p-5 text-success'>Mixture</h1>
                </Col>
            </Row>
            <Row>
            <Col className='col border border-black border-1 m-1'>
            <img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/SpecialMixture_720x.jpg?v=1658153587"/>
            <h4 className='text-success'>Anandhaas Special Mixture</h4>
              <h5 className='text-danger'>250g - Rs.168.00</h5>  
            </Col>
          <Col className='col border border-black border-1 m-1 transform'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/DryFruitMixture_720x.jpg?v=1657193408"/>
          <h4 className='text-success'>Dry Fruit Mixture</h4>
              <h5 className='text-danger'>250g - Rs.207.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/AvalMixture_720x.jpg?v=1657193214"/>
          <h4 className='text-success'>Aval Mixture</h4>
              <h5 className='text-danger'>250g - Rs.158.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/Navadhaniyam_720x.jpg?v=1657193447"/>
          <h4 className='text-success'>Navadhaniyam</h4>
              <h5 className='text-danger'>250g - Rs.174.00</h5>  </Col>
            </Row>
        </Container>
    );
}
export default Mixture;