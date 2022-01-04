import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {
    return (
        <div class="nav-container">
        <div>
            <h1>James Gore - Software Engineer</h1>
        </div>
        <div class="nav-link-container">
            <Link to="#Home" class="nav-link">Home</Link>
            <Link to="#About"class="nav-link">About</Link>
            <Link to="#Technologies"class="nav-link">Technologies</Link>
            <Link to="#Experience"class="nav-link">Experience</Link>
            <Link to="#Portfolio"class="nav-link">Portfolio</Link>
            <Link to="#Contact"class="nav-link">Contact</Link>
        </div>
        </div>
    )
}

export default NavBar
