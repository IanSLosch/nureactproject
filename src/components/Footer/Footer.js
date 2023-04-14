import { Container, Row, Col } from 'reactstrap'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
            <Container>
                <Row className='text-center'>
                    <Col className='mt-4'>
                        <a href='#'>Contact</a>
                    </Col>
                    <Col className='mt-4'>
                        <a href='#'>Terms & Conditions</a>
                    </Col>
                    <Col className='mt-4'>
                        <a href='#'>Privacy Policy</a>
                    </Col>
                </Row>
                <Row className='text-center mt-4'>
                    <Col>
                    <a href="#"><i className="fa fa-regular fa-copyright" /> TheRoundTable 2023</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer