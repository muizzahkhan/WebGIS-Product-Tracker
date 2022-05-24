import {Accordion, Form, Button} from 'react-bootstrap'

const AdmControl = () => {

  let x = 0 //Change this based on if store is created or no

  return (
    <>
      <Accordion activeKey={[String(x)]} >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Create Store</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Label>Store Name</Form.Label>
              <Form.Group className='field-style'><Form.Control name='storeName' type='text' /></Form.Group>

              <Form.Label>Quantity of Products</Form.Label>
              <Form.Group className='field-style'><Form.Control name='quantity' type='text'/></Form.Group>

              <Form.Label>Price per Product</Form.Label>
              <Form.Group className='field-style'><Form.Control name='price' type='text'/></Form.Group>

              <Form.Label>Coordinates of Store</Form.Label>
              <Form.Group className='field-style'><Form.Control name='latitude' type='text' placeholder='latitude' /></Form.Group>
              <Form.Group className='field-style'><Form.Control name='longitude' type='text' placeholder='longitude' /></Form.Group>
            
              <Button className='field-style' variant='primary' type='submit'>Create Store</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>Edit Store</Accordion.Header>
          <Accordion.Body>
            Current Quantity of Products: x
            <Form>
              <Form.Label>Edit Quantity</Form.Label>
              <Form.Group className='field-style'><Form.Control name='editQuantity' type='text' /></Form.Group>
            
              <Button className='field-style' variant='primary' type='submit'>Save changes</Button>
            </Form>

            Current Price per Product: $x
            <Form>
              <Form.Label>Edit Price</Form.Label>
              <Form.Group className='field-style'><Form.Control name='editPrice' type='text'/></Form.Group>
            
              <Button className='field-style' variant='primary' type='submit'>Save changes</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

      
      </Accordion>
    </>
  )
}

export default AdmControl