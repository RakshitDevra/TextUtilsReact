import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  // Main chahta hu apni application ki state app.js se control karu 
  
  const [mode,setMode]=useState('light');   // whether dark mode is enabled or not
  const [alert,setAlert] =useState(null);

  const showAlert= (message,type) => {
    setAlert({                   // pehle alert mera null tha ab alert mera ek object hai
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
    

  }
  const togglemode = () => {
    if(mode==='light'){
      setMode('dark');
document.body.style.backgroundColor = 'grey'; 
showAlert("Dark mode has been enabled","success ")
document.title="TextUtils-Dark Mode"
// setInterval(() => {                          // Title ko baar baar blink karana ho toh
//   document.title="TextUtils is Amazing";      // Not a good user Experience.
// }, 2000);
// setInterval(() => {
//   document.title="Install TextUtils now";
// }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success ")
      document.title="TextUtils-Light Mode"
    }
  }
  return (
    <>
    <Router basename="/TextUtils">
  <Navbar title='TextUtils' aboutText="About Textutils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert} />
  <div className="container my-11">
  
  <Routes>   
          <Route path="/about" element={<About mode={mode} />} />     
            
           
        
          <Route  path="/" element={ <Textform  heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/TextUtils" element={ <Textform  heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
           
            
          
        </Routes>
        </div>
       </Router>
    
    
  
</>

  ); 
}

export default App;
