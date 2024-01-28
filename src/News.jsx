import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function news(){
    return(
        <Container>
            <Row>
                <Col>
                <img src="https://anandhaassweets.com/cdn/shop/articles/What_Are_The_Different_Types_Of_Milk-Based_Indian_Sweets.jpg?v=1689585763" alt="" /></Col>
            </Row>
            <Row>
                <Col>
                <p>What are the different types of milk-based Indian sweets?</p>
                <p>Jul 17, 2023</p>
                <p>Their unique taste and texture have made them a favourite among all age groups.</p>
                <p>From Doda Burfi to Kesar Anjeer Burfi, at Shree Anandhaas, we have an outstanding collection of Burfis enriched with saffron, figs, chocolate, almonds, etc.</p>
                </Col>
            </Row>
        </Container>
    );
}
export default news;