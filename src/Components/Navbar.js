import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { items } from "./../Stitch/mongodb";
import React, { Component } from 'react';
import {Sidebar} from 'primereact/sidebar';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUserAction} from './../Redux/Actions/index';
import "./../CSS/navbar.css";

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: false,
            isAdmin: false,
            isDealer: false,
            isCustomer: false
        };
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

            console.log(details);

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
        var check = this.props.reducer_state.userReducer.check;
        return (
            <div className="navContainer">
                
                <button className="p-link" onClick={(e) => this.setState({visibleLeft:true})} style={{paddingLeft: '0px'}}><i className="pi pi-bars"/></button>
                <button className="p-link" ><i className="pi pi-fw pi-inbox"/></button>
                <Sidebar visible={this.state.visibleLeft} 
                baseZIndex={1000} 
                onHide={() => this.setState({visibleLeft: false})} 
                style={{background: "black", opacity: "0.85"}}
                >
                    
                    <h1 className="navHead">Menu</h1>
                    {/* Showing and Hiding Links depending on whether a user is logged in or not */}
                    
                    {check && <a className= "navAtag" href="/home" style={{ fontWeight: 'bold' }}>Home</a> }<br/>
                    {check && <a className= "navAtag" href="/cities" style={{ fontWeight: 'bold' }}>Wonders</a> }<br/>
                    {check && (this.state.isCustomer || this.state.isAdmin) && <a className= "navAtag" href="/buy_tickets" style={{ fontWeight: 'bold' }}>Tickets</a> }
                    {check && this.state.isDealer && <a className= "navAtag" href="/booking_requests" style={{ fontWeight: 'bold' }}>Booking Requests</a> }<br/>
                    {check && <a  className= "navAtag"href="/profile" style={{ fontWeight: 'bold' }}>Profile</a> }<br/>
                    {check && <a className= "navAtag" href="/settings" style={{ fontWeight: 'bold' }}>Settings</a> }<br/>
                    {check && <span  onClick={this.handleLogout}  className="navAtag">Log Out</span> }<br/>
                    

                    { !check && <a className= "navAtag" href="/register" style={{ fontWeight: 'bold' }}>Register</a> }<br></br>
                    { !check && <a className= "navAtag" href="/login" style={{ fontWeight: 'bold' }}>Login</a> } 
                    
                </Sidebar>
                
            </div>
        )
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