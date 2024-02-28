import React from 'react';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';

function App() {
  return ( 
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginForm/>} />
    <Route path='/Register' element={<RegisterForm/>} />
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
