import React from 'react'
import {Container, Form, Button, Row, Col} from "react-bootstrap"
import BrandBar from '../components/BrandBar'
import TypeBar from '../components/TypeBar'

const Shop = () => {
    return (
        
         <Container>
             <Row className='mt-2'>
                 <Col m={3}>
                   <TypeBar/>
                 </Col>
                 <Col m={9}>
                    <BrandBar/>
                 </Col>
             </Row>
         </Container>   
        
    )
}

export default Shop
