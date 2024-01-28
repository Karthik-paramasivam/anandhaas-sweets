import React, { useState } from 'react';
import Slide1 from './Images/Slide1.jpg';
import Slide2 from './Images/Slide2.jpg';
import Slide3 from './Images/Slide3.jpg';
import GheeLaddu from './Images/GheeLaddu.jpg';
import GulkandBiscuit from './Images/GulkandBiscuit.jpg';
import GheeMysorePak from './Images/GheeMysorePak.jpg';
import BadamRoseLaddu_Preview from './Images/BadamRoseLaddu_Preview.jpg';
import BadamMysorepak from './Images/BadamMysorepak.jpg';
import BanarasSoanPapdi from './Images/BanarasSoanPapdi.jpg';
import CashewHalwa from './Images/CashewHalwa.jpg';
import BabyMilkcake from './Images/BabyMilkcake.jpg';
import Karupatti from './Images/Karupatti.jpg';
import ThenMittai from './Images/ThenMittai.jpg';
import DryFruitMixture from './Images/DryFruitMixture.jpg';
import MasalaPeanuts from './Images/MasalaPeanuts.jpg';
import SatturMurukku from './Images/SatturMurukku.jpg';
import SpecialMixture from './Images/SpecialMixture.jpg';
import Manaparai from './Images/Manaparai.jpg';
import BoondhiMixture from './Images/BoondhiMixture.jpg';
import ButterSev from './Images/ButterSev.jpg';
import KaaraBoondhi from './Images/KaaraBoondhi.jpg';
import MasalaMundhiri from './Images/MasalaMundhiri.jpg';
import KaaraikudiKaaraMurukku from './Images/KaaraikudiKaaraMurukku.jpg';
import corporateordershomepage from './Images/corporateordershomepage.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';


