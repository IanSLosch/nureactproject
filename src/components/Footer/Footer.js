import { Container, Row, Col } from 'reactstrap'
// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="site-footer">
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