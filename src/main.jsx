import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Background from './components/Background.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Background/>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)
