import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar({Visible , Logout}) {

  return (
    <div >
      <nav className='navbar navbar-expand-lg bg-dark' id='navbar'>
                 <h4>{!Visible ? <Link to="/">Login </Link>: null}</h4>
                 <h4>{Visible ? <Link className='navlink' to="/about">About </Link>: null }</h4>
                 <h4>{Visible ? <Link className='navlink' to="/Search">Search</Link>: null}</h4>
                 <h4>{Visible ? <Link className='navlink' to="/delete">Delete</Link>: null}</h4>
                 <h4>{Visible ? <button type={"submit"} className='navlink' onClick={Logout} id="navsub">Signout</button>: null}</h4>
        </nav>
    </div>
  )
}

export default Navbar;
