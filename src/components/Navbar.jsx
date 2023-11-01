import { AddressBook, House, MapPin, User } from '@phosphor-icons/react'
import React from 'react'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul className="topNav">
        <li className="navItem active"><button className='navProperty flex shrink-0'><House size={24} /><p>Home</p></button></li>
        <li className="navItem"><div className='navProperty flex shrink-0'><User size={24} /><p>About</p></div></li>
        <li className="navItem"><div className='navProperty flex shrink-0'><AddressBook size={24} /><p>Contact</p></div></li>
        <li className="navItem"><div className='navProperty flex shrink-0'><MapPin size={24} /><p>Location</p></div></li>
        <li className="navItem signup_nav">SIGNUP</li>
      </ul>
    </div>
  )
}

export default Navbar