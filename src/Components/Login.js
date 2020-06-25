import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {loginUserAction} from './../Redux/Actions/index';
import {connect} from 'react-redux';
import './../CSS/signup.css';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: null,
            password: null,
            isLoginIn: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoginIn: true});
        // calling the login user action type
        this.props.loginUserAction(this.state.email, this.state.password, this.state.isLoginIn);
    }

    render(){
        return(
            <div className="container">
               <h1>Login</h1>
                <p>Please fill in this form to Login.</p>
               <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({email: e.target.value})}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => this.setState({password:e.target.value})}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
           </div> 
        );
    }

}

const mapDispatchToProps = {
    loginUserAction
}

export default connect(null,mapDispatchToProps)(Login);
