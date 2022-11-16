import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [post, setPost] = React.useState(null);
  useEffect(() => {
    axios.get('http://127.0.0.1:8080/ping')
    .then((response) => {
      console.log(response.data);
      setPost(response.data);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code><Display text={post} /></code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

interface displayProps {
  text: String | null
}


const Display = (props: displayProps) => {
  return (
    <p>{ props.text }</p>
  )
}

export default App;
