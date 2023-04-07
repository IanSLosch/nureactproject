import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import image from '../app/assets/image/ionaart.jpg'

const LoginPage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h3>LoginPage</h3>
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

export default LoginPage