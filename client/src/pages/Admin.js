import React from 'react'
import {Button, Container} from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = (props) => {
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-4 p-2'>Add Type</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2'>Add Brand</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2'>Add Device</Button>
            <CreateType show={true}/>
            <CreateBrand/>
            <CreateDevice/>
        </Container>
    )
}

export default Admin
