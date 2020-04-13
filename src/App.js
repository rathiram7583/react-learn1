import React from 'react';
import logo from './logo.svg';
import {Button} from  'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
//import Package from 'semantic-ui-react';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"  as="h3">
        <h1>Hello REACT</h1>
              <Button size="medium" color="green">
               <Icon name="download" />
                  SignIn
               </Button>
        
  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is my first project</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
          Learn React
        </a>

      </header>
    </div>
  );
  

 

}

export default App;

