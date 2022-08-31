import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Login, UserInfo } from "./Components";



function App() {
 
  return (
    <React.StrictMode>
      <SnackbarProvider maxSnack={1} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
          <Routes>
            <Route path='/userInfo/:id/:type' element={<UserInfo />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </React.StrictMode>
  );
}

export default App;
