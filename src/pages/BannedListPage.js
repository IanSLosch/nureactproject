import { Container, Row, Col } from 'reactstrap'
import BannedListDisplay from '../features/bannedlist/BannedListDisplay'
import CardDisplay from '../features/bannedlist/CardDisplay'
import { useState } from 'react'
import cardback from '../app/assets/image/mtg-cardback.jpg'

const BannedListPage = () => {
    const [imageSrc, setImageSrc] = useState(cardback)

    const handleImageUpdate = (newSrc) => {
        setImageSrc(newSrc)
    }

    return(
        <Container my='4' className='mt-5' >
            <Row>
                <Col sm='4' className='text-left offset-2'>
                    <h3>Banned List</h3>
                    <div>
                        <BannedListDisplay handleImageUpdate={handleImageUpdate} />

                    </div>
                </Col>
                <Col sm='6'className='text-center'>
                    <CardDisplay imageSrc={imageSrc} />
                </Col>
            </Row>
        </Container>
    )
}

export default BannedListPage