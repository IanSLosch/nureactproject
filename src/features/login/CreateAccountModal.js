import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'


const initialValues = {
  username: '',
  password: '',
  email: ''
}

const LoginModal = () => {
  // Modal setup
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  // Form setup
  const [formValues, updateFormValues] = useState(initialValues)
  const { username, password, email } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Welcome ' + username)
    console.log(formValues)
    toggle()
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    updateFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const isFormValid = Object.values(formValues).every((value) => value !== '')


  return (
    <>
      <Button color='danger' onClick={toggle} style={{ width: '150px' }} >
        Register
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>
          Register
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit} >
            <FormGroup className='mb-0'>
              <Label for='username' hidden>username</Label>
              <Input
                value={username}
                onChange={handleChange}
                name='username'
                placeholder='Username'
              />
              <Label for='email' hidden>email</Label>
              <Input
                value={email}
                onChange={handleChange}
                name='email'
                placeholder='Email'
              />
              <Label for='password' hidden>password</Label>
              <Input
                value={password}
                onChange={handleChange}
                name='password'
                placeholder='Password'
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {<Button color='primary' onClick={handleSubmit} disabled={!isFormValid} >
            Create Account
          </Button>}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}



export default LoginModal