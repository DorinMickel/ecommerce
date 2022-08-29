import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ShoppingCart from './ShoppingCart';
import { navbarOptions } from '../staticData/navbar';

const NavbarContainer = () => {
    return (
        <Navbar>
            <Navbar.List >
            {navbarOptions.map(option => {
                return(
                    <Navbar.Item key={option.id}>
                        <Link to={option.path}>{option.text}</Link>
                    </Navbar.Item>
                )
            })}
            </Navbar.List>
            <ShoppingCart />
      </Navbar>
    )
}

export default NavbarContainer