import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../resources/defaultlayout.css';

const { Header, Content, Footer } = Layout;

const DefaultLayout = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('resumebuilder');
        navigate('/login');
    };

    return (
        <Layout className="layout">
            <Header>
            <div className="logo-container">
              <br/>
                    <h1 className="logo-text">ResumeBuilder (beta)</h1> 
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="large-menu"> 
                    <Menu.Item key="1" onClick={() => navigate('/home')}>Home</Menu.Item>
                    <Menu.Item key="2" onClick={() => navigate('/profile')}>Profile</Menu.Item>
                    <Menu.Item key="3" onClick={handleLogout}>Logout</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Resume Builder ©2024</Footer>
        </Layout>
    );
};

export default DefaultLayout;
