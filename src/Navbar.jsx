  import React, { useState } from 'react';
  import { Link, Outlet } from 'react-router-dom';
  import { useSelector } from 'react-redux'; // Import the useSelector hook
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import './App.css';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
  import { faCartArrowDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

  function NavbarComponent() {
    const [showSweetsDropdown, setShowSweetsDropdown] = useState(false);

    const cartItems = useSelector(state => state.cart); // Access cart items from Redux store

    const cartItemCount = cartItems.length; // Calculate cart item count

    const handleSweetsMenuHover = () => {
      setShowSweetsDropdown(true);
    };

    const handleSweetsMenuLeave = () => {
      setShowSweetsDropdown(false);
    };
    const [showSavouriesDropdown, setShowSavouriesDropdown] = useState(false);

    const handleSavouriesMenuHover = () => {
      setShowSavouriesDropdown(true);
    };

    const handleSavouriesMenuLeave = () => {
      setShowSavouriesDropdown(false);
    };
    return (
      <>
            <div className="container-fluid">
          <Row>
              <marquee behavior="scroll" scrollamount="9" className='bg-dark text-white p-1'>Free Shipping On All Orders Above Rs. 500 in India | Get 5% Off on Your First Order with Code FIRSTBUY5. </marquee>
          </Row>
          </div>
          
          <div className='container-fluid sticky-top w-100'>
          <Row>
              <Navbar expand="lg" className="navbar navbar-white bg-white p-0">
                <Link to="/">
                  <img
                    src="https://anandhaassweets.com/cdn/shop/files/Logo_main_210x.png?v=1652376566"
                    alt="" className='ps-5'
                  />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto text-center ps-5">
                    <Link to="/" className="nav-link mt-2">
                      Home
                    </Link>
                    <ul className="nav-link navbar-list mt-2">
                      <li
                        onMouseEnter={handleSweetsMenuHover}
                        onMouseLeave={handleSweetsMenuLeave}
                      >
                        <span>
                          <Link to="sweets" className='none ps-5'>Sweets</Link>
                        </span>
                        {showSweetsDropdown && (
                          <ul className="dropdown-menu-list ms-5">
                            <li>
                              <Link to="sweets/milksweets" className="dropdown-link">
                                Milk Sweets
                              </Link>
                            </li>
                            <li>
                              <Link to="sweets/kajusweets" className="dropdown-link">
                                Kaju Sweets
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                    <ul className="nav-link  navbar-list mt-2">
                      <li
                        onMouseEnter={handleSavouriesMenuHover}
                        onMouseLeave={handleSavouriesMenuLeave}
                      >
                        <span>
                          <Link to="savouries" className='none ps-5'>Savouries</Link>
                        </span>
                        {showSavouriesDropdown && (
                          <ul className="dropdown-menu-list ms-5">
                            <li>
                              <Link to="savouries/mixture" className="dropdown-link">
                                Mixture
                              </Link>
                            </li>
                            <li>
                              <Link to="savouries/muruku" className="dropdown-link">
                                Muruku
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                    <Link to="gifting" className="nav-link ps-5 mt-2">
                      Gifting
                    </Link>
                    <Link to="about" className="nav-link ps-5 mt-2">
                      About Us
                    </Link>
                    <Link to="blog" className="nav-link ps-5 mt-2">
                      Blog
                    </Link>
                    <Link to="contact" className="nav-link ps-5 mt-2">
                      Contact Us
                    </Link>
                    
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='mt-3 pt-1 icon-size'
                      size='1x'
                      style={{ marginLeft: '17rem' }} />

                    <Link to="/profile" className='remove text-black'>
                      <FontAwesomeIcon icon={faUser} className='mt-3 pt-1 icon-size' 
                        />
                    </Link>

                    <Link to="/cart" className='remove text-black'>
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        className='mt-3 pt-1 icon-size'
                      />
                      {cartItemCount > 0 && (
                        <span className="translate-middle badge rounded-pill bg-danger">
                          
                          {cartItemCount}
                        </span>
                      )}
                    </Link>

                  </Nav>
                </Navbar.Collapse>
                <Outlet />
              </Navbar>
          </Row>
      </div>
      </>
    );
  }

  export default NavbarComponent;