function IndividualIntervalsExample() {
  const [isHoveredGheeLaddu, setIsHoveredGheeLaddu] = useState(false);
  const [isHoveredGulkandBiscuit, setIsHoveredGulkandBiscuit] = useState(false);
  const [isHoveredGheeMysorePak, setIsHoveredGheeMysorePak] = useState(false);
  const [isHoveredBadamRoseLaddu, setIsHoveredBadamRoseLaddu] = useState(false);
  const [isHoveredBadamMysorePak, setIsHoveredBadamMysorePak] = useState(false);
  const [isHoveredSpecialMixture, setIsHoveredSpecialMixture] = useState(false);
  const [isHoveredManaparai, setIsHoveredManaparai] = useState(false);
  const [isHoveredSatturMuruku, setIsHoveredSatturMuruku] = useState(false);
  const [isHoveredMasalaPeanuts, setIsHoveredMasalaPeanuts] = useState(false);
  const [isHoveredDryFruitMixture, setIsHoveredDryFruitMixture] = useState(false);

  const handleMouseEnter = (item) => {
    switch (item) {
      case 'GheeLaddu':
        setIsHoveredGheeLaddu(true);
        break;
      case 'GulkandBiscuit':
        setIsHoveredGulkandBiscuit(true);
        break;
      case 'GheeMysorePak':
        setIsHoveredGheeMysorePak(true);
        break;
      case 'BadamRoseLaddu':
        setIsHoveredBadamRoseLaddu(true);
        break;
      case 'BadamMysorePak':
        setIsHoveredBadamMysorePak(true);
        break;
      case 'SpecialMixture':
        setIsHoveredSpecialMixture(true);
        break;
      case 'Manaparai':
        setIsHoveredManaparai(true);
        break;
      case 'SatturMuruku':
        setIsHoveredSatturMuruku(true);
        break;
      case 'MasalaPeanuts':
        setIsHoveredMasalaPeanuts(true);
        break;
      case 'DryFruitMixture':
        setIsHoveredDryFruitMixture(true);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = (item) => {
    switch (item) {
      case 'GheeLaddu':
        setIsHoveredGheeLaddu(false);
        break;
      case 'GulkandBiscuit':
        setIsHoveredGulkandBiscuit(false);
        break;
      case 'GheeMysorePak':
        setIsHoveredGheeMysorePak(false);
        break;
      case 'BadamRoseLaddu':
        setIsHoveredBadamRoseLaddu(false);
        break;
      case 'BadamMysorePak':
        setIsHoveredBadamMysorePak(false);
        break;
      case 'SpecialMixture':
        setIsHoveredSpecialMixture(false);
        break;
      case 'Manaparai':
        setIsHoveredManaparai(false);
        break;
      case 'SatturMuruku':
        setIsHoveredSatturMuruku(false);
        break;
      case 'MasalaPeanuts':
        setIsHoveredMasalaPeanuts(false);
        break;
      case 'DryFruitMixture':
        setIsHoveredDryFruitMixture(false);
        break;
      default:
        break;
    }
  };

  const handleSearchClick = () => {
    // Handle the search icon click here for the specific item
    // You can add code to perform the search action for each item
  };


  return (
    <Container fluid className='m-0 p-0 background'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 img-fluid" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 img-fluid" src={Slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={Slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Container fluid>
        <Row>
          <Col className='col-12'><h2 className='text-success mx-auto p-4 mt-3'>Bestselling Sweets!</h2></Col>
        </Row>
        <Row className='m-2'>
          <Col className='m-1'>
            <Row className='border border-muted border-2 rounded-2 zindex bg-white'>
              {/* <img className='img-fluid' src={GheeLaddu} id='gheeLadduImage' alt="Ghee Laddu" /> */}
              <div
                className={`border border-muted border-2 zindex bg-white position-relative ${isHoveredGheeLaddu ? 'hovered' : ''
                  }`}
                onMouseEnter={() => handleMouseEnter('GheeLaddu')}
                onMouseLeave={() => handleMouseLeave('GheeLaddu')}
              >
                <img className='img-fluid' src={GheeLaddu} id='gheeLadduImage' alt="Ghee Laddu" />
                

                {isHoveredGheeLaddu && (
                  <>
                    <button
                      className="search-icon position-absolute top-0 end-0 p-2"
                      onClick={handleSearchClick}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>

                    <button
                      className="search-icon position-absolute top-0 end-0 mt-5 p-2"
                      onClick={handleSearchClick}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </>
                )}
              </div>

            </Row>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Ghee Laddu
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>220 g</span> - Rs. 189.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <Row className='border border-muted border-2 rounded-2 zindex bg-white'>
              <img className='img-fluid' src={GulkandBiscuit} id='gulkandImage' alt="Ghee Laddu" />
            </Row>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Gulkand Biscuit
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>250 g</span> - Rs. 385.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <Row className='border border-muted border-2 rounded-2 zindex bg-white'>
              <img className='img-fluid' src={GheeMysorePak} id='gheeMysorePakImage' alt="Ghee Mysorepak" />
            </Row>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Ghee MysorePak
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>200 g</span> - Rs. 172.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <Row className='border border-muted border-2 rounded-2 zindex bg-white'>
              <img className='img-fluid' src={BadamRoseLaddu_Preview} id='BadamRoseLaddu' alt="BadamRoseLaddu" />
            </Row>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Badam Rose Laddu
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>200 g</span> - Rs. 314.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <Row className='border border-muted border-2 rounded-2 zindex bg-white'>
              <img className='img-fluid' src={BadamMysorepak} id='BadamMysorepak' alt="BadamMysorePak" />
            </Row>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Badam Mysore Pak
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>220 g</span> - Rs. 223.00</h5>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className='sweetcolor text-white mt-5'>
        <Row>
          <Col className='text-center mx-auto'>
            <h4 className='display-6 fw-normal mt-5'>Sweets</h4>
            <h5 className='text-center mt-3'>Our team thrives on authenticity. We use our forefathers' practices to ensure that every bite takes you back <br />to childhood.</h5>
          </Col>
        </Row>
        <Row className='p-5'>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={GulkandBiscuit}
                alt="Gulkandbiscuit" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Kaju sweets</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={GheeMysorePak}
                alt="GheeMysorePak" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Mysore Pak</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={GheeLaddu}
                alt="GheeLaddu" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Laddu</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={BanarasSoanPapdi}
                alt="BanarasSoanPaddi" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Soan Papdi</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={CashewHalwa}
                alt="CashewHalwa" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Halwa</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={BabyMilkcake}
                alt="BabyMilkcake" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Milk Sweets</h4>
            <Link to="/sweets/milksweets" className='text-white'>
              Shop

            </Link>
          </Col>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={Karupatti}
                alt="Karupatti" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Karupatti & Sugarless Sweets</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
            <div className=' border border-4 border-tertiary rounded-circle p-1 hover-fill'>
              <img
                src={ThenMittai}
                alt="ThenMittai" className='image-fluid rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Traditional Sweets</h4>
            <p><a href="">Shop</a></p>
          </Col>
        </Row>

      </Container>
      <Container fluid>
        <Row>
          <Col className='col-12'>
            <h2 className='text-success mx-auto p-4 mt-3'>Bestselling Savouries!</h2>
          </Col>
        </Row>
        <Row className='m-2'>
          <Col className='m-1'>
            <div className={`border border-muted border-2 zindex bg-white position-relative ${isHoveredSpecialMixture ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter('SpecialMixture')}
              onMouseLeave={() => handleMouseLeave('SpecialMixture')} >
              <img className='img-fluid' src={SpecialMixture} alt="SpecialMixture" />

              {isHoveredSpecialMixture && (
                <>
                  <button
                    className="search-icon position-absolute top-0 end-0 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>

                  <button
                    className="search-icon position-absolute top-0 end-0 mt-5 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </>
              )}

            </div>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Anandhaas Special Mixture
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>250 g</span> - Rs. 168.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <div className={`border border-muted border-2 zindex bg-white position-relative ${isHoveredManaparai ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter('Manaparai')}
              onMouseLeave={() => handleMouseLeave('Manaparai')} >
              <img className='img-fluid' src={Manaparai} alt="Manaparai" />

              {isHoveredManaparai && (
                <>
                  <button
                    className="search-icon position-absolute top-0 end-0 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>

                  <button
                    className="search-icon position-absolute top-0 end-0 mt-5 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </>
              )}

            </div>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Manapaarai Muruku
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>250 g</span> - Rs. 152.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <div className={`border border-muted border-2 zindex bg-white position-relative ${isHoveredSatturMuruku ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter('SatturMuruku')}
              onMouseLeave={() => handleMouseLeave('SatturMuruku')} >
              <img className='img-fluid' src={SatturMurukku} alt="Sattur Murukku" />

              {isHoveredSatturMuruku && (
                <>
                  <button
                    className="search-icon position-absolute top-0 end-0 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>

                  <button
                    className="search-icon position-absolute top-0 end-0 mt-5 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </>
              )}

            </div>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Sattur Murukku
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>250 g</span> - Rs. 152.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <div className={`border border-muted border-2 zindex bg-white position-relative ${isHoveredMasalaPeanuts ? 'hovered' : ''}`} // Use isHoveredMasalaPeanuts
              onMouseEnter={() => handleMouseEnter('MasalaPeanuts')}
              onMouseLeave={() => handleMouseLeave('MasalaPeanuts')} >
              <img className='img-fluid' src={MasalaPeanuts} alt="Masala Peanuts" />

              {isHoveredMasalaPeanuts && (
                <>
                  <button
                    className="search-icon position-absolute top-0 end-0 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>

                  <button
                    className="search-icon position-absolute top-0 end-0 mt-5 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </>
              )}
            </div>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Masala Peanuts
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>250 g</span> - Rs. 163.00</h5>
            </Row>
          </Col>

          <Col className='m-1'>
            <div className={`border border-muted border-2 zindex bg-white position-relative ${isHoveredDryFruitMixture ? 'hovered' : ''}`} // Use isHoveredDryFruitMixture
              onMouseEnter={() => handleMouseEnter('DryFruitMixture')}
              onMouseLeave={() => handleMouseLeave('DryFruitMixture')} >
              <img className='img-fluid' src={DryFruitMixture} alt="Dry Fruit Mixture" />

              {isHoveredDryFruitMixture && (
                <>
                  <button
                    className="search-icon position-absolute top-0 end-0 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>

                  <button
                    className="search-icon position-absolute top-0 end-0 mt-5 p-2"
                    onClick={handleSearchClick}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </>
              )}
            </div>
            <Row>
              <h5 className='mt-2'>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path fill="#FFF" stroke="green" d="M.3.3h19.4v19.4H.3z"></path>
                      <circle cx="10" cy="10" r="5" fill="green"></circle>
                    </g>
                  </svg>
                </span>
                <span className='p-1'>
                  Dry Fruit Mixture
                </span>
              </h5>
            </Row>
            <Row>
              <h5 className='text-danger'><span className='fw-light'>250 g</span> - Rs. 207.00</h5>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-5 backcolor text-white'>
        <Row>
          <Col className='mx-auto'>
            <h2 className='mt-5'>Savouries</h2>
            <h6 className='fw-normal mt-3'>Bringing the best traditional taste in savouries directly from Coimbatore to your place, anywhere in India.<br/> Freshly made from finest ingredients and pure groundnut oil.</h6>
          </Col>
        </Row>
        <Row className='p-5'>
          <Col className='p-1'>
          <div className='border border-5 bordercolor rounded-circle hover-fill'>
              <img
                src={BoondhiMixture}
                alt="BoondhiMixture" className='image-fluid p-2 rounded-circle w-100'
                
              />
            </div>
            <h4 className='p-1 m-1'>Mixtures</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
          <div className='border border-5 bordercolor rounded-circle hover-fill'>
              <img
                src={KaaraikudiKaaraMurukku}
                alt="KaaraikudiKaaraMurukku" className='image-fluid p-2 rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Murukku</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
          <div className='border border-5 bordercolor rounded-circle hover-fill'>
              <img
                src={ButterSev}
                alt="ButterSev" className='image-fluid p-2 rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Sev & Seddai</h4>
            <p><a href="">Shop</a></p>
          </Col><Col className='p-1'>
          <div className='border border-5 bordercolor rounded-circle hover-fill'>
              <img
                src={KaaraBoondhi}
                alt="KaaraBoondhi" className='image-fluid p-2 rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Boondhi</h4>
            <p><a href="">Shop</a></p>
          </Col>
          <Col className='p-1'>
          <div className='border border-5 bordercolor rounded-circle hover-fill'>
              <img
                src={MasalaMundhiri}
                alt="MasalaMundhiri" className='image-fluid p-2 rounded-circle w-100'
              />
            </div>
            <h4 className='p-1 m-1'>Masala Nuts</h4>
            <p><a href="">Shop</a></p>
          </Col>
          </Row>
      </Container>
      <Container fluid className='Gifting img-fluid text-white'>
        <Row>
          <Col className='pd-15 col col-lg-6 col-md-12 col-sm-12'></Col>
          <Col className='mx-auto text-start col col-lg-6 col-md-12 col-sm-12'>
          <h1 className='fw-normal'>Gifting</h1>
          <h5 className='fw-normal'>Our exclusive gift boxes will go the extra mile in making all your occasions extra special. Send across a box of delicacies to your loved ones anywhere in the country from the comfort of your home.</h5>
          <button className='mt-3 giftbutton btn'>Shop Now</button>
          </Col>
        </Row>
      </Container>
      <Container fluid className='corperatebgimage p-2'>
        <Row>
          <Col className='corperatetext col-lg-6 col-sm-12 mt-5 pt-5 '>
          <h1 className='fw-normal corperatecolor mt-5 pt-5'>Corporate Orders</h1>
          <h5 className='fw-normal lh-base'>We take gifting to the next level with our customized products and packaging. Celebrating a company milestone, gifts for the festive season, a token of appreciation for an employee, a special treat for a client - you name it all and we can get it done.</h5>
          <button className='btn orderbutton'>Order Now</button>
          </Col>
          <Col>
          <img className='mt-3 col-lg-6 col-sm-12 img-fluid w-100 'src={corporateordershomepage} alt="corporateordershomepage" />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default IndividualIntervalsExample;
