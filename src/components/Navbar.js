import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const switchstyle={
     
    marginRight:-13,
    marginLeft:33
  }
  return (
      // 'a' and 'href' ki jagah 'Link' and 'to' use kiya jisse pageb reload na ho.    
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>
          </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        {/* </form> */} 
        {/* neeche -> curly braces lagaye bcoz JS likhni thi,backticks(``) laga liye jisse ye ek string ban gyi ab mai $ and {} use karke koi bhi variable use kar sakta hu isme  {} ke ander poora variable hai jo keh raha hai ki prop ka mode light hai toh dark kardo else light hi rehne do *\.        */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >       
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={switchstyle} text-light>DarkMode</label>
</div>
      </div>
 </div>
  </nav>
    
  )
}
Navbar.propTypes={title: PropTypes.string.isRequired,
aboutText: PropTypes.string}

// Navbar.dafaultProps = {
//     title: "Default title",
// aboutText: "Default Text"

// };
