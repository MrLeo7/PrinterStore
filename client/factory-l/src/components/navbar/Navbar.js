import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to='/' >FACTORY L</Link>
        
        </h1>
        <div className={classes.navLinks}>
            <p> <Link to='marketplace' >  MARKETPLACE </Link></p>
            <p> <Link to='about' >  ABOUT </Link></p>
            <p> <Link to='materials' >  MATERIALS </Link></p>
            
        </div>
    </nav>
  )
}

export default Navbar
