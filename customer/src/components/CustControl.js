import {Accordion, Form, Button} from 'react-bootstrap'

const CustControl = () => {
  return (
    <>

    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Show Buffer</Accordion.Header>
        <Accordion.Body>
        <Form>
          <Form.Group><Form.Control type='text' placeholder='Enter Buffer size' /></Form.Group>

          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
        </Accordion.Body>

      </Accordion.Item>

      <Accordion.Item eventKey='1'>
        <Accordion.Header>Filter Shops</Accordion.Header>
        <Accordion.Body>
        <Form>
          <Form.Label>Quantity</Form.Label>
          <Form.Group><Form.Control type='text' placeholder='Greater than' /></Form.Group>
          <Form.Group><Form.Control type='text' placeholder='Less than' /></Form.Group>

          <Form.Label>Price</Form.Label>
          <Form.Group><Form.Control type='text' placeholder='Greater than' /></Form.Group>
          <Form.Group><Form.Control type='text' placeholder='Less than' /></Form.Group>

          <Button variant='primary' type='submit'>Submit</Button>
        </Form> 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='2'>
        <Accordion.Header>Show Graphs</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. 
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>

    </>
  )
}

export default CustControl