import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'; 

function MilkSweets() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center p-5 text-success'>Milk Sweets</h1>
        </Col>
      </Row>
      <Row>
        <Col className='col border border-black border-1 m-1'>
        <Link to="/sweets/milksweets/babymilkcake" className='remove'>
            <img
              className='img-fluid'
              src='https://anandhaassweets.com/cdn/shop/products/BabyMilkcake.jpg?v=1657099869'
              alt='Baby MilkCake'
            />
            <h4 className='text-success'>Baby MilkCake</h4>
          </Link>
          <h5 className='text-danger'>250g - Rs.230.00</h5>
        </Col>

          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/KesarPeda_720x.jpg?v=1657522402"/>
          <h4 className='text-success'>Kesar Peda</h4>
              <h5 className='text-danger'>250g - Rs.219.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/Bikinare_720x.jpg?v=1657293424"/>
          <h4 className='text-success'>Bikinare</h4>
              <h5 className='text-danger'>250g - Rs.187.00</h5>  </Col>
          <Col className='col border border-black border-1 m-1'><img className='img-fluid' src="https://anandhaassweets.com/cdn/shop/products/BadamchocolateBurfi_720x.jpg?v=1657293004"/>
          <h4 className='text-success'>Badam Chocolate Burfi</h4>
              <h5 className='text-danger'>200g - Rs.177.00</h5> </Col>
            </Row>
            
        </Container>
    );
}
export default MilkSweets;