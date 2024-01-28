import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, clearCart } from './redux/actions';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const schema = yup.object({
    FirstName: yup.string().required().matches(/^[a-zA-Z]{3,20}$/
        , "❌ FirstName should be atleast 3-20 alphabets only"),
    LastName: yup.string().required().matches(/^[a-zA-Z]{1,20}$/
        , "❌ LastName should be atleast 1-20 alphabets only"),
    Email: yup.string().required().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "❌ Please enter a valid Email-Id"),
    Address: yup.string().required().matches(/^[#.0-9a-zA-Z,/&\\s,-]+$/,
        "❌ Please enter a valid Address"),
    City: yup.string().required().matches(/^[a-zA-Z\s\(\)\.\'-]*$/,
        "❌ Please enter a valid City name"),
    State: yup.string().required(),
    Pincode: yup.string().required().matches(/^[0-9]{6}$/, "❌ Please enter a valid Pincode"),
    Phone: yup.string().required().matches(/^[0-9]{10}$/, "❌ Please enter a valid Phone Number"),
})

const errorBorderStyle = {
    border: '2px solid red'
};

export default function App() {
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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const separateItemsByNetWeight = () => {
        const separatedItems = [];
        
        cartItems.forEach(item => {
            const existingItem = separatedItems.find(separatedItem => separatedItem.weight === item.weight);
            
            if (existingItem) {
                existingItem.totalQuantity += item.quantity;
                existingItem.totalPrice += item.totalPrice;
            } else {
                separatedItems.push({
                    ...item,
                    totalQuantity: item.quantity,
                });
            }
        });
        
        return separatedItems;
    };


    const onSubmit = (data) => {
        alert("✅SignUp Form Submitted Successfully.");
        console.log(data);
    }

    return (
        <Container className="mt-5">
            <Row>
                <img
                    src="https://anandhaassweets.com/cdn/shop/files/Logo_main_210x.png?v=1652376566" className="w-25 text-center mx-auto"
                    alt=""
                />
            </Row>
            <Row className="mt-5">
                <Col className="col col-lg-6 checkout border border-2 border-muted p-1">
                    <h1>Checkout Details</h1>
                    <form className=" mt-0 h6 text-start ms-0 p-1" onSubmit={handleSubmit(onSubmit)}>
                        <p className="h5 ">Contact</p>
                        <label htmlFor="Email" className=" fw-normal">Email-Id</label>
                        <input id="Email" className="rounded-3" type="text" {...register("Email")} style={errors.Email ? errorBorderStyle : {}} />
                        <p className="app-color">{errors.Email?.message}</p>
                        <p className=" h5 p-1">Shipping address</p>
                        <label htmlFor="Country/Region" className=" fw-normal">Country/Region</label>
                        <input type="text" className="rounded-3" value={"India"} />
                       <Row>
                        <Col> 
                        <p><label htmlFor="firstName" className=" fw-normal mt-4">First Name</label></p>
                        <input id="FirstName" className="w-100 rounded-3" {...register("FirstName")} style={errors.FirstName ? errorBorderStyle : {}}
                        />
                        <p className="app-color">{errors.FirstName?.message}</p>
                        </Col>
                        <Col>
                        <p><label htmlFor="LastName" className=" fw-normal mt-4">LastName</label></p>
                        <input id="LastName" className="w-100 rounded-3" {...register("LastName")} style={errors.LastName ? errorBorderStyle : {}} />
                        <p className="app-color">{errors.LastName?.message}</p>
                        </Col>
                        </Row>
                        
                         
                         
                        <label htmlFor="Address" className="fw-normal">Address</label>
                        <input id="Address" className="w-100 rounded-3" type="text" {...register("Address")} style={errors.Address ? errorBorderStyle : {}} />
                        <p className="app-color">{errors.Address?.message}</p>
                         
                         
                        <label htmlFor="Appartment" className="fw-normal">Appartment, suite,etc.(optional)</label>
                        <input id="Appartment" className="w-100 rounded-3" type="text" {...register("Appartment")} style={errors.Appartment ? errorBorderStyle : {}} />
                        <p className="app-color">{errors.Appartment?.message}</p>
                        
                    
                         <Row>   
                            <Col>
                       <p><label htmlFor="City" className="fw-normal">City</label></p>
                        <input id="City" className="w-100 rounded-3" type="text" {...register("City")} style={errors.City ? errorBorderStyle : {}} />
                        <p className="app-color">{errors.City?.message}</p>
                        </Col>
                        <Col>
                        <p><label htmlFor="State" className="fw-normal">State</label></p>
                        <select id="State" className="w-100 p-2 rounded-3" {...register("State", { required: true })} style={errors.State ? errorBorderStyle : {}}>
                        <option value="" selected disabled>Select any one</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                        <p className="app-color">{errors.State?.message}</p>
                        </Col>
                        <Col>
                        <p><label htmlFor="Pincode" className="fw-normal">Pincode</label></p>
                        <input id="Pincode" className="w-100 rounded-3" type="text" {...register("Pincode")} style={errors.Pincode ? errorBorderStyle : {}} />
                        <p className="app-color">{errors.Pincode?.message}</p>
                        </Col>
                        </Row>

                        <label htmlFor="Phone number" className=" fw-normal">Phone number</label>
                        <input id="Phone" className="rounded-3" type="text" {...register("Phone")} style={errors.Phone ? errorBorderStyle : {}} />
                        <p className="app-color">{errors.Phone?.message}</p>

                        <button id="submit" class="btn w-50 mx-auto fw-bolder colorchange" type="submit" value="SignUp">Continue to Shipping</button>
                    </form>
                </Col>

                <Col className="col col-lg-6">
                <div className='container w-100 border border-2 border-muted p-1'>
                <h1 className='text-dark '>Cart Items</h1>
                {cartItems.length === 0 ? (
                    <p className='text-danger h3'>Your cart is empty.</p>
                ) : (
                    <Row>
                        {separateItemsByNetWeight().map(item => (
                            <Col key={item.id} className='mb-4 mx-auto mt-5 col col-lg-6'>
                                <div className='border rounded-3 border-2 border-dark container p-2'>
                                    <Row>
                                        <Col>
                                            <img src={item.image} alt={item.name} className='w-25' />
                                            <p className='h4 text-dark'>{item.name}</p>
                                            <p className='h5 fw-normal p-1'>
                                                Quantity:
                                                <span className='badge bg-dark'>{item.totalQuantity}</span>
                                            </p>
                                            <p className='h5 fw-normal p-1 text-dark'>Net Weight: {item.weight}g</p>
                                            <p className='h5 fw-normal p-1 text-dark'>Total Price: Rs. {item.totalPrice}</p>
                                            <Col className='mx-auto text-center w-25'>
                                                <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-danger mx-auto text-center" type="button">Remove</button>
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
                        </Row>
                        {/* <Row className='mt-5 mx-auto text-center w-25'>
                            {cartItems.length > 0 && (
                                <button onClick={handleClearCart} className="btn btn-danger mx-auto w-100" type="button">Clear Cart</button>
                            )}

                        </Row> */}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}