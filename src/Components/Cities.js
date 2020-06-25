import React from "react";
import { Card,Button,Container,CardDeck } from "react-bootstrap";
import San from './../images/wonders/san.jpg';
import Syd from './../images/wonders/sydney.jpg';
import Par from './../images/wonders/paris.jpg';
import Scotland from './../images/wonders/scotland.jpg';
import Japan from './../images/wonders/japan.jpg';
import Hawaii from './../images/wonders/hawaii.jpg';
import Rio from './../images/wonders/rio.jpg';
import Turkey from './../images/wonders/turkey.jpg';
import Ireland from './../images/wonders/ireland.jpg';
import './../CSS/home.css';
import About from './About Us';
import Footer from './Contact Us';

class Cities extends React.Component {

    render() {
        return (
            <>
            <Container>
                <CardDeck>                   
                        <Card border='info' className = 'cards'>
                            <Card.Img variant="top" src={San} />
                            <Card.Header>California</Card.Header>
                            <Card.Body>
                            <Card.Title>Golden Gate Bridge</Card.Title>
                            <Card.Text>
                            The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, 
                            the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean. 
                            </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Golden_Gate_Bridge' target='blank'>
                            <Button variant="primary" style={{position: 'relative', marginTop:'24px'}}>Know More</Button></a>
                            </Card.Body>
                        </Card>
                     
                        <Card border="info" className = 'cards'>
                        <Card.Img variant="top" src={Syd} />
                        <Card.Header>Australia</Card.Header>
                        <Card.Body>
                        <Card.Title>Sydney Opera House</Card.Title>
                        <Card.Text>
                        The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia.                         
                        </Card.Text>
                        <a href='https://www.sydneyoperahouse.com/' target='blank'>
                        <Button variant="primary" style={{position: 'relative', marginTop:'48px'}}>Know More</Button></a>
                        </Card.Body>
                        </Card>
                    
                        <Card border="info" className = 'cards'>
                        <Card.Img variant="top" src={Par} />
                        <Card.Header>France</Card.Header>
                        <Card.Body>
                        <Card.Title>Eiffel Tower</Card.Title>
                        <Card.Text>
                        The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.
                        </Card.Text>
                        <a href='https://www.toureiffel.paris/en' target='blank'>
                        <Button variant="primary">Know More</Button></a>
                        </Card.Body>
                        </Card>             
                </CardDeck><br /><br />

                <CardDeck>
                    <Card border='info' className='cards'>
                        <Card.Img variant="top" src={Rio} />
                        <Card.Header>Rio de Janeiro</Card.Header>
                        <Card.Body>
                            <Card.Title>Sugarloaf Mountain</Card.Title>
                            <Card.Text>
                               Sugarloaf Mountain is a peak situated in Rio de Janeiro, Brazil, 
                                 at the mouth of Guanabara Bay on a peninsula that juts out into the Atlantic Ocean.                                   
                            </Card.Text>
                            <a href='https://en.wikipedia.org/wiki/Sugarloaf_Mountain' target='blank'>
                                <Button variant="primary" style={{ position: 'relative', marginTop: '48px' }}>Know More</Button></a>
                        </Card.Body>
                    </Card>

                    <Card border="info" className='cards'>
                        <Card.Img variant="top" src={Japan} />
                            <Card.Header>JAPAN</Card.Header>
                        <Card.Body>
                                <Card.Title>MOUNT FUJI</Card.Title>
                            <Card.Text>
                                It's hard to pick the single most stunning place in Japan, but 12,388ft Mount Fuji might just take the prize. Visit Lake Kawaguchiko in the spring for some of the best views of the mountain and postcard-worthy cherry-blossom trees. 
                        </Card.Text>
                            <a href='https://www.japan-guide.com/e/e2172.html' target='blank'>
                                <Button variant="primary" >Know More</Button></a>
                        </Card.Body>
                    </Card>

                    <Card border="info" className='cards'>
                        <Card.Img variant="top" src={Turkey} />
                            <Card.Header> TURKEY</Card.Header>
                        <Card.Body>
                                <Card.Title>CAPPADOCIA</Card.Title>
                            <Card.Text>
                                This Turkish region, where entire cities have been carved into rock, is incredible on its own. But whenever hot-air balloons pepper the sky, its awe-inspiring level skyrockets.
                        </Card.Text>
                            <a href='https://www.lonelyplanet.com/turkey/cappadocia-kapadokya' target='blank'>
                                    <Button variant="primary" style={{ position: 'relative', marginTop: '48px' }}>Know More</Button></a>
                        </Card.Body>
                    </Card>
                    </CardDeck><br /><br />


                    <CardDeck>
                        <Card border='info' className='cards'>
                            <Card.Img variant="top" src={Hawaii} />
                            <Card.Header>HAWAII</Card.Header>
                            <Card.Body>
                                <Card.Title>NA PALI COAST</Card.Title>
                                <Card.Text>
                                    Kauai has one of the world's most gorgeous coastlines, with towering waterfalls and isolated crescent beaches. Just be prepared to put in a little effort to soak up its wonders: Na Pali can only be seen from a helicopter, catamaran or on rather gruelling hike.
                            </Card.Text>
                                <a href='https://www.gohawaii.com/islands/kauai/regions/north-shore/napali-coast' target='blank'>
                                    <Button variant="primary" style={{ position: 'relative', marginTop: '24px' }}>Know More</Button></a>
                            </Card.Body>
                        </Card>

                        <Card border="info" className='cards'>
                            <Card.Img variant="top" src={Ireland} />
                            <Card.Header>IRELAND</Card.Header>
                            <Card.Body>
                                <Card.Title>CLIFFS OF MOHER</Card.Title>
                                <Card.Text>
                                    Few places exemplify the raw, untamed appeal of Ireland's west coast as this natural wonder, which tops 702ft at the highest point. And, while some might know them better as the Cliffs of Insanity from The Princess Bride, in reality, the cliffs are located just south of Galway.
                        </Card.Text>
                                <a href='https://www.cliffsofmoher.ie/' target='blank'>
                                    <Button variant="primary" style={{ position: 'relative', marginTop: '24px' }}>Know More</Button></a>
                            </Card.Body>
                        </Card>

                        <Card border="info" className='cards'>
                            <Card.Img variant="top" src={Scotland} />
                            <Card.Header>SCOTLAND</Card.Header>
                            <Card.Body>
                                <Card.Title>ISLE OF SKYE</Card.Title>
                                <Card.Text>
                                    With fairy pools and endless, undulating hills, the magical Isle of Skye is the stuff dreams are made of (regardless of whether you've binge-watched Outlander or not). While the nature here is timeless, the island has a food scene that's totally modern - we can't think of a better place to sample Michelin-starred dishes.
                        </Card.Text>
                                <a href='https://www.isleofskye.com/' target='blank'>
                                    <Button variant="primary">Know More</Button></a>
                            </Card.Body>
                        </Card>
                    </CardDeck>


                </Container><br /><br />
            <About />
            <Footer />
            </>
            );
    }
}

export default Cities;