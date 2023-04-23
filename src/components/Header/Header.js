import { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RoundTableLogo from '../../app/assets/image/basiclogo.png'
import './Header.css'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('')
    const location = useLocation()
    

    useEffect(() => {
        if (location.pathname == '/') {
            setBackgroundColor('#000000') // set background color to black
        } else {
            setBackgroundColor('') // reset background color
        }
    }, [location])

    return (
        <Navbar dark className='navbar navbar-expand-md mb-0 pt-1' style={{ backgroundColor }} >
            <NavbarBrand className='ms-5' href="/">
                <img className='float-start' src={RoundTableLogo} style={{ width: 60, height: 60 }} alt='logo' />
                <h1 className='mt-1'>Round Table</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/voting'>
                            <i className='fa fa-info fa-lg' /> Voting
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/bannedlist'>
                            <i className='fa fa-list fa-lg' /> Banned List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/login'>
                            <i className='fa fa-address-card fa-lg' /> Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header