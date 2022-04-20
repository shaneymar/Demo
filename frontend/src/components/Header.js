import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import {ReactComponent as Logo} from '../images/logo.svg';

const navbarStyle = {
    backgroundColor: 'black'
};

const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyle} variant="light">
            <Container>
                <Logo alt={{ title }}style ={{maxWidth: '300px', textAlign: 'center'}}/>
            </Container>
        </Navbar>
    )
};

export default Header;