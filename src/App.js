import React from 'react';
import './App.css';
import Home from './Components/Home';
import MenuNav from './Components/Navbar';
import Register from './Components/SignUp';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Booking from './Components/Booking';
import Cities from './Components/Cities';
import BookingRequests from './Components/BookingRequests'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {

   render() {
    var check = this.props.reducer_state.userReducer.check;

   return(
   <div className="App">
        <BrowserRouter>
        <MenuNav />
                <Switch>
                    { !check && <Route exact path='/' component={Register} /> }
                    { check && <Route exact path='/' component={Home} /> }
                    <Route exact path='/home' component={Home} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                   <Route path='/profile' component={Profile} />
                   <Route path='/cities' component={Cities} />
                   <Route path='/buy_tickets' component={Booking} />
                   <Route path='/booking_requests' component={BookingRequests} />
                </Switch>

        </BrowserRouter>
   </div>
       );
   }
}

//Accessing the state of the reducer
const mapStateToProps = (state) => ({
    reducer_state: state
});
 

export default connect(mapStateToProps)(App);
