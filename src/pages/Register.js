

import React, { useState } from 'react';
import { Button, Form, Input, Typography, message, Spin, Progress } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';
import '../resources/authentification.css';

const { Title, Text } = Typography;

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your username!'),
  password: Yup.string().required('Please input your password!'),
});

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const onPasswordChange = (event) => {
    const password = event.target.value;
    const strength = zxcvbn(password).score;
    setPasswordStrength(strength);
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/user/register', values);
      if (response.status === 200) {
        message.success('Registration successful');
        navigate('/login');
      } else {
        message.error('Registration failed');
      }
    } catch (error) {
      message.error('Registration failed');
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
        <Title level={2}>Register</Title>
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
                <Input.Password
                  name="password"
                  value={values.password}
                  onChange={(event) => {
                    handleChange(event);
                    onPasswordChange(event);
                  }}
                  autoComplete="new-password"
                />
              </Form.Item>

              <Progress
                percent={passwordStrength * 25}
                showInfo={false}
                strokeColor={
                  passwordStrength < 2
                    ? 'red'
                    : passwordStrength < 4
                    ? 'orange'
                    : 'green'
                }
              />

              <Form.Item>
                <Button type="primary" htmlType="submit" block disabled={loading}>
                  {loading ? <Spin /> : 'Register'}
                </Button>
              </Form.Item>

              <Text>
                Already have an account? <Link to="/login">Login</Link>
              </Text>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;

