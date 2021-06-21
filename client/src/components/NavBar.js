import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/const'

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
          <NavLink to={SHOP_ROUTE}></NavLink>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        
    )
}

export default NavBar
