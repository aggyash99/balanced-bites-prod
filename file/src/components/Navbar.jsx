import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Image/logo.png';
function Navbar() {
  return (
      <>
    {
      // HEADER END
    }
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top top-0"  >
  <div className="container-fluid">
  <nav className="d-flex">
    <div>
     <NavLink className="navbar-brand " to="/"><img className="img-fluid img-thumbnail Navbar-image"  src={logo} alt="sorry" style={{}}/></NavLink></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-2">
      <li className="nav-item">
          <NavLink exact activeClassName = "menu_active" className="nav-link active" aria-current="page" to="/"><span className="nav-name">Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/Service"><span className="nav-name">Program</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/Contact"><span className="nav-name">Contact</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/About"><span className="nav-name">About</span></NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
