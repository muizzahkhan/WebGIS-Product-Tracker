import {Form, Button, Card} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const LoginForm = () => {

  const initialDetails = Object.freeze({username: '', password: ''})
  const [details, setDetails] = useState(initialDetails)

  const [correct, setCorrect] = useState(false)

  const changeDetails = (e) => {
    setDetails({...details, [e.target.name]: e.target.value.trim()})
  }

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(details)
    setCorrect(true)
  }

  return (
    <Card border='info'>
    <Form>
        <h3 className='logsignHeader'>Login</h3>
        <Form.Group className='logsignField'>
          <Form.Label><h5>Username</h5></Form.Label>
          <Form.Control name='username' type='text' onChange={changeDetails} />
        </Form.Group>
        
        <Form.Group className='logsignField'>
          <Form.Label><h5>Password</h5></Form.Label>
          <Form.Control name='password' type='text' onChange={changeDetails} />
        </Form.Group>

        <Button className='logsignButton' variant='dark' type='submit' onClick={submitDetails} >Submit</Button>
        {correct===true ? <Navigate to='/Admin/'/> : null}
    </Form>

    <Card.Body>
      Not a Store Owner? <LinkContainer to='/storeowner/signup'><Card.Link>Click here</Card.Link></LinkContainer> to become one!
    </Card.Body>

    </Card>
  )
}

export default LoginForm