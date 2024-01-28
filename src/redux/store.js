// src/redux/store.js
import { createStore } from 'redux';
import cartReducer from './reducers';

// Load cart data from Local Storage if available
const savedCart = localStorage.getItem('cart');
const initialState = {
  cart: savedCart ? JSON.parse(savedCart) : [],
};

const store = createStore(cartReducer, initialState);

// Listen to store changes and save to Local Storage
store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

export default store;
