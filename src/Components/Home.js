import React from "react";
import Destinations from './Destinations';
import Slides from './Slide';
import About from './About Us';
import './../CSS/home.css';
import Footer from './Contact Us';

class Home extends React.Component {

    render() {
        return (
           <div>
                <Slides /><br /><br />
                <p className='smallhead'>Simply Amazing Places</p>
                <p className='head1'>Popular Destinations</p><br /><br />
                <Destinations /><br /><br />
                <About />
                <Footer />
           </div>
            );
    }
}

export default Home;