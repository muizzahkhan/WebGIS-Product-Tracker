import { useState, useEffect } from 'react'
import {Accordion, Form, Button} from 'react-bootstrap'

const CustControl = ({cb, cbB, cbS, data}) => {   //Replace data with actual data

  const [buffer, setBuffer] = useState('')
  const changeBuffer = (e) => {setBuffer(e.target.value.trim())}
  const submitBuffer = (e) => {e.preventDefault(); cbB(buffer)}
  const clearBuffer = (e) => {e.preventDefault(); cbB('')}

  const initialQ = Object.freeze({greaterThan: '', lessThan: ''})
  const initialP = Object.freeze({greaterThan: '', lessThan: ''})

  const [quantity, setQuantity] = useState(initialQ)
  const [price, setPrice] = useState(initialP)

  const handleChangeQ = (e) => {
    setQuantity({...quantity, [e.target.name]: e.target.value.trim()})
  }
  const handleChangeP = (e) => {
    setPrice({...price, [e.target.name]: e.target.value.trim()})
  }

  const handleSubmitQ = (e) => {        //Compare with actual quantity
    e.preventDefault()
    console.log(quantity)

    let filterDataQ = data.filter(pts => {
      return pts.stallCount>quantity.greaterThan && pts.stallCount<quantity.lessThan
    })

    cb(filterDataQ)
  }
  const handleSubmitP = (e) => {      //Compare with actual price
    e.preventDefault()
    console.log(price)
    
    let filterDataP = data.filter(pts => {
      return pts.stallCount>price.greaterThan && pts.stallCount<price.lessThan
    })

    cb(filterDataP)
  }

  const changeShow = (e) => {e.preventDefault(); cbS()}

  return (
    <>

    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Show Buffer</Accordion.Header>
        <Accordion.Body>
        <Form>
          <Form.Group className='field-style'><Form.Control name='bufferSize' type='text' placeholder='Enter Buffer size' onChange={changeBuffer} /></Form.Group>

          <Button className='field-style' variant='primary' type='submit' onClick={submitBuffer}>Submit</Button>
          <Button className='field-style' variant='primary' type='submit' onClick={clearBuffer}>Clear</Button>
        </Form>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='1'>
        <Accordion.Header>Filter Shops</Accordion.Header>
        <Accordion.Body>
        <Form>
          <Form.Label><h5>Quantity</h5></Form.Label>
          <Form.Group className='field-style'><Form.Control name='greaterThan' type='text' placeholder='Greater than' onChange={handleChangeQ} /></Form.Group>
          <Form.Group className='field-style'><Form.Control name='lessThan' type='text' placeholder='Less than' onChange={handleChangeQ} /></Form.Group>
        
          <Button className='field-style' variant='primary' type='submit' onClick={handleSubmitQ}>Submit</Button>
        </Form>

        <Form>
          <Form.Label><h5>Price</h5></Form.Label>
          <Form.Group className='field-style'><Form.Control name='greaterThan' type='text' placeholder='Greater than' onChange={handleChangeP} /></Form.Group>
          <Form.Group className='field-style'><Form.Control name='lessThan' type='text' placeholder='Less than' onChange={handleChangeP} /></Form.Group>

          <Button className='field-style' variant='primary' type='submit' onClick={handleSubmitP}>Submit</Button>
        </Form> 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='2'>
        <Accordion.Header>Show Graph</Accordion.Header>
        <Accordion.Body>
          <Button className='field-style' variant='primary' type='button' onClick={changeShow}>Show/Hide</Button>
        </Accordion.Body>

      </Accordion.Item>
    
    </Accordion>

    </>
  )
}

export default CustControl