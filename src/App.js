
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import React from 'react';
import 
{Routes ,
   Route
  } from "react-router-dom"


function App() {
  const [mode, setMode] =  useState('light')   //whether dark mode is enabled or not
//  const [mode, setNewMode] = useState('light')
  const [alert, setAlert] =useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now'
      // },1500)
    }
    else if(mode ==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} aboutText="About TextUtils"/>
    
    <div className="container my-3">
    <Alert alert={alert}/>
    <Routes>
    
      <Route path='/' 
      element= {<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Charecter Counter, Remove extra spaces" mode={mode}/>}>
      </Route>
   <Route path='/about' element={  <About mode={mode}/> }></Route>
   
    {/* <About/> */}
    
    </Routes>
    </div>
    </>
  );
}

export default App;
