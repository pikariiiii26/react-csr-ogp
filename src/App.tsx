import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Default from './layouts/Default';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Default/>
      </BrowserRouter>
    </>
  )
}

export default App;
