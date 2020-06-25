import React from 'react';
import { Card, Container, CardDeck } from "react-bootstrap";
import About1 from './../images/about1.jpg';
import About2 from './../images/about2.jpg';
import About3 from './../images/about3.jpg';
import './../CSS/AboutUs.css';

class About extends React.Component {
    render() {
        return (
            <div className='aboutdiv'>
                <p className='heading'>Why Choose Us? </p>
                <Container style={{ paddingTop: '30px' }}>
                <CardDeck style={{ marginTop: '5px' }}>
                    <Card border='info'>
                        <Card.Img variant="top" src={About1} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: "Lucida Console" }}>Fast Service</Card.Title>
                                <Card.Text style={{ fontStyle: 'italic' }}>
                                We Provide the fatest service as compared to all the other service providers. 
                            </Card.Text>                                               
                        </Card.Body>
                    </Card>

                    <Card border='info'>
                        <Card.Img variant="top" src={About2} style={{ height: '200px' }} />
                        <Card.Body>
                                <Card.Title style={{ fontFamily: "Lucida Console" }}>Great Team</Card.Title>
                                <Card.Text style={{ fontStyle: 'italic' }}>
                                We have a team of really hard working people. They are here for 24/7 and 365. 
                            </Card.Text>                           
                        </Card.Body>
                    </Card>

                    <Card border='info'>
                        <Card.Img variant="top" src={About3} style={{ height: '200px' }} />
                        <Card.Body>
                                <Card.Title style={{ fontFamily: "Lucida Console" }}>Best Deals</Card.Title>
                                <Card.Text style={{ fontStyle: 'italic' }}>
                                We provide the best deals to our customers. Low cost but good quality deals.
                            </Card.Text>   
                        </Card.Body>
                    </Card>
                </CardDeck>
                </Container>
            </div>
            );
    }
}

export default About;