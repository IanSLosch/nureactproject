import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import image from '../app/assets/image/docksideart.jpg'

const AboutPage = () => {

    return (
        <Container className='mt-5'>
            <Row>
                <Col sm='6 ballot-margin'>
                    <Card>
                        <CardHeader>
                            <h3>What is the Round Table?</h3>
                        </CardHeader>
                        <CardBody>
                        Round Table is a community driven Magic: The Gathering banned list voting platform for the Commander format. It is designed to aggregate the community opinion and create a banned list of cards based on the results of a monthly community voting polling process.


                        </CardBody>
                    </Card>
                </Col>
                <Col sm='6' className='text-center'>
                    <img className='testimg' src={image} />
                </Col>
            </Row>
            <Row>
                <Col className='ballot-margin' >
                <h2>How does it work?</h2>
                    <p>
                        The Round Table goes through a monthly polling process that involves two phases of voting, followed by a banning and unbanning announcement. During these phases, players  will have an opportunity to express their opinions and desires by casting their vote.
                        <br />
                        <br />
                        Phase 1 of the voting process begins on the first day of each month and lasts 14 days. During that time period, it allows each voter to choose 3 cards that they believe, for whatever reason, should be banned from the Commander: Round Table format and 3 cards that they would like to see released from the banned list.
                        <br />
                        <br />
                        Phase 2 takes all of the votes from phase 1 and tallys up the top three vote getters in each category. From here, there will be a 14 day voting period where each user will be able to vote for or against any action taken for each card.
                        <br />
                        <br />
                        Once the votes are all added up, an announcement will be made of that will include any updates to the banned list including the results of the voting process. 
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage