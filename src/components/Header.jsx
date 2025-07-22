import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Header className='header'>
      <h1>CAREER EXPLORER</h1>
      <nav>
        <Link to="/.">Home</Link>{""}
        <Link to="/Favorites">Favourites</Link>{""}
        <Link to="/Search">Search</Link>{""}
        <Link to="/Contacts">Contacts</Link>{""}
        <Link to="/AddCareer">Add Career</Link>
      </nav>
    </Header>
  )
}

export default Header