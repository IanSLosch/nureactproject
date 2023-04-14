import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import background from '../app/assets/image/breachart.jpg'
// import { CountDown } from '../utils/countdown'

const HomePage = () => {

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Container style={{ height: "32rem"}}>
                <Row >
                    <Col className='offset-6 mt-5' style={{color: 'white'}}>
                        <h2>Cast your vote</h2>
                        <h4>A Magic the Gathering - Commander community-driven banned list variant</h4>
                        <p>Insert CountDown</p>
                        {/* <CountDown /> */}
                    </Col>
                </Row>
                <Row className='ballot-margin'>
                    <Col className='offset-6'>
                        <Card>
                            <CardHeader>
                                Card Header
                            </CardHeader>
                            <CardBody>
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage