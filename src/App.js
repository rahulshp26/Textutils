import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import{
  BrowserRouter as Router,
  // Routes,
  Route,
  Link,
  Routes
}from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//whether darkmode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled","success");
     // document.title='Textutils-Dark Mode';
    //  setInterval(()=>{
       // document.title='Textutils is amazing';
      //},2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success")
     // document.title='Textutils-Light Mode';
    }
  }
  return (
  <>
{/*<Navbar title="Textutils" aboutText="About Us"/>*/}
{/*<Navbar/>*/}
<Router>
<Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/"
            element={<TextForm showAlert={showAlert}heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode} />} />
          
  </Routes>
</div>
</Router>
  </>
  );
}

export default App;
