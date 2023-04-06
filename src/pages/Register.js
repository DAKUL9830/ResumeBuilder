import React,{useState,useEffect} from 'react'
import { Button, Checkbox, Form, Input, message,Spin } from 'antd';
import '../resources/authentification.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();
    const onFinish = async(values) => {
     setLoading(true)
        try{
          await axios.post('api/user/register',values) 
          setLoading(false)
         message.success('Registration successfull')
          //localStorage.setItem("resumebuilder",JSON.stringify(user.data))
         setLoading(false)
         navigate('/home')
        }catch(error){
          setLoading(false)
            message.error('Registration failed')
        }
       
      };

    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
      
        <div className='auth-parent'>
           {loading&&<Spin/>}
        <Form
        
     
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
           <h1>Register</h1>
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

        <Form.Item
          label="Confirm Password"
          name="cpassword"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        
           <div  className='d-flex align-items-center justify-content-between'>
           <h6>Already have account?</h6>
           <Link to= '/login'>Click here to login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          </div>
       
      </Form>
      </div>
    )
} 

export default Register  
