import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'


const BannedListPage = () => {
    <Container my='4'>
        <Row>
            <Col sm='6'>
                <h3>Banned List</h3>
                <div className='d-flex justify-content-center'>
                    <ul>
                        <li>Insert Banned Component</li>
                    </ul>
                </div>
            </Col>
            <Col sm='6'className='d-flex justify-content-center'>
                <div className='list-display d-none d-sm-block'>
                    <img className='img-fluid cardMask' id='cardDisplay' src="/image/mtg-cardback.jpg" alt='card' />
                </div>
            </Col>
        </Row>
    </Container>
}

export default BannedListPage