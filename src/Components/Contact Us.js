import React from 'react';
import { Row, Col } from "react-bootstrap";
import sign from './../images/sign.svg';
import trek from './../images/trekking.svg';
import around from './../images/around.svg';
import './../CSS/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='footerdiv'>
                <p className='sometext'>Register today to Unlock features and Travel to your Favourite Destination</p>
                <p className='smalltext'>Join our Database now to get latest news and best offers</p>
                <br /><br />
                <Row>
                    <Col style={{ color: 'lightgrey' }}>
                        <img className='footerimg' src={sign} alt='Sign' /><br /><br />
                        <h4>Give Us A Call</h4>
                        <span>Office Landline: +44 5567 32 664 567</span> 
                    </Col>
                   
                    <Col style={{ color: 'lightgrey' }}>
                        <img className='footerimg' src={trek} alt='Trekking'/><br /><br />
                        <h4>Visit Us</h4>
                        <span> 4124 Barnes Street, Sanford, FL 32771</span>
                    </Col>

                    <Col style={{ color: 'lightgrey' }}>
                        <img className='footerimg' src={around} alt='Around'/><br /><br />
                        <h4>Send Us A Message</h4>
                        <span> xyz@evalueserve.com</span>
                    </Col>

                </Row>
            </div>
            );
    }
}

export default Footer;