import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './../CSS/booking.css';
import About from './About Us';
import Footer from './Contact Us';
import {connect} from 'react-redux';
import { raiseTickets } from './../Redux/Actions/index';
import Tickets from './BookingRequests';

class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cus_name: null,
            cus_id: null,
            start: null,
            destiny: null,
            startdate: null,
            return: null,
            quantity: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var curruser = this.props.reducerState.userReducer.currentuser;
        this.setState({
            cus_id: curruser.id,
            cus_name: curruser.name
        })
        //getting data from db
        //var details = this.props.reducerState.userReducer.dealers;
        //var details = await items.find({}).toArray();
        //checking if the user details are present  in db or not
        //var ispresent = details.some(item => item.owner_id === curruser.id);
        //var dealerDetails = details.filter(detail => detail.age > 20);
        //console.log("Dealers :- " + dealerDetails[0]);
        // if (details) {
        //     var names = [];
        //     details.forEach(function (detail) {
        //         if (detail.isCustomer === true) {
        //             names.push(detail.name);
        //         }
        //     });
        //     console.log("ARRAY:- " + names);
            //setting the state values
            //this.setState({
            //    dealers: names
            //})
        //}
    }


    handleSubmit = (e) => {
        e.preventDefault();
     
        this.props.raiseTickets(this.state.cus_name,this.state.cus_id, this.state.start, this.state.destiny, this.state.startdate, this.state.return, this.state.quantity); 
        this.setState({});

    }

    render() {
        return (
            <>
            <div className="containerbooking">
                <h1 className='bookinghead'>Book Your Tickets</h1>
                <p className='bookingp'>Fill your starting point and your Destiny</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row style={{ paddingLeft: '480px' }}>
                        <Form.Group controlId="formBasicStart">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder'}}>Start</Form.Label>
                            <Form.Control required type="text" onChange={e => this.setState({ start: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>&nbsp;&nbsp;&nbsp;&nbsp;   

                        <Form.Group controlId="formBasicDestiny">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>Destiny</Form.Label>
                            <Form.Control required type="text" onChange={e => this.setState({ destiny: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row style={{ paddingLeft: '485px' }}>
                        <Form.Group controlId="formBasicStartDate">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>Start Date</Form.Label>
                            <Form.Control required type="date" onChange={e => this.setState({ startdate: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Form.Group controlId="formBasicReturnDate">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>Return Date</Form.Label>
                            <Form.Control required type="date" onChange={e => this.setState({ return: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row style={{ paddingLeft: '580px' }} min={1}>
                        <Form.Group controlId="formBasicTickets">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>Number Of Tickets</Form.Label>
                            <Form.Control required type="number" onChange={e => this.setState({ quantity: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>                 
                    </Form.Row>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>
                </div>
                <Tickets />
            <About />
            <Footer />
            </>
            );
    }
}

const mapStateToProps = (state) => ({
    reducerState: state      
})

const mapDispatchToProps = {
    raiseTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);