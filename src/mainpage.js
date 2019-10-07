
import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import SideBar from './sidebar.js';
import Home from './home.js';
import Hom from './hom.js';
import Slip from './slip.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom'; 
class Main extends Component
{

render()
{

return(
<div>
<BrowserRouter>

<SideBar/>
<Route path='/home' Component={Home}/>
<Route path='/hom' Component={Hom}/>
<Route path='/slip' Component={Slip}/>
</BrowserRouter>
        
</div>




	);

}


}

export default Main;