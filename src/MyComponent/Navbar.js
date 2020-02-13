import React from 'react';
import '../Navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class App extends React.Component {
    state = {
        auth: false,
        slide: 0,  // How much should the Navbar slide up or down
        lastScrollY: 0,  // Keep track of current position in state
    };

    componentWillMount = () => {
        // When this component mounts, begin listening for scroll changes
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        // If this component is unmounted, stop listening
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;


        if (currentScrollY > lastScrollY) {
            this.setState({ slide: '-48px' });
        } else {
            this.setState({ slide: '0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    };
    render() {
        return <header>
            <div className="heading-panel">
                <div className="container">
                    <div className="contact-info pull-xs-left">
                        <span className="icon icon-xs icon-primary fa-phone"></span>+ 4 (8056)  0000 1756
                </div>
                    <ul className="inline-list pull-xs-right">
                        <li><span className="icon icon-xs icon-default fa-facebook"></span></li>
                        <li><span className="icon icon-xs icon-default fa-twitter"></span></li>
                        <li><span className="icon icon-xs icon-default fa-google-plus"></span></li>
                        <li><span className="icon icon-xs icon-default fa-pinterest"></span></li>
                    </ul>
                </div>
            </div>
            <Navbar className="navbr" bg="dark" variant="dark" style={{ transform: `translate(0, ${this.state.slide})`, transition: 'transform 90ms linear', }}>
                <Navbar.Brand href="#home" className="nav">
                    <span className="navbar-brand__icon fa-paper-plane"></span> {' '}  PEACE
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <div class="dropdown">
                        <Nav.Link href="#features"><button class="dropbtn">COMPANY</button></Nav.Link>
                        <div class="dropdown-content dropdown-menu">
                            <a href="#">About</a>
                            <a href="#">History</a>
                            <a href="#" className="drp">News
                            <div style={{ display: `none` }} class="dropdown-content1 dropdown-menu">
                                <a href="#">About</a>
                                <a href="#">History</a>
                            </div></a>
                            <br />
                        </div>
                    </div>
                    <Nav.Link href="#pricing">SERVICES</Nav.Link>
                    <Nav.Link href="#pricing">NEWS</Nav.Link>
                    <Nav.Link href="#pricing">CONTACT</Nav.Link>
                </Nav>
            </Navbar>
        </header >
    }
}