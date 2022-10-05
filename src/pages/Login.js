import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assests/styles/login.css'

const Login = () => {
    const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1';

    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const submit = data =>{

        axios.post(baseUrl+'/users/login',data)
        .then(res=>{
            localStorage.setItem('token',res.data.data.token);
            localStorage.setItem('userName',res.data.data.user.firstName +" "+ res.data.data.user.lastName)
            navigate('/user');
            alert("Welcome!");
        })
        .catch(error=>{
            if(error.response.status===404){
                alert('Credentials are not valid ');
            };
        })
        
    };
    

    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <h3>Welcome! Enter your email and password to continue.</h3>
                <div className='testData-container'>
                    <h4>Test data</h4>
                    <div>
                        <p><b>User:</b> mason@gmail.com</p>
                        <p><b>Password:</b> mason1234</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(submit)} className='form-container'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' {...register("email")} />

                    <label htmlFor="password">Password</label>
                    <input type="password"  id='password' {...register("password")} />

                    <button className='btn btn-success'>Login</button>
                </form>
    
            </div>
            
        </div>
    );
};

export default Login;