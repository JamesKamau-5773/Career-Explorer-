import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Header className='header'>
      <h1>CAREER EXPLORER</h1>
      <nav>
        <Link to="/.">Home</Link>{""}
        <Link to="/Search">Search</Link>{""}
        <Link to="/careers">Careers</Link>{""}
        <Link to="/All Careers">All Careers</Link>{""}
        <Link to="/Contacts">Contact</Link>{""}
      </nav>
    </Header>
  )
}

export default Header