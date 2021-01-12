import React , {useState} from 'react'
import NavBar from '../NavBar'
import {register} from "../../JS/actions/authActions"
import { useDispatch } from 'react-redux'
import {Link } from "react-router-dom"
import "./RegisterLogin.css"


const Register = ({history}) => {

    const dispatch = useDispatch()

    const [formData , setForm] = useState({
        name : "" ,
        lasName : "" ,
        email : "" ,
        password : "" ,
        password2 : "" ,
    });

    const handleChange = (e) => 
    setForm({ ...formData , [e.target.name] : e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.password !== formData.password2) {
            alert("passwords do not match")
            
        } else {
            console.log("success")
        }

        // register USER
        dispatch(register(formData));
        history.push("/dashboard");
        
    }

    
    return (
        <React.Fragment>
            <NavBar/>
        <div className="register-container">
        <form onSubmit = {handleSubmit} className='container ml-auto' >
        <h1>Welcome to Our App </h1>

        <div className='row mt-2 justify-content-md-center'>
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder='name'
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className='row mt-2 justify-content-md-center'>
          <input
            className='form-control'
            type='text'
            name='lastName'
            placeholder='lastName'
            onChange={handleChange}
            value={formData.lastName}
            
          />
        </div>
        <div className='row mt-2 justify-content-md-center'>
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
            value={formData.email}
            
          />
        </div>
        <div className='row mt-2 justify-content-md-center'>
          <input
            className='form-control'
            type='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
            value={formData.password}
            
          />
        </div>

        <div className='row mt-2 justify-content-md-center'>
          <input
            className='form-control'
            type='password'
            name='password2'
            placeholder='Confirm password...'
            onChange={handleChange}
            value={formData.password2}
            
          />
        </div>
        <div className='register-block  row mt-2 justify-content-md-center'>
          <button className='btn-Register  btn btn-outline-primary' >
            Register
          </button>
          <p className='my-1'>
              Already have an account ? <Link  style={{color : "rgba(255, 81, 0, 0.966)" , textDecoration : "inherit"}} to ='/login'>SignIn </Link>
            </p>
        </div>
      </form>
      </div>
      </React.Fragment>
    )
}

export default Register
