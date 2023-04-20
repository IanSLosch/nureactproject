import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
// import image from '../app/assets/image/swayart.jpg'
import Ballot from '../features/ballot/Ballot'
import CountdownTimer from '../components/CountdownTimer/CountdownTimer'

const VotingPage = () => {

  return (
    <Container>
      <Row className='ballot-margin'>
        <Col>
          <h2>Cast your vote</h2>
          <h4>A Magic the Gathering - Commander community-driven banned list variant</h4>
          <h2>Phase 1</h2>
          <CountdownTimer countdownTimestampMs={1682654400000} />
        </Col>
      </Row>
      <Ballot
        ballotInfo={{
          ballotId: 'ban',
          heading: 'Cards to be Banned',
          description: 'Vote for the cards you think should be placed on the banned list. The top three nominees will move on to the next phase.'
        }}
      />
      <Ballot
        ballotInfo={{
          ballotId: 'unban',
          heading: 'Release from the Banned List',
          description: 'Nominate 3 card that you would like to see released from the banned list. The top three vote getters will proceed to the next stage.'
        }}
      />
    </Container>
  )
}

export default VotingPage