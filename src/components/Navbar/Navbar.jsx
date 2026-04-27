import React from 'react'
import './Navbar.css'
import logo from '../../assets/H Logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.png'
import caret from '../../assets/caret.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" className="navbar-logo" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
        <div className="navbar-right">
            <img src={search} alt="Search" className="navbar-search" />
            <p>Children</p>
            <img src={bell} alt="Bell" className="navbar-bell" />
            <div className="navbar-profile">
                <img src={profile} alt="profile" className="navbar-profile-img" />
                <img src={caret} alt="caret" className="navbar-caret" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
