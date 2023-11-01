import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Nopage} from './pages';
import "./App.css"


export default function App(){
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="*" element={<Nopage />} />
        
      </Routes>
    </BrowserRouter>


  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
