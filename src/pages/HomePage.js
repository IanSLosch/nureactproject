import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import image from '../app/assets/image/breachart.jpg'
// import { CountDown } from '../utils/countdown'

const HomePage = () => {

    return (
        <Container>
            <Row className='ballot-margin'>
                <Col>
                    <h2>Cast your vote</h2>
                    <h4>A Magic the Gathering - Commander community-driven banned list variant</h4>
                    <h2>Phase 1</h2>
                    <p>Insert CountDown</p>
                    {/* <CountDown /> */}
                </Col>
            </Row>
            <Row className='ballot-margin'>
                <Col>
                    <Card>
                        <CardHeader>
                            <h3>Banned List Nomination</h3>
                            <p>Choose up to 3 cards for banning consideration. The top 3 cards with the most votes during the numination phase move on to the balancing phase.</p>
                        </CardHeader>
                        <CardBody>
                            <p>Insert logic for voting cards</p>
                            <img className='testimg' src={image} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='ballot-margin'>
                <Col>
                    <Card>
                        <CardHeader>
                            <h3>Unbanning Nomination</h3>
                            <p>Choose up to 3 cards to be considered for release from the banned list. The top 3 cards with the most votes during the numination phase move on to the balancing phase.</p>
                        </CardHeader>
                        <CardBody>
                            <p>Insert logic for voting cards</p>
                            <img className='testimg' src={image} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage