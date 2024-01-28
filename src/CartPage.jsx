import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, clearCart } from './redux/actions'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartPage() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 0) {
      const itemToUpdate = cartItems.find(item => item.id === itemId);
  
      if (itemToUpdate) {
        const updatedItem = { ...itemToUpdate, quantity: newQuantity };
        const updatedTotalPrice = updatedItem.price * newQuantity;
  
        if (newQuantity === 0) {
          handleRemoveFromCart(itemId);
        } else {
          dispatch(updateCartItemQuantity(itemId, newQuantity, updatedTotalPrice));
        }
      }
    }
  };
    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  
  };
  
  return (
    <div className='container w-50'>
      <h4 className='bg-success text-white p-1'>For immediate delivery in Coimbatore, order on Swiggy or Zomato.</h4>
      <h1 className='text-dark'>Cart Items</h1>
      {cartItems.length === 0 ? (
        <p className='text-danger h3'>Your cart is empty.</p>
      ) : (
        <Row>
          {cartItems.map(item => (
            <Col key={item.id} className='mb-4 mx-auto mt-5 col col-lg-6'>
              <div className='border border-3 border-dark rounded-3 container p-2 w-100'>
                <Row>
                  <Col>
                    <img src={item.image} alt={item.name} className='w-50'/>

                    <p className='h2 text-dark'>{item.name}</p>
                    <p className='h5 fw-normal p-1'>
                      Quantity:
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className='bg-dark text-white'>-</button>
                      <input type="text" value={item.quantity} readOnly className="text-center bg-white" style={{ width: '30px'}} />
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className='bg-dark text-white'>+</button>
                    </p>
                    <p className='h5 fw-normal p-1 text-dark'>Net Weight: {item.weight}g</p>
                    <p className='h5 fw-normal p-1 text-dark'>Price: Rs.{item.totalPrice}</p>
                    <Col className='mx-auto text-center w-25'>
                      <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-success mx-auto text-center" type="button">Remove</button>
                    </Col>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      )}
      <Row>
      <h3>Subtotal: Rs. {calculateSubtotal()}</h3>
      <Link to="/checkout" className='w-25 mx-auto text-center mt-4'>
        <button className='btn text-white bg-dark w-100'>Check Out</button>
      </Link>
      </Row>
      <Row className='mt-5 mx-auto text-center w-50'>
        {cartItems.length > 0 && (
          <button onClick={handleClearCart} className="btn btn-danger mx-auto w-75" type="button">Clear Cart</button>
        )}
        
      </Row>
    </div>
  );
}
export default CartPage;