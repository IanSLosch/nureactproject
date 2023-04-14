import { Card, CardHeader, CardBody, Col } from 'reactstrap'
import defaultCardImage from '../../app/assets/image/empty-ballot.png'

const VotingCard = ({ vCardId, listItem }) => {
    console.log(listItem)
    let item = {
        image: defaultCardImage,
    }

    // if(listItem) {
    //     item = BANNEDLISTOBJECTS.find(i => i.displayName === listItem);
    // } else {
    //     item = null
    // }

    const onUnselect = (cardIndex) => {

    }

    return (
        <Col onClick={onUnselect} >
            <Card className='text-center' id={vCardId}>
                <CardHeader >
                    <img src={item.image} alt={item.id} style={{maxHeight: "200px", maxwidth: "300"}} />
                </CardHeader>
                <CardBody>
                    <h4>{item.displayName}</h4>
                </CardBody>
            </Card>
        </Col>       
    )
}

export default VotingCard