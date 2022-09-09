import React from 'react';
import { Navbar, Container, Column } from 'rbx';
import LogoImage from '../../assets/images/logo.png';
import  '../../styles/header.scss'
import { Link } from 'react-router-dom';


function Header(){

  return(
    <Navbar>
        <Container>
            <Navbar.Brand>
               <Link to='/' className='logo-nav'>
                  <img src={LogoImage} />
               </Link>

            <Navbar.Burger
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar-menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </Navbar.Burger>
            </Navbar.Brand>

            <Navbar.Menu id="navbar-menu">
                <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                  <Column.Group>
                     <Column>
                        <Link to="/register" className="button is-white has-text-danger register-nav">Register</Link>
                     </Column>
                     <Column>
                        <Link to="/login" className="button is-outlined is-danger login-nav">Login</Link>
                     </Column>
                  </Column.Group>
                </Navbar.Segment>
            </Navbar.Menu>
        </Container>
    </Navbar>
 )
}

export default Header;