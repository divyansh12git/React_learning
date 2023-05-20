import './App.css';
import NaviBar from './components/Nav_bar';
import TextForm from './components/textform';
import React,{useState} from 'react';
import Alert from './components/alert'
/*import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom"; */

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setalert]=useState('null');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#22384c";
      document.title="TextUtil-dark-mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.title="TextUtil-light-mode"
    }
  }
  return (
    <>
    
    <NaviBar title="Divyansh Gupta" AboutText="About" mode={mode} toggleMode={toggleMode} /> 
    <TextForm mode={mode} toggleMode={toggleMode} />
    
   
    
    
  </>
  );
}

export default App;
