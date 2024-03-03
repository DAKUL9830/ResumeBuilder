import React,{useEffect,useState} from 'react'
import { Button, Checkbox, Form, Input,message,Spin } from 'antd';
import '../resources/authentification.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
  
const navigate=useNavigate();
  
    const onFinish = async(values) => {
        try{
           const response= await axios.post('api/user/login',values)
            message.success('Login successfull')
            localStorage.setItem("resumebuilder",JSON.stringify(response.data))
            navigate('/home')
           }catch(error){
               message.error('Login failed')
           }
      };

      // useEffect=(()=>{
      //   if(localStorage.getItem('resumebuilder')){
      //     navigate('/home')
      //   }
      // })
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className='auth-parent'>
           
        <Form
        
       
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
           <h1>Login</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

         <div className='d-flex align-items-center justify-content-between'>
             <h6>Dont have account?</h6>
             <Link to= '/register'>Click here to register</Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          </div>
      
      </Form>
      </div>
    )
}

export default Login;

