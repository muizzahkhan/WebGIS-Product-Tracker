import {Form, Button, Card} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react'

const SignupForm = () => {

  const initialDetails = Object.freeze({username: '', password: ''})
  const [details, setDetails] = useState(initialDetails)

  const changeDetails = (e) => {
    setDetails({...details, [e.target.name]: e.target.value.trim()})
  }

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(details)
  }

  return (
    <Card border='info'>
    <Form>
        <h3 className='logsignHeader'>Signup</h3>
        <Form.Group className='logsignField'>
          <Form.Label><h5>Username</h5></Form.Label>
          <Form.Control name='username' type='text' onChange={changeDetails} />
        </Form.Group>
        
        <Form.Group className='logsignField'>
          <Form.Label><h5>Password</h5></Form.Label>
          <Form.Control name='password' type='text' onChange={changeDetails} />
        </Form.Group>

        <Button className='logsignButton' variant='dark' type='submit' onClick={submitDetails} >Submit</Button>
    </Form> 

    <Card.Body>
      Already own a store? <LinkContainer to='/storeowner/login'><Card.Link>Click here</Card.Link></LinkContainer> to login!
    </Card.Body>

    </Card>
  )
}

export default SignupForm