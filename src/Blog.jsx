import React from 'react';
import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blog() {
  return (
    <Container>
      <Row>
        <Col>
          <p className='h1'>Blogs</p>
        </Col>
      </Row>
      <Row className='lh-lg mt-5'>
        <Col>
          <img src="https://anandhaassweets.com/cdn/shop/articles/What_Are_The_Different_Types_Of_Milk-Based_Indian_Sweets_720x.jpg?v=1689585763" alt="" />
        </Col>
        <Col>
          <Row>
            <p className='h2 text-primary'>What are the different types of milk-based Indian sweets?</p>
          </Row>
          <Row className='mt-2'>
            <p className='h5'>Jul 17, 2023</p>
          </Row>
          <Row className='mt-2'>
            <p className=' h5 text-success lh-base'>Their unique taste and texture have made them a favourite among all age groups so they can enjoy their own favourite sweets.</p>
          </Row>
          <Row className='w-25 mx-auto mt-2'>
          <Link to="/blog/news">
          <button>Read More</button>
          </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
