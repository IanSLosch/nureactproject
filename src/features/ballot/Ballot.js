import { Card, CardHeader, CardBody, Form, Button, Container, Row, Col, Input } from 'reactstrap'
import VotingCard from '../votingcards/VotingCard'
import { useState } from 'react'
import defaultCardImage from '../../app/assets/image/empty-ballot.png'
import { fetchCardData } from '../../app/shared/network/networkManagment'
import { debounce } from '../../utils/debounce'


const Ballot = ({ ballotInfo }) => {

  const { ballotId, heading, description } = ballotInfo

  const [cardState1, setCardState1] = useState({ image: defaultCardImage, displayName: 'Empty', id: 1 })
  const [cardState2, setCardState2] = useState({ image: defaultCardImage, displayName: 'Empty', id: 2 })
  const [cardState3, setCardState3] = useState({ image: defaultCardImage, displayName: 'Empty', id: 3 })

  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue)
    debounce(updateSuggestions, 500)
  }

  const updateSuggestions = () => {
    console.log('it works')
    const results = fetchCardData(inputValue)
    setSearchResults(results)
  }

  const updateCardDisplay = (cardData) => {
    if (cardState1.displayName === 'Empty') {
      console.log('Card 1: ' + inputValue)
      setCardState1(cardData)
    } else if (cardState2.displayName === 'Empty') {
      console.log('Card 2: ' + inputValue)
      setCardState2(cardData)
    } else if (cardState3.displayName === 'Empty') {
      console.log('Card 3: ' + inputValue)
      setCardState3(cardData)
    } else {
      console.log('All cards currently occupied')
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

  const handleResultClick = (item) => {
    updateCardDisplay(item)
    setInputValue('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const cardData = await fetchCardData(inputValue)
    console.log(cardData.legalities)

    if (cardData &&
      (cardData.legalities.commander === 'legal' && ballotId === 'ban') ||
      (cardData.legalities.commander === 'banned' && ballotId === 'unban')) {
      updateCardDisplay(cardData)
      console.log('Added ' + cardData.name + ' to the ban ballot.')
    } else {console.log('Error')}

    setInputValue('')
  }


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
                                  <li className='text-start' key={item.id} onClick={() => handleResultClick(item)}>{item.displayName}</li>
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