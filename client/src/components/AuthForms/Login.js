import React ,  {useState} from 'react'
import { Form , Button , Container , Row , Col } from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import {Redirect} from "react-router-dom"
import { login } from '../../JS/actions/authActions'
import NavBar from '../NavBar';


function Login({ history }) {
    const isAuth = useSelector((state) => state.authReducer.isAuth)
    const dispatch = useDispatch();
    const [formData , setForm] = useState({
        email : "" ,
        password : "" ,
    });


    const handleChange = (e) => 
    setForm({ ...formData , [e.target.name] : e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault();

        

        // LOGIN USER
        
        dispatch(login(formData));
        
        
        
        history.push("/dashboard");
        
    }
    
    if (isAuth) {
        return <Redirect to="/dashboard" />
    }

    
    
    return (
        <React.Fragment>
            <NavBar/>
        <Container>
                <Row className="p-3">
                    <Col>
                        <Form 
                        onSubmit = {handleSubmit}
                        className="p-3 m-3"
                        style={{boxShadow : "2px 6px 18px 1px rgba(0,0,0,0,3)"}}
                        >
                            <h2 className="text-center">sign in  </h2>
                            <Form.Group controlId="formBasicEmail">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                            onChange={handleChange} 
                            value={formData.email}
                            name="email" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password"
                                placeholder="Enter password"
                                onChange={handleChange} 
                                value={formData.password} 
                                name="password"
                                />

                            </Form.Group>
                            <Button style={{background : "rgba(255, 81, 0, 0.966)"  , color : "white" , border : "none"  , marginTop : "1px" , marginLeft : "0px"}} variant="primary" type="submit"> Submit </Button>
                
                        </Form>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
    )
}

export default Login
