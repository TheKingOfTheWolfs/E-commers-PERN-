import React, { useState, useContext } from 'react'
import {Container, Form, Button, Row} from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const'
import { Context } from '..'
import {observer} from "mobx-react-lite";
import {login, registration} from "../http/userAPI";

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
        if(isLogin) {
            data = await login(email, password)
        }
        else {
            data = await registration(email, password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
     
    }

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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                            className='mt-2'
                            placeholder='Enter password...'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
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
                             onClick={click}
                            >
                              {isLogin ? 'Login' : 'Register'}
                            </Button>
                            </Row>

                        </Form>
                    </Card> 
            </Container>
            
        </div>
    )
})

export default Auth
