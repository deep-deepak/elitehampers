import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ThankYouPage from './component/ThankYouPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
