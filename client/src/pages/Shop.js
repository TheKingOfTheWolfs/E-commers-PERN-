import React, { useContext, useEffect } from 'react'
import {Container, Form, Button, Row, Col} from "react-bootstrap"
import BrandBar from '../components/BrandBar'
import TypeBar from '../components/TypeBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI'

const Shop = observer(() => {
    const {device} = useContext(Context)

    //fetch the data from the database to display in SHOP
    useEffect(() => {
         fetchTypes().then(data => device.setTypes(data))
         fetchBrands().then(data => device.setBrands(data))
         fetchDevices().then(data => device.setDevices(data.rows))
    }, [])
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
})

export default Shop
