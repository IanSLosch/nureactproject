import { Card, CardHeader, CardBody, Form, FormGroup, Label, Button, Container, Row, Col, Input } from 'reactstrap'
import VotingCard from '../votingcards/VotingCard'
import { useEffect, useState } from 'react'
import BANNEDLISTOBJECTS from '../../app/shared/BANNEDLISTOBJECTS.js'
import defaultCardImage from '../../app/assets/image/empty-ballot.png'



const Ballot = ({ ballotInfo }) => {
  const { ballotId, heading, description } = ballotInfo

  const [cardState1, setCardState1] = useState({ image: defaultCardImage, displayName: 'Empty', id: 1 });
  const [cardState2, setCardState2] = useState({ image: defaultCardImage, displayName: 'Empty', id: 2 });
  const [cardState3, setCardState3] = useState({ image: defaultCardImage, displayName: 'Empty', id: 3 });

  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (event) => {
    setInputValue(event.target.value)
    // captures search input
  }

  useEffect(() => {
    const results = BANNEDLISTOBJECTS.filter(item =>
      item.displayName.toLowerCase().includes(inputValue.toLowerCase()) &&
      ((ballotId === 'ban' && item.isBanned) || (ballotId === 'unban' && !item.isBanned))
    )
    setSearchResults(results)
  }, [inputValue])

  const addItem = (newItem) => {
    console.log('Initiate addItem()')
    if (cardState1.displayName === 'Empty') {
      console.log('Card 1 is full')
      setCardState1(newItem);
    } else if (cardState2.displayName === 'Empty') {
      console.log('Card 2 is full')
      setCardState2(newItem);
    } else if (cardState3.displayName === 'Empty') {
      console.log('All cards are full')
      setCardState3(newItem);
    }
  }

  const onUnselect = (n) => {
    if (n === 1) {
      setCardState1({
        image: defaultCardImage, displayName: 'Empty', id: 1
      })
      return
    }
    else if (n === 2) {
      setCardState2({
        image: defaultCardImage, displayName: 'Empty', id: 2
      })
      return
    }
    else if (n === 3) {
      setCardState3({
        image: defaultCardImage, displayName: 'Empty', id: 3
      })
      return
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault() // prevent the page from reloading
    const searchResult = BANNEDLISTOBJECTS.find((i) => i.displayName.toLowerCase() === inputValue.toLowerCase())
    if (searchResult &&
      ((ballotId === 'ban' && searchResult.isBanned) || (ballotId === 'unban' && !searchResult.isBanned))) {
      console.log('Found a match:', searchResult)
      addItem(searchResult)
      setInputValue('')
    } else {
      console.log('No match found')
    }
  }

  // const [submit, setSubmit] = useState(false);

  // useEffect(() => {
  // }, [submit])

  return (

    <Row>
      <Col>
        <Card id={ballotId} className='ballot-margin'>
          <CardHeader>
            <h2>{heading}</h2>
            <p>{description}</p>
          </CardHeader>
          <CardBody>
            <Container>
              <Row>
                <Col onClick={() => onUnselect(1)} sm='4'>
                  <VotingCard vCardId={ballotId + '1'} state={cardState1} />
                </Col>
                <Col onClick={() => onUnselect(2)} sm='4'>
                  <VotingCard vCardId={ballotId + '2'} state={cardState2} />
                </Col>
                <Col onClick={() => onUnselect(3)} sm='4'>
                  <VotingCard vCardId={ballotId + '3'} state={cardState3} />
                </Col>
              </Row>
              <Row>
                <Col sm='4' className='offset-4 text-center mt-3' >
                  <Container>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col sm={9}>
                          <Input
                            value={inputValue}
                            placeholder='search'
                            type='text'
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={3}>
                          <Button type='submit' onClick={handleSubmit} color='primary'>
                            Submit
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm='9'>
                          <div style={{ height: '50px', overflowY: 'scroll' }} >
                          {inputValue &&
                            <ul>
                              {searchResults.map(item => (
                                <li key={item.id}>{item.displayName}</li>
                              ))}
                            </ul>
                          }
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </Col>
    </Row>

  )
}

export default Ballot