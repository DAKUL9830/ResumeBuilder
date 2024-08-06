



// Login.js
import React, { useState } from 'react';
import { Button, Form, Input, Typography, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../resources/authentification.css';
  
const { Title, Text } = Typography;

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your username!'),
  password: Yup.string().required('Please input your password!'),
});

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/user/login', values);
      if (response.status === 200 && response.data) {
        message.success('Login successful');
        localStorage.setItem('resumebuilder', JSON.stringify(response.data));
        navigate('/home');
      } else {
        message.error('Invalid login response');
      }
    } catch (error) {
      message.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="logo-container">
        <h1 className="logo-text">ResumeBuilder (beta)</h1>
      </div>
      <div className="auth-form">
        <Title level={2}>Login</Title>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Username"
                validateStatus={errors.username && touched.username ? 'error' : ''}
                help={errors.username && touched.username ? errors.username : ''}
              >
                <Input name="username" value={values.username} onChange={handleChange} autoComplete="username" />
              </Form.Item>

              <Form.Item
                label="Password"
                validateStatus={errors.password && touched.password ? 'error' : ''}
                help={errors.password && touched.password ? errors.password : ''}
              >
                <Input.Password name="password" value={values.password} onChange={handleChange} autoComplete="current-password" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block disabled={loading}>
                  {loading ? <Spin /> : 'Login'}
                </Button>
              </Form.Item>

              <Text>
                Don't have an account? <Link to="/register">Register</Link>
              </Text>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;

