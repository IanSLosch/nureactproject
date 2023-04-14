import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import { LoginForm } from '../features/login/LoginForm'

const LoginPage = () => {

  return (
    <Container style={{ height: "32rem" }} className='text-center'>
      <LoginForm />
    </Container>
  )
}

export default LoginPage