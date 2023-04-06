import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import image from '../app/assets/image/docksideart.jpg'

const AboutPage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h3>AboutPage</h3>
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

export default AboutPage