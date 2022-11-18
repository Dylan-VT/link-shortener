import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";

interface shortenedUrl {
  shortened_link: string,
  original_link: string
}


function App() {
  const [urlToShorten, setUrlToShorten] = React.useState("");
  const [linkElements, setLinkElements] = React.useState(Array<JSX.Element>);
  const [shortenedLink, setShortenedLink] = React.useState('\n')

  useEffect(() => {

  }, [])
  linkElements.push(DisplayLink({shortened_url: "short", original_url:"long"}))
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlToShorten(e.target.value);
  }

  const handleShorten = async () => {
    await axios.post(`http://localhost:8080/shorten?url=${urlToShorten}`,)
    .then(res => {
      setShortenedLink(res.data)
    })
  }

  const handleGetAll = async () => {
    var newElements = new Array<JSX.Element>
    console.log(0)
    await axios.get('http://localhost:8080/getall')
    .then(response => response.data.links.forEach((link: shortenedUrl) => {
      newElements.push(DisplayLink({shortened_url: link.shortened_link, original_url: link.original_link}))
    }))

    setLinkElements(newElements);
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
      {linkElements}
    </div>
  );
}


// this component handles the redirect
export const Redirect = () => {
  const location = useLocation()
  useEffect(() => {
    window.location.replace(`http://localhost:8080/${location.pathname.substring(1)}`)
  }, [])
  return (
    <h1>Redirecting ..........</h1>
  )
}

interface displayProps {
  shortened_url: string,
  original_url: string
}


const generateLinkDisplays = (links: Array<displayProps>) => {
  const r = links.map((link) => DisplayLink(link))
  return r
}


const DisplayLink = (props: displayProps): JSX.Element => {
  return (
    <p>{ props.shortened_url } -{'>'} { props.original_url }</p>
  )
}

export default App;
