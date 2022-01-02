import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from './Components/Background/background';
import { OptionContext, OptionProvider } from './Components/OptionContext';
import { MainApp } from './mainapp';






ReactDOM.render(
  <React.StrictMode>
    <OptionProvider>
     <MainApp></MainApp>
    </OptionProvider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
