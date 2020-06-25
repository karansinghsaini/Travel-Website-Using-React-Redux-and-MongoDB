import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUserAction} from '../Redux/Actions/index';
import { items } from "../Stitch/mongodb";

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleLeft: false,
            isAdmin: false,
            isDealer: false,
            isCustomer: false
        }
    }
    
    handleLogout = (e) => {
        e.preventDefault();
        //calling the logout action creator 
        this.props.logoutUserAction();
    }

    async componentDidMount() {
        //storing current user details
        var curruser = this.props.reducer_state.userReducer.currentuser;
        var dealer = this.props.reducer_state.userReducer.dealer;
        var customer = this.props.reducer_state.userReducer.customer;
        //getting data from db
        if (curruser != null) {
            var details = await items.find({}).toArray();
            //checking if the user details are present  in db or not
            var ispresent = details.some(item => item.owner_id === curruser.id);
           // console.log("checking is dealer:- " + dealer);
            var result = details.filter(item => item.owner_id === curruser.id);
            if (ispresent) {
                //setting the state values
                this.setState({
                    isAdmin: result[0].isAdmin,
                    isCustomer: result[0].isCustomer,
                    isDealer: result[0].isDealer
                })
            }
            else{
                //setting the state values
                this.setState({
                    isCustomer: customer,
                    isDealer: dealer
                })
            }
        }
    }

    render() {
        //storing boolean value of isLoggedInUesr
        var check = this.props.reducer_state.userReducer.check;
        
        return(
            
            
            <Navbar bg="info" variant="light" sticky="top" >
                <Navbar.Brand href="/">Know The World</Navbar.Brand>
                <Nav className="mr-auto" style={{ paddingLeft: '340px' }}>
                    {check && <Nav.Link href="/home" style={{ fontWeight: 'bold' }}>Home</Nav.Link> }
                    {/* Showing and Hiding Links depending on whether a user is logged in or not */}
                    {check && < Nav.Link href='/cities' style={{ fontWeight: 'bold' }}>Wonders</Nav.Link>}
                    {check && (this.state.isCustomer || this.state.isAdmin) && <Nav.Link href='/buy_tickets' style={{ fontWeight: 'bold' }}>Tickets</Nav.Link>}
                    {check && this.state.isDealer && <Nav.Link href='/booking_requests' style={{ fontWeight: 'bold' }}>Booking Requests</Nav.Link>}
                    {check && <NavDropdown title="Profile" style={{ fontWeight: 'bold' }} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">User Details</NavDropdown.Item>
                        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown> }
                    {!check && this.state.isAdmin && < Nav.Link href='/register' style={{ fontWeight: 'bold' }}>Register</Nav.Link>}
                    {!check && <Nav.Link href='/register' style={{ fontWeight: 'bold' }}>Register</Nav.Link>}
                    {!check && <Nav.Link href='/login' style={{ fontWeight: 'bold' }}>LogIn</Nav.Link>}
                </Nav>
            </Navbar>
       
        );
    }
}

//Accessing the state of the reducer 
const mapStateToProps = (state) => ({
        reducer_state: state      
})
//using action to logout user
const mapDispatchToProps = {
    logoutUserAction
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Menu));