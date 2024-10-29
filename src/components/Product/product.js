import React from 'react'
import {  Col ,Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './MainProduct.css'

export default function Product(probs) {
  return (
    <Col   >
    <Link to={`/product/${probs.id}`} className='a flex-center' >
      <Card className='divProduct'>
        <Card.Img variant="top" src={probs.srcImg} />
        <Card.Body>
          <Card.Title >{probs.titel}</Card.Title>
          <Card.Text>
                {probs.price}$
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  )
}
