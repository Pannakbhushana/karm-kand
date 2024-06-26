import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from './ContextApi/ThemeContext';
import { ParticleContextProvider } from './ContextApi/ParticleContext';
import { KathaContextProvider } from './ContextApi/KathaContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <KathaContextProvider>
  <ParticleContextProvider>
  <ThemeContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ThemeContextProvider>
  </ParticleContextProvider>
  </KathaContextProvider>
);


reportWebVitals();
