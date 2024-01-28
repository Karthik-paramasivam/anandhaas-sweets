import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact(){
    return(
    
        <Container fluid>
              <Row>
                <Col>
                <img src="https://anandhaassweets.com/cdn/shop/files/contact_us_smallsizeupdate-1658481770656_946c2bf9-8f9a-4fb6-ad09-9ff229cd8827_1944x.jpg?v=1687762945" className="w-100"alt="" />
                </Col>
                </Row>  
                
                <Row>
                    <Col><Row><h1>FeedBack</h1></Row>
                    <Row className='w-75 p-2'>
                    <input type="text" placeholder="Name" className='m-2'/>
                    <input type="text" placeholder="Email"className='m-2'/>
                    <input type="text" placeholder="Phone number"className='m-2'/>
                    <input type="text" placeholder="Message" className='m-2'/>
   
                         <button className='m-2'>Submit</button>   
                    </Row>
                    </Col>
                    <Col>
                    <Row><h1>REACH US</h1></Row>
                    <Row><p>CORPORATE OFFICE ADDRESS</p>
                    <p>143F Krishnarayapuram Village,Nava India Road, Coimbatore, Tamil Nadu - 641004</p>
                    <p>CONTACT NUMBER</p>
                    <p>+91 1234567890</p>
                    <p>Whatsapp Us</p>
                    <p>+91 1234567890</p>   
                    <p>EMAIL ADDRESS</p>   
                    <p>care.anandhaas@gmail.com</p>-
                    <p>SUPPORTING TIMING</p>
                    <p>10:00 AM to 7:00 PM</p>
                    </Row>
                    </Col>
                </Row>
        </Container>
    
    )
}

export default Contact;