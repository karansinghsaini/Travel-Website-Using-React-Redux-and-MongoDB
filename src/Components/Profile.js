import React from 'react';
import {Form,Button,Col,Row} from 'react-bootstrap';
import { updateProfile } from './../Redux/Actions/index';
import {connect} from 'react-redux';
import { items } from "./../Stitch/mongodb";
import './../CSS/profile.css';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: 10,
            email: '',
            bio: '',
            isAdmin: false,
            isCustomer: false,
            isDealer: false,
            isEditable: false
        }
    }

    async componentDidMount (){
        //storing current user details
        var curruser = this.props.reducerState.userReducer.currentuser; 
        
        //storing if dealer or custoemr
        var dealer = this.props.reducerState.userReducer.dealer;
        var customer = this.props.reducerState.userReducer.customer; 
        //getting data from db
        var result = await items.find({}).toArray();
        //checking if the user details are present  in db or not
        var ispresent = result.some(item => item.owner_id === curruser.id);
        if (ispresent) {
            //if user details are present then filtering it out to a new array
            //var result = details.filter(item => item.owner_id === curruser.id);
            //console.log(result);
            //setting the state values
            this.setState({
                //name: details[0].name,
                //email: details[0].email,
                //age: details[0].age,
                //bio: details[0].bio
                name: result[0].name,
                email: result[0].email,
                age: result[0].age,
                bio: result[0].bio,
                isAdmin: result[0].isAdmin,
                isDealer: result[0].isDealer,
                isCustomer: result[0].isCustomer,
                isEditable: true
            })
        }
        else {
            this.setState({
                isAdmin: false,
                isDealer: dealer,
                isCustomer: customer,
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // calling update profile action type
        this.props.updateProfile(this.state.name, this.state.email, this.state.age, this.state.bio, this.state.isAdmin, this.state.isDealer, this.state.isCustomer);        
    }

    render(){
        
        return (
            <div className="profilediv">
                {this.state.isDealer && <h2 className="heading"> Welcome to your Profile Dealer </h2>}
                {this.state.isCustomer && <h2 className="heading"> Welcome to your Profile Customer </h2>}
            <Form onSubmit={this.handleSubmit} style={{ paddingTop: "20px" }}>

                <Form.Row style={{ paddingLeft: '450px' }}>
                    <Form.Group controlId="formBasicName">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>Name</Form.Label>
                        <Form.Control required type="text"  value={this.state.name} onChange={e => this.setState({name:e.target.value})}/>
                    </Form.Group>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   

                    <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>Email address</Form.Label>
                        <Form.Control required type="email"  value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row style={{ paddingLeft: '450px' }}>
                    <Form.Group controlId="formBasicBio">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>About</Form.Label>
                        <Form.Control required as="textarea" rows="3" cols="58" value={this.state.bio} onChange={e => this.setState({bio:e.target.value})}/>
                    </Form.Group>
                </Form.Row>


                <Form.Row style={{ paddingLeft: '445px' }}>
                    <Form.Group as={Col} md="3" controlId="formBasicName">
                            <Form.Label style={{ color: 'white', fontFamily: 'Courier', fontWeight: 'bolder' }}>Age</Form.Label>
                        <Form.Control required type="number" value={this.state.age} min={10} max={100} onChange={e => this.setState({ age: e.target.value })} />
                    </Form.Group>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   

                    <Form.Group as = {Row}>
                            <Form.Label as="legend" column sm={2} style={{ color: 'white', fontFamily: 'Courier'}}>
                        User Type
                     </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Dealer"
                            value={this.state.isDealer}      
                            checked = {this.state.isDealer} 
                            disabled={!this.state.isDealer}                     
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            style={{ color: 'white', fontFamily: 'Courier' }}
                            onClick={e => this.setState({ isDealer: true })}
                        />
                        <Form.Check
                            type="radio"
                            label="Customer"
                            value={this.state.isCustomer}     
                            checked = {this.state.isCustomer}        
                            disabled={!this.state.isCustomer}               
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            style={{ color: 'white', fontFamily: 'Courier' }}   
                            onClick={e => this.setState({ isCustomer: true })}
                        />
                    </Col>
                      </Form.Group>
                </Form.Row><br />



                    <Button variant="primary" type="submit">
                        Update Profile
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        reducerState: state      
})


const mapDispatchToProps = {
    updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);