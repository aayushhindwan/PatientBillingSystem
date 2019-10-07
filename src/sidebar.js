import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MyNavbar from './Navbar.js';
import './style.css';
import {Link,NavLink } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './home.js';
import Hom from './hom.js';
import Slip from './slip.js';



class SideBar extends Component
{


	render()
	{
		return(
      <BrowserRouter>
      <div id="viewport">

  <div id="sidebar">
    <header>
      <NavLink href="#">Patient Monetering System</NavLink>
    </header>
    <ul class="nav">
       <li>
          <NavLink to="/hom">
            <i class="zmdi zmdi-home"></i> Home
          </NavLink>
      </li>
      <li>
        <NavLink to='/home'>
          <i class="zmdi zmdi-account"></i>Patient Registration
        </NavLink>
      </li>
      <li>
        <NavLink to='slip'>
          <i class="zmdi zmdi-money"></i> Patient Billings
        </NavLink>
      </li>
      <li>
        <a href="#">
          <i class="zmdi zmdi-widgets"></i> Payment History
        </a>
      </li>
     
      <li>
        <NavLink href="#">
          <i class="zmdi zmdi-settings"></i> Services
        </NavLink>
      </li>
      <li>
        <NavLink href="#">
          <i class="zmdi zmdi-comment-more"></i> Contact
        </NavLink>
      </li>
    </ul>
  </div>
  
  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <NavLink href="#"><i class="zmdi zmdi-notifications text-danger"></i>
            </NavLink>
          </li>
          
          <li><a href="file:///Users/aayushhindwan/Downloads/test.html">Admin Login</a></li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
     <Route path='/hom' component={Hom}/>
     <Route path='/home' component={Home}/>
     <Route path='/slip' component={Slip}/>
    </div>
  </div>
</div>
</BrowserRouter>
			);

	}
}
export default SideBar;
