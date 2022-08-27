import React from 'react';
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import Orders from './Orders';

function Navbar(){
    
    let navigate = useNavigate();

return <div className="navigation">
   <div className="container">
   <div className="row">
    <div className="col-md-3 col-xs-2">
        <h4>SHOPAHOLIC.</h4>
    </div>
    <div className='col-md-6 col-xs-6 menu'>
        <ul>
            <li onClick={() => navigate("/")}>Shop</li>
            <li>About</li>
            <li onClick={() => navigate("/Orders")}>Orders</li>
            <li onClick={() => navigate("/Users")}>Users</li>
        </ul>
    </div>
    <div className="col-md-3 col-xs-4 menu-1">
        <ul>
            <li>Search</li>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
        </ul>
    </div>
   </div>
   </div>
   <hr></hr>
</div>
}

export default Navbar;