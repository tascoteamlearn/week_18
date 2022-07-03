import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

//Actions
import { login, cleanState } from '../Redux/Actions/userActions'

//Bootstrap
import {Form, Button, Spinner} from 'react-bootstrap'


export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state=> state.user)

    useEffect(()=>{
        if (user.error) {
            alert(user.error)
            dispatch(cleanState())
            setUserData({
                ...userData,
                password:"",
            })
        } 
        if (user.success) {
            navigate('/')
        }
    },[user.loading])

    const [userData, setUserData] = useState({
        email:"",
        password: ""
    })

    const handleChange = (e) =>{
        const {value, name} = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = () =>{
       dispatch(login(userData))
    }

    return (
        <div className='container'>
            <h1 className='text-center'>
                Login
            </h1>
            <div className='d-flex justify-content-center mt-5'>
                <Form className='w-25'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name='email' value={userData.email || ""} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={userData.password || ""} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" className="flex justify-content-center align-items-center" onClick={handleSubmit} style={{width:"100px"}} >
                        {
                            user.loading?
                            <Spinner animation="border" role="status" variant='light' size="sm" >
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            : "Submit"
                        }
                    </Button>
                </Form>
            </div>
        </div>
    )
}
