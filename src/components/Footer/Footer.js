import { Container, Row, Col } from 'reactstrap'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Footer.css'
// import { Link } from 'react-router-dom'

const Footer = () => {
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
        <footer className="site-footer" style={{ backgroundColor }}>
            <Container className='d-flex justify-content-around py-4 px-4'>
                <div>
                    <h3>Site</h3>
                    <ul>
                        <li className="link" href='login'>Login</li>
                        <li className="link" href='login'>Register</li>
                        <li className="link" href='bannedlist'>The List</li>
                        <li className="link" href='voting'>Vote Now</li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li className="link" href='#'>Forums</li>
                        <li className="link" href='#'>Patreon</li>
                        <li className="link" href='#'>Follow</li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li className="link" href='about'>About</li>
                        <li className="link" href='#'>Credit</li>
                        <li className="link" href='#'>Contact</li>
                        <li className="link" href='#'>Privacy</li>
                        <li className="link" href='#'>Terms of Use</li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer