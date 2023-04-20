import { Container} from 'reactstrap'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Footer.css'
import { Link } from 'react-router-dom'

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
                        <li ><Link className="link" to='login'>Login</Link></li>
                        <li ><Link className="link" to='login'>Register</Link></li>
                        <li ><Link className="link" to='bannedlist'>The List</Link></li>
                        <li ><Link className="link" to='voting'>Vote Now</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li><Link className="link" to='#'>Forums</Link></li>
                        <li><Link className="link" to='#'>Patreon</Link></li>
                        <li><Link className="link" to='#'>Follow</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li><Link className="link" to='about'>About</Link></li>
                        <li><Link className="link" to='#'>Credit</Link></li>
                        <li><Link className="link" to='#'>Contact</Link></li>
                        <li><Link className="link" to='#'>Privacy</Link></li>
                        <li><Link className="link" to='#'>Terms of Use</Link></li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer