
import { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
const toggleMode =()=>{
  console.log("dark mode was toggled");
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = 'grey';

  }else{
    setmode('light')
    document.body.style.backgroundColor = 'white';

  }
}

  const [mode, setmode] = useState('light')

  


  return (
    <>
    <Router>
       
<Navbar  title= "TextUtils112"  mode={mode} about = "About here" toggleMode={toggleMode}/>
<Alert alert= "This is Alret"/>
<div className="container">
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm  heading="Enter the text to anlayse below" mode={mode}/> 
          </Route>
          
        </Switch>
{/* <TextForm  heading="Enter the text to anlayse below" mode={mode}/> */}

</div>
</Router>
    </>
  );
}

export default App;
