import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Image/logo.png';
function Navbar() {
  return (
      <>
      <div className = "container-fluid sticky-lg-top top-0">
          <div className = "row">
              <div className = "col-lg-12 mx-auto">
    {
      // HEADER END
    }
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid pt-0">
    
   <nav className="d-flex">
  <NavLink className="navbar-brand" to="/"><img  src={logo}alt="" style={{maxWidth:"40%"}}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName = "menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/Service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/About">About</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>

</div>
</div> 
</>
  );
}

export default Navbar;
