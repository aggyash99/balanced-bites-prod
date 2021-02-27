import React from 'react';
import { NavLink } from 'react-router-dom';
import './Component.css';
const Header = () =>{
return (
<>
<header >
<div className="container-fluid ">
<div className="row">
<div className="col-12 pt-0">
<ul class="nav justify-content-around">
  <li class="nav-item">
    <NavLink class="nav-link " aria-current="page" to="/">LOCATION</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to="/">WhatsApp NO.</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to="/">SOCIAL WEB</NavLink>
  </li>
  <li class="nav-item">
   <NavLink class="nav-link" to="/">E-MAIL</NavLink>
  </li>
</ul>
</div>
        </div>
    </div>
</header>

</>
);


}

export default Header;