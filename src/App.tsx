import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";




export const API_URL = "http://127.0.0.1:8080"
/*

interface shortenedUrl {
  key: string,
  original_url: string
}


function App() {
  const [urlToShorten, setUrlToShorten] = React.useState("");
  const [linkElements, setLinkElements] = React.useState(Array<JSX.Element>);
  const [shortenedLink, setShortenedLink] = React.useState('\n')

  useEffect(() => {

  }, [])
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlToShorten(e.target.value);
  }

  const handleShorten = async () => {
    await axios.post(`${API_URL}/shorten?url=${urlToShorten}`,)
    .then(res => console.log(res.data))
  }

  const handleGetAll = async () => {
    await axios.get(`${API_URL}/getall`)
    .then(res => generateDisplayShortenedLink(res.data.links))
    .then(arr => setLinkElements(arr  ))
  }

  const handleLoginButton = () => {
    window.location.replace(`/login`)
  }

  const handleSignupButton = () => {
    window.location.replace(`/signup`)
  }
  
  return (
    <div className="App">
      <input onChange={handleInput} placeholder='test' />
      <br />
      <button onClick={handleShorten}>Shorten</button>
      <br />
      <a href={shortenedLink}>{shortenedLink}</a>
      <br />
      <button onClick={handleGetAll}>Get All</button>
      <br />
      <button onClick={handleLoginButton}>Login</button>
      <br />
      <button onClick={handleSignupButton}>Create Account</button>
      <br />
      {linkElements}
    </div>
  );
}




interface displayProps {
  key: string,
  original_url: string
}



export default App;
*/
// this component handles the redirect
export const Redirect = () => {
  const location = useLocation()
  console.log(location.pathname)
  useEffect(() => {
    window.location.replace(`${API_URL}/url/${location.pathname.substring(1)}`)
  }, [])
  return (
    <h1>Redirecting ..........</h1>
  )
}