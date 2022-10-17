import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <h1>
         {/* <span className={classes.span} >
        Factory L
        </span> */}
        </h1>
        <div className={classes.navLinks}>
            <p> <a href='#marketplace' > MARKETPLACE</a></p>
            <p> <a href='#home' > ABOUT</a></p>
            <p> <a href='#materials' > MATERIALS</a></p>
        </div>
    </nav>
  )
}

export default Navbar
