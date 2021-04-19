import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Image/logo.png';
function Navbar() {
  return (
      <>
    {
      // HEADER END
    }
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top top-0"  style={{boxShadow:"2px 3px 4px 2px grey"}}>
  <div className="container-fluid">
  <nav className="d-flex">
     <NavLink className="navbar-brand" to="/"><img className="img-fluid img-thumbnail"  src={logo} alt="" style={{border:"none",width:"30%",height:"100%"}}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto d-flex gap-3 mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink exact activeClassName = "menu_active" className="nav-link active" aria-current="page" to="/"><span className="nav-name">Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/Service"><span className="nav-name">Service</span></NavLink>
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
