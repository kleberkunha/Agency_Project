import React, { useState, useEffect } from 'react';
import './styled';
import {HeaderArea} from "./styled";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import storage from 'local-storage-fallback';
//import handleClick from './script';

const GlobalStyle = createGlobalStyle`
  body{
    background-Color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
  }
`;

  function getinitialTheme(){
    const savedTheme = storage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : {mode: 'light'};
  }

 


const Header = () => {
  const [theme, setTheme] = useState(getinitialTheme);
  useEffect (() =>{
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme]);

  function handleClick (){
    if(theme.mode === 'light'){
      document.getElementById('toggle').style.marginLeft="30px";
      document.getElementById('toggle').style.backgroundColor="Yellow";
      document.getElementById('toggle').style.borderColor="blue";
      document.getElementById('toggle').style.transition="all 0.3s ease";
    }
    else{
      document.getElementById('toggle').style.marginLeft="1px";
      document.getElementById('toggle').style.backgroundColor="blue";
      document.getElementById('toggle').style.borderColor="black";
    }
  
  }
  return (
    <ThemeProvider theme={theme}>
      <HeaderArea>
        <GlobalStyle/>
          <div className="box-menu container border d-flex">
            <div className="sub-box-menu">
              <ul className="">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/agency" className="nav-link" href="#">Agency</Link>
                </li>
                <li className="nav-item">
                  <Link to="/works" className="nav-link" href="#">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="box-botao" onClick={handleClick}>
              <div className="botao btn" 
                onClick={e => 
                  setTheme(
                    theme.mode === 'dark'
                    ? {mode: 'light'}
                    : {mode: 'dark'}
                  )
                }>
                <div className="mid-ball" id="toggle"></div>
              </div>
            </div>
          </div>
      </HeaderArea>
    </ThemeProvider>
  );
}

export default Header;