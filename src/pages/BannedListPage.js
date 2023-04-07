import { Container, Row, Col } from 'reactstrap'
import BannedListDisplay from '../features/bannedlist/BannedListDisplay'
import OnClickDisplay from '../features/bannedlist/OnClickDisplay'
import { useState } from 'react'
import cardback from '../app/assets/image/mtg-cardback.jpg'

const BannedListPage = () => {
    const handleImageUpdate = (newSrc) => {
        setImageSrc(newSrc)
    }

const [imageSrc, setImageSrc] = useState(cardback)

    return(
        <Container my='4'>
            <Row>
                <Col sm='4' className='text-left offset-2'>
                    <h3>Banned List</h3>
                    <div>
                        <BannedListDisplay handleImageUpdate={handleImageUpdate} />

                    </div>
                </Col>
                <Col sm='6'className='text-center'>
                    <OnClickDisplay imageSrc={imageSrc} />
                </Col>
            </Row>
        </Container>
    )
}

export default BannedListPage