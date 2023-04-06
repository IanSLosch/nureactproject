import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import image from '../app/assets/image/breachart.jpg'

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h3>HomePage</h3>
                        </CardHeader>
                        <CardBody>
                            <img className='testimg' src={image} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage