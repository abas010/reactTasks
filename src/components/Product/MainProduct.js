import React from 'react'
import {useParams} from 'react-router-dom'
import { productData } from "../Data/ProductData";
import { Container, Row, Col,Button } from "react-bootstrap";
import './MainProduct.css'

export default function MainProduct() {
    let param = useParams()

    let MainProductData = productData.find((product) => product.id == param.productID)

    console.log(MainProductData);
    
  return (
    <Container>
        <Row>
            <Col xs={12} md={4} sm={6} className='flex-center'>
            <img src={MainProductData.srcImg} alt="" className='size-img'/>
            </Col>
            <Col xs={12} md={8} sm={6} >
               <h2 className='white'>{MainProductData.titel}</h2>
               <p className='white'>{MainProductData.discription}</p>
               <h3  className='mt-5 white'>${MainProductData.price}</h3>
               <div > 
               <Button className='mt-5' >Ad to Card</Button>
               </div>
            </Col>
        </Row>
    </Container>
  )
}
