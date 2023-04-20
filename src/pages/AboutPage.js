import { Container, Row, Col, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import background from '../app/assets/image/twbg.jpg'

const AboutPage = () => {

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Container>
                <Row>
                    <Col sm='5' className='offset-7 mt-5' style={{ color: 'white' }} >
                        <h2>What is the Round Table?</h2>
                        <p>Round Table is a community driven Magic: The Gathering banned list voting platform for the Commander format. It is designed to aggregate the community opinion and create a banned list of cards based on the results of a monthly community voting polling process.</p>
                        <br />
                        <h3>How does it work?</h3>
                        <p>
                            The Round Table goes through a monthly polling process that involves two phases of voting, followed by a banning and unbanning announcement. During these phases, players  will have an opportunity to express their opinions and desires by casting their vote.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm='6' className='ballot-margin offset-6 mt-5' >
                        <Card style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.5)' }}>
                            <CardBody>
                                <Row>
                                    <Col sm='6' style={{ color: 'white' }} >
                                        <h5>Phase 1</h5>
                                        <p>
                                            Phase 1 of the voting process begins on the first day of each month and lasts 14 days. During that time period, it allows each voter to choose 3 cards that they believe, for whatever reason, should be banned from the Commander: Round Table format and 3 cards that they would like to see released from the banned list.
                                        </p>
                                    </Col>
                                    <Col>
                                        <h5>Phase 2</h5>
                                        <p>
                                            Phase 2 takes all of the votes from phase 1 and tallys up the top three vote getters in each category. From here, there will be a 14 day voting period where each user will be able to vote for or against any action taken for each card.
                                        </p>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <h4>The Aftermath</h4>
                                <p>
                                    Once the votes are all added up, an announcement will be made of that will include any updates to the banned list including the results of the voting process.
                                </p>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutPage