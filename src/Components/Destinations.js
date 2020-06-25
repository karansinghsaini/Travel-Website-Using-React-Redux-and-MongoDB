import React from "react";
import { Card, Button, Container, CardDeck } from "react-bootstrap";
import berlin from './../images/berlin.jpg';
import rome from './../images/rome.jpg';
import paris from './../images/wonders/paris.jpg';
import turkey from './../images/turkey.jpg';
import usa from './../images/usa.jpg';
import spain from './../images/spain1.jpg';



class Cards extends React.Component {

    render() {
        return (
            <Container>
                <CardDeck>
                    <Card border='info' className='cards'>
                        <Card.Img variant="top" src={paris} style={{height: '200px'}}/>
                        <Card.Header>France</Card.Header>
                        <Card.Body>
                            <Card.Title>Paris</Card.Title>
                            <Card.Text>
                                Paris, the capital city of France, is the third most visited city in the world.
                                Paris hosts some of the world's most recognizable landmarks such as the Eiffel Tower, which is the most-visited paid monument in the world.
                            </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Tourism_in_France' target='blank'>
                                <Button variant="primary" style={{ position: 'relative', marginTop: '24px' }}>Know More</Button></a>
                        </Card.Body>
                    </Card>

                    <Card border="info" className='cards'>
                        <Card.Img variant="top" src={spain} style={{ height: '200px' }}/>
                        <Card.Header>Spain</Card.Header>
                        <Card.Body>
                            <Card.Title>Madrid</Card.Title>
                            <Card.Text>
                                The nightlife in Spain is very attractive to both tourists and locals. Spain is known to have some of the best nightlife in the world. Spain is a generally mountainous country, with well-known ski resorts located in several parts of the country
                        </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Tourism_in_Spain' target='blank'>
                                <Button variant="primary" style={{ position: 'relative', marginTop: '24px' }}>Know More</Button></a>
                        </Card.Body>
                    </Card>

                    <Card border="info" className='cards'>
                        <Card.Img variant="top" src={usa} style={{ height: '200px' }}/>
                        <Card.Header>USA</Card.Header>
                        <Card.Body>
                            <Card.Title>New York City</Card.Title>
                            <Card.Text>
                                New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports
                        </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Tourism_in_the_United_States' target='blank'>
                                <Button variant="primary" style={{ position: 'relative', marginTop: '24px' }}>Know More</Button></a>
                        </Card.Body>
                    </Card>
                </CardDeck><br /><br />

                <CardDeck>
                    <Card border='info' className='cards'>
                        <Card.Img variant="top" src={rome} style={{ height: '200px' }}/>
                        <Card.Header>Italy</Card.Header>
                        <Card.Body>
                            <Card.Title>Rome</Card.Title>
                            <Card.Text>
                                Rome has become increasingly popular as a tourist destination globally.
                                 Popular tourists attractions in the city include the Colosseum, St Peter's Basilica, the Pantheon and so on
                            </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Tourism_in_Italy' target='blank'>
                                <Button variant="primary" style={{ position: 'relative', marginTop: '24px' }}>Know More</Button></a>
                        </Card.Body>
                    </Card>

                    <Card border="info" className='cards'>
                        <Card.Img variant="top" src={turkey} style={{ height: '200px' }}/>
                        <Card.Header>Turkey</Card.Header>
                        <Card.Body>
                            <Card.Title>Istanbul</Card.Title>
                            <Card.Text>
                                Istanbul is one of the most important tourism spots not only in Turkey but also in the world. Istanbul has also recently become one of the biggest shopping centers of the European region by hosting malls and shopping centers
                        </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Tourism_in_Turkey' target='blank'>
                                <Button variant="primary" >Know More</Button></a>
                        </Card.Body>
                    </Card>

                    <Card border="info" className='cards'>
                        <Card.Img variant="top" src={berlin} style={{ height: '200px' }}/>
                        <Card.Header>Germany</Card.Header>
                        <Card.Body>
                            <Card.Title>Berlin</Card.Title>
                            <Card.Text>
                                Berlin has a yearly total of about 135 million day visitors, which puts it in third place among the most-visited city destinations in the European Union
                        </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Tourism_in_Germany' target='blank'>
                                <Button variant="primary" style={{ position: 'relative', marginTop: '48px' }}>Know More</Button></a>
                        </Card.Body>
                    </Card>
                </CardDeck>


            </Container>
        );
    }
}

export default Cards;