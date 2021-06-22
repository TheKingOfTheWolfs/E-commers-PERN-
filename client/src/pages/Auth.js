import React from 'react'
import {Container, Form, Button, Row} from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import { NavLink, useLocation, userLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'

function auth() {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <div>
            <Container 
            className='d-flex justify-content-center alighn-items-center'
            style={{height: window.innerHeight - 54}}
            >
                    <Card style={{width: 600}} className='p-5'>
                        <h2 className='m-auto'>{isLogin ? 'Login' : 'Register'}</h2>
                        <Form className='d-flex flex-column'>
                            <Form.Control
                            className='mt-2'
                            placeholder='Enter email...'
                            />
                            <Form.Control
                            className='mt-2'
                            placeholder='Enter password...'
                            />
                            <Row className='d-flex justify-content-between mt-3 pl-3'>
                                {isLogin ?
                                <div>Dont have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                                </div>
                                :
                                <div>Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                                </div>
                               }
                            <Button 
                             variant={'outline-success'}
                             className='align-self-end' 
                            >
                              {isLogin ? 'Login' : 'Register'}
                            </Button>
                            </Row>

                        </Form>
                    </Card> 
            </Container>
            
        </div>
    )
}

export default auth
