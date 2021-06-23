import React from 'react'
import {Container, Form, Button, Row, Col} from "react-bootstrap"
import BrandBar from '../components/BrandBar'
import TypeBar from '../components/TypeBar'
import DeviceList from '../components/DeviceList'

const Shop = () => {
    return (
        
         <Container>
             <Row className='mt-2'>
                 <Col m={3}>
                   <TypeBar/>
                 </Col>
                 <Col m={9}>
                    <BrandBar/>
                    <DeviceList/>
                 </Col>
             </Row>
         </Container>   
        
    )
}

export default Shop
