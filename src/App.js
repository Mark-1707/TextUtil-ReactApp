import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light');  //Whether dark mode in on or off

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us"/>
      <div className="container">
        <TextForm heading="Enter the text to analyze"/>
      </div>

      <div className="container">
        <About/>
      </div>

    </>
  );
}

export default App;
