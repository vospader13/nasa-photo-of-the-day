import React from "react";
import "./App.css";
import Pic from './Components/Pic'
import {Alert} from 'reactstrap';

function App() {
  return (
    <div className="App">

      <Alert>NASA PHOTO OF THE DAY!!!</Alert> 
      <Pic/>
    </div>
  );
}

export default App;
