import { useState } from "react";
import { 
    Navbar,
    NavbarBrand,
    Collapse, 
    NavbarToggler,
    Nav, 
    NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import RoundTableLogo from '../../app/assets/image/logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar className='navbar-expand-md navbar-dark'>
            <NavbarBrand className='ms-5' href="/">
                <img className='float-start' src={RoundTableLogo} alt='roundtable logo' />
                <h1 className='mt-1'>Round Table</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg'/> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg'/> Directory
                        </NavLink>  
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg'/> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/login'>
                            <i className='fa fa-address-card fa-lg'/> Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header