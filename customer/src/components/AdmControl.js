import {Accordion, Form, Button} from 'react-bootstrap'
import { useState } from 'react'

const AdmControl = ({owner,store,mapStore}) => {
  let x = 0 //Change this based on if store is created or no

  var selectStore = {}
  mapStore.forEach(element => {
    if(store.store_id===element.store_id) selectStore = element
  })
  
  if(owner.store_exists===false) x = 0
  else x = 1

  const initialCreate = Object.freeze({storeName: '', quantity: '',price:'',latitude:'',longitude:''})
  const [cStore, setcStore] = useState(initialCreate)

  const onChange = (e) => {
    setcStore({...cStore, [e.target.name]: e.target.value.trim()})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(cStore)

    let quantity = cStore.quantity
    let price_per_unit = cStore.price
    let geom_x = cStore.longitude
    let geom_y = cStore.latitude
    let name = cStore.storeName
    let owner_id = owner.owner_id

    fetch("http://localhost:5000/createStores", {
            method: "post",
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({quantity, price_per_unit, geom_x, geom_y, name, owner_id})
        })
        .then(response => {return response.text()}) 
  }

  const [quantities, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const onChangeQuantity = (e) => { setQuantity(e.target.value.trim()) }
  const onChangePrice = (e) => { setPrice(e.target.value.trim()) }

  const onClickQuantity = (e) => {
    let quantity = quantities

    fetch(`http://localhost:5000/filterQuantity/${store.store_id}`, {
            method: "put",
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({quantity}) 
            
        })
        .then(response => {return response.text()}) 
  }

  const onClickPrice = (e) => {
    let price_per_unit = price

    fetch(`http://localhost:5000/filterPrice/${store.store_id}`, {
            method: "put",
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({price_per_unit}) 
        })
        .then(response => {return response.text()}) 
    }

  return (
    <>
      <Accordion activeKey={[String(x)]} >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Create Store</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Label>Store Name</Form.Label>
              <Form.Group className='field-style'><Form.Control name='storeName' type='text' onChange={onChange} /></Form.Group>

              <Form.Label>Quantity of Products</Form.Label>
              <Form.Group className='field-style'><Form.Control name='quantity' type='text' onChange={onChange} /></Form.Group>

              <Form.Label>Price per Product</Form.Label>
              <Form.Group className='field-style'><Form.Control name='price' type='text' onChange={onChange} /></Form.Group>

              <Form.Label>Coordinates of Store</Form.Label>
              <Form.Group className='field-style'><Form.Control name='latitude' type='text' placeholder='latitude' onChange={onChange} /></Form.Group>
              <Form.Group className='field-style'><Form.Control name='longitude' type='text' placeholder='longitude' onChange={onChange} /></Form.Group>
            
              <Button className='field-style' variant='primary' type='submit' onClick={onSubmit} >Create Store</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>Edit Store</Accordion.Header>
          <Accordion.Body>

            <h5>Name: {x===1 ? store.name : null}</h5>

            Current Quantity of Products: {x===1 ? selectStore.quantity : null}
            <Form>
              <Form.Label>Edit Quantity</Form.Label>
              <Form.Group className='field-style'><Form.Control name='editQuantity' type='text' onChange={onChangeQuantity} /></Form.Group>
            
              <Button className='field-style' variant='primary' type='button' onClick={onClickQuantity}>Save changes</Button>
            </Form>

            Current Price per Product: {x===1 ? selectStore.price_per_unit : null}
            <Form>
              <Form.Label>Edit Price</Form.Label>
              <Form.Group className='field-style'><Form.Control name='editPrice' type='text' onChange={onChangePrice} /></Form.Group>
            
              <Button className='field-style' variant='primary' type='button' onClick={onClickPrice}>Save changes</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default AdmControl