import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import background from '../app/assets/image/aboutbg.jpg'
import CountdownTimer from '../components/CountdownTimer/CountdownTimer'


const HomePage = () => {

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Container style={{ height: "40rem"}}>
                <Row >
                    <Col className='offset-7 mt-5' style={{color: 'white'}}>
                        <h2>Cast your vote</h2>
                        <h4>A Magic the Gathering - Commander community-driven banned list variant</h4>
                        <Card style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.5)' }} >
                            <CardBody>
                                <CountdownTimer countdownTimestampMs={1682654400000} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col className='offset-7'>
                        <Card style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.5)' }}>
                            <CardHeader>
                                <h3>Lorem ipsum dolor</h3>
                            </CardHeader>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage