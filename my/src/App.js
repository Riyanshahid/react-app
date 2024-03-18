import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Message from './components/Message';














function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(mesage,type)=>{
    setAlert({
      msg:mesage,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }


  const togglemode= ()=>{
    if (mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light is on","success");
    }
    else 
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark is on","success");
    }
  }

  const greenmode= ()=>{
    if (mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light is on","success");
    }
    else 
    {
      setMode('dark');
      document.body.style.backgroundColor = 'lightgreen';
      showAlert("Dark is on","success");
    }
  }
  
  return (

    <div>
     
      <Navbar title="JO DIL KARE LIKO" mode={mode} about="About us" togglemode={togglemode} togmode={greenmode} />

      <Message alert={alert} ></Message>
      

      {<div className={"container my-5"}>
      
      
          <Textform showAlert={showAlert}   heading="Enter Text here" mode={mode}/> 
          <About />
      </div> }
     

         
     
      
    </div>
  );
}

export default App;
