import './App.css';
import React from 'react';
import Resume from './components/Resume';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Profile from './components/Profile';
import { useStyles } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Sample from './pages/templates';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import 'antd/dist/antd.css';


const stylesheet={
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
}

function App() {
  //const styles=useStyles(stylesheet)
  return (
    <div className="App">
      {/* <AppBar>
        <Toolbar>
        <Typography variant="h6" >Resume Builder</Typography>
        </Toolbar>
      </AppBar> */}
      {/* <Resume/> */}
       <BrowserRouter>
       <Routes>
         <Route path='/' element ={<Home/>}/>
         <Route path='/home' element ={<Home/>}/>
         <Route path='/profile' element ={<Profile/>}/>      
         <Route path='/login' element ={<Login/>}/>
         <Route path='/sample/:id' element ={<Sample/>}/>
         <Route path='/register' element ={<Register/>}/>
       </Routes>
       </BrowserRouter>
   
      
    
    </div>
  );
}

export default App;

// export function ProtectedRoute(props){
//   if(localStorage.getItem('resumebuilder')){
//     return props.children;
//   }else{
//     return <Navigate to ='/login'/>
//   }

  
// }
