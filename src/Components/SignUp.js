import React from 'react';
import {Form, Button,Row,Col} from 'react-bootstrap';
import {registerUserAction} from './../Redux/Actions/index';
import {connect} from 'react-redux';
import './../CSS/signup.css';


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: null,
            password: null,
            isDealer: false,
            isCustomer: false
            //retype_password: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // calling register user action type
        console.log("Is dealer - " + this.state.isDealer);
        this.props.registerUserAction(this.state.email, this.state.password, this.state.isDealer, this.state.isCustomer);
    }

    render(){
        return(
           <div className="containerdiv">
               <h1>Register</h1>
                <p>Please fill in this form to Register.</p>

               <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({email: e.target.value})}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => this.setState({password:e.target.value})}/>
                    </Form.Group>
                    
                    <Form.Group as = {Row}>
                            <Form.Label as="legend" column sm={2} style={{ color: 'black', fontFamily: 'Courier'}}>
                        User Type
                     </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Dealer"
                            value={this.state.isDealer}                            
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            style={{ color: 'black', fontFamily: 'Courier' }}
                            onClick={e => this.setState({ isDealer: true })}
                        />
                        <Form.Check
                            type="radio"
                            label="Customer"
                            value={this.state.isCustomer}                            
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            style={{ color: 'black', fontFamily: 'Courier' }}   
                            onClick={e => this.setState({ isCustomer: true })}
                        />
                    </Col>
                      </Form.Group>  
                    

                    <Button variant="primary" type="submit">
                        Register Me
                    </Button>
                </Form>

                <div className="container_signin">
                    <p>Already have an account? <a href="/login">Sign in</a>.</p>
                </div>
           </div> 

        );
    }

}

const mapDispatchToProps = {
    registerUserAction
}

export default connect(null,mapDispatchToProps)(Register);
