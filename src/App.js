import './App.css';
//import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
//import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
/*
const GlobalStyle = createGlobalStyle`
  body{
    background-Color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
  }
`;
*/
function App() {

  //const [theme, setTheme] = useState({ mode: 'light'})
  return (
      <BrowserRouter>
        <Template>
        
          <Header/>

          <Routes/>

          <Footer/>
        </Template>
      </BrowserRouter>
  );
}

export default App;
