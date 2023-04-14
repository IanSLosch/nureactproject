import { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import CreateAccountModal from './CreateAccountModal'

const initialValues = { username: '', password: '' }

export const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialValues)
  const { username, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    setFormValues(initialValues)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const isFormValid = Object.values(formValues).every((value) => value !== '')

  const Register = () => {
    console.log('Open Register Modal')
  }

  return (
    <>
      <Row>
        <Col sm={{ offset: 4, size: 4 }} className='text-start mt-5'>
          <h3>
            User Login
          </h3>
        </Col>
      </Row>
      <Row >
        <Col sm={{ offset: 4, size: 4 }}>
          <Form onSubmit={handleSubmit} >
            <FormGroup className='mb-0'>
              <Label for='username' hidden>username</Label>
              <Input
                value={username}
                onChange={handleChange}
                name='username'
                placeholder='Username'
              />
              <Label for='password' hidden>username</Label>
              <Input
                value={password}
                onChange={handleChange}
                name='password'
                placeholder='Password'
              />
            </FormGroup>
            <Row className='btn-group'>
              <Col>
                <CreateAccountModal />
              </Col>
              <Col>
                {<Button type='submit' style={{ width: '150px' }} color='success' disabled={!isFormValid}>Login</Button>}
              </Col>
            </Row>
            <Row className='text-center'>
              <Col className='mt-1'>
                <a href='/' >forgot password?</a>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}