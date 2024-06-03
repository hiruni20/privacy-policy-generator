import React from 'react'
import './Navbar.css'
import images from '../../constants/images'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <section className="nav-container">
        <Link to={'/'} className="nav-left"  style={{textDecoration:"none"}}>
        <img src={images.logo} alt="" />
        <h5 style={{textDecoration:"none"}}>Privasy Policy-Generator</h5>
        </Link>
        
        <div className='nav-right'>
            
            <div className='nav-buttons'>
                <button >Sign in</button>
                <button>Sign up</button>
            </div>
        
        </div>
    </section>
  )
}

export default Navbar