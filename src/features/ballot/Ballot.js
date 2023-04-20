import { Card, CardHeader, CardBody, FormGroup, Label, Button, Container, Row, Col, Input } from 'reactstrap'
import VotingCard from '../votingcards/VotingCard'
import { useEffect, useState } from 'react'
import BANNEDLISTOBJECTS from '../../app/shared/BANNEDLISTOBJECTS.js'



const Ballot = ({ ballotInfo }) => {
    const { ballotId, heading, description } = ballotInfo

    const [cardState1, setCardState1] = useState({});
    const [cardState2, setCardState2] = useState({});
    const [cardState3, setCardState3] = useState({});

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
        if (Object.keys(cardState1).length === 0) {
          setCardState1(newItem);
        } else if (Object.keys(cardState2).length === 0) {
          setCardState2(newItem);
        } else if (Object.keys(cardState3).length === 0) {
          setCardState3(newItem);
        }
      }
      

    // const removeItem = (itemToRemove) => {
    //     const updatedItems = cardState.filter(item => item !== itemToRemove);
    //     setCardState(updatedItems);
    // };

    const handleSubmit = (event) => {
        event.preventDefault() // prevent the page from reloading
        const searchResult = BANNEDLISTOBJECTS.find((i) => i.displayName === event.target.value)
        console.log(searchResult)
        addItem(searchResult)
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
                                <VotingCard vCardId={ballotId + '1'} state={cardState1} />
                                <VotingCard vCardId={ballotId + '2'} state={cardState1} />
                                <VotingCard vCardId={ballotId + '3'} state={cardState1} />
                            </Row>
                            <Row>
                                <Col sm='4' className='offset-4 text-center mt-3' >
                                    <form>
                                        <input
                                            value={inputValue}
                                            placeholder='search'
                                            type='text'
                                            onChange={handleChange}
                                        />
                                        {inputValue &&
                                        <ul>
                                            {searchResults.map(item => (
                                                <li key={item.id}>{item.displayName}</li>
                                            ))}
                                        </ul>
                                        }
                                        <Button type='submit' onClick={handleSubmit} color='primary'>
                                            Submit
                                        </Button>
                                    </form>
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