import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions';
import Carousel from 'react-bootstrap/Carousel';


function BabyMilkCake() {
  const [price, setPrice] = useState(230);
  const [selectedWeight, setSelectedWeight] = useState(250);
  const [quantity, setQuantity] = useState(1); 

  const dispatch = useDispatch(); // Redux dispatch function

  const calculateTotalPrice = () => {
    return price * quantity;
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCartHandler = () => {
    let itemPrice = 0;
  
    // Set the item price based on selected net weight
    if (selectedWeight === 250) {
      itemPrice = 230; // Price for 250g net weight
    } else if (selectedWeight === 500) {
      itemPrice = 460; // Price for 500g net weight
    }
  
    const item = {
      id: Date.now(), // Generate a unique timestamp-based ID
      name: 'Baby Milk Cake',
      weight: selectedWeight,
      quantity: quantity,
      price: itemPrice, // Set the calculated price
      totalPrice: calculateTotalPrice(),
      image: 'https://anandhaassweets.com/cdn/shop/products/BabyMilkcake.jpg?v=1657099869', // Image URL
    };
  
    dispatch(addToCart(item));
  };
  

  useEffect(() => {
    // Update the price whenever quantity or selectedWeight changes
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  }, [quantity, selectedWeight]);

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  return (
    <Container>
      <Row>
        <Col className='border border-2 border-muted m-2 p-1 rounded-2'>
          
<Carousel>
      <Carousel.Item interval={2000}>
        <img src="https://anandhaassweets.com/cdn/shop/products/BabyMilkcake.jpg?v=1657099869"className='w-100' />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://anandhaassweets.com/cdn/shop/products/BabyMilkCake_Preview.jpg?v=1680000379" className='w-100'/>
      </Carousel.Item>
      
    </Carousel>

        </Col>
        <Col className='border border-2 border-muted m-2 p-1 rounded-2'>
          <Row className='p-3'>
            <h1 className='text-success p-2 '>Baby Milk Cake</h1>
            <h5>A milky way to reach the sweet side of your life.</h5>
          </Row>
          <Row className='mx-auto'>
            <h6>
              <b>Taste:</b> Medium sweet
            </h6>
          </Row>
          <Row className='mt-3'>          
            <label htmlFor="" className='h5'>Quantity</label>
            <div className='w-25 mx-auto'>
            <button className='w-25 bg-dark text-white' onClick={decrementQuantity}>
                -
              </button>
              <input type='text' value={quantity} readOnly className='w-25 text-center bg-white'/>
              <button className='w-25 bg-dark text-white' onClick={incrementQuantity}>
                +
              </button>

            </div>
          </Row>
          <Row className='text-center'>
            <div className='text-center mt-4'>
            <button
                className='w-25 ms-3 p-2 rounded-3 mx-auto net' 
                onClick={() => {
                  setPrice(230);
                  setSelectedWeight(250);
                }}
              >
                Net weight: 250g
              </button>
        
              <button
                className='w-25 ms-3 p-2 rounded-3 mx-auto net' // Add the 'net' class here
                onClick={() => {
                  setPrice(460);
                  setSelectedWeight(500);
                }}
              >
                Net weight: 500g
              </button>
            </div>
          </Row>
          <Row>
            <p className='h4 text-dark mt-4'>Price: Rs. {totalPrice}</p>
          </Row>
          <Row>
          <button
              className='w-25 mx-auto text-center mt-3  p-2 rounded-3 cart'
              onClick={addToCartHandler} 
            >
              Add to cart
            </button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default BabyMilkCake;
