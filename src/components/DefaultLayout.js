import React from 'react';
import {Button,Menu,Dropdown,Space} from 'antd';
import {useNavigate,Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../resources/defaultlayout.css';
//import Button from '@mui/material/Button'


function DefaultLayout(props) {
    const user=JSON.parse(localStorage.getItem('resumebuilder'));
    const navigate=useNavigate();



    const menu = (
        
          <Menu>
          <Menu.Item>
          <Link to='/home'>
            <a target="_blank" rel="noopener noreferrer" >
            Home
            </a>
            </Link>
            </Menu.Item>
            <Menu.Item>
            <Link to='/profile'>
            <a target="_blank" rel="noopener noreferrer" >
            Profile
            </a>
            </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/login'>
            <a target="_blank" rel="noopener noreferrer" >
            Log out
            </a>
            </Link>
            </Menu.Item>
          </Menu>


       
    );

    return (
        <div className='layout'>
             {/* <AppBar>
        <Toolbar>
        <Typography variant="h6" >Resume Builder</Typography>
        </Toolbar>
      </AppBar> */}
      <div>
        <AppBar>
        <Toolbar>
        <Typography variant="h6" >ResGENER</Typography>
        {/* <Button className ="layout-button">Start</Button> */}
       
        <Dropdown
        overlay={menu}
        placement='bottomRight' 
        
       
      >
        <Button>Start</Button>
      </Dropdown>
     
        
       </Toolbar>
      </AppBar> 
      </div>
      <div className='content'>
          {props.children}
        </div> 
        </div>
    )
}

export default DefaultLayout
