// import './App.css';
// import React from 'react';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import Sample from './pages/templates';
// import Home from './pages/Home';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import 'antd/dist/antd.css';
// import ProtectedRoute from './ProtectedRoute';



// function App() {
  
//   return (
//     <div className="App">
  
//        <BrowserRouter>
//        <Routes>
//          <Route path='/' element ={<Home />}/>
//          <Route path='/home' element ={<ProtectedRoute><Home/></ProtectedRoute>}/>
//          <Route path='/profile' element ={<ProtectedRoute><Profile/></ProtectedRoute>}/>      
//          <Route path='/login' element ={<Login/>}/>
//          <Route path='/sample' element ={<ProtectedRoute><Sample/></ProtectedRoute>}/>
//          <Route path='/register' element ={<Register/>}/>
//        </Routes>
//        </BrowserRouter>
   
      
    
//     </div>
//   );
// }

// export default App;

import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Sample from './pages/templates';
import Home from './pages/Home';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/sample' element={<ProtectedRoute><Sample /></ProtectedRoute>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



