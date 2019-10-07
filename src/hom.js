import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom';
class Home extends Component
{


	render()
	{
		return(
<div style={{
    backgroundImage:' url("https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
    backgroundSize: "100%",
    backgroundRepeat:"no-repeat",color:"white"}}>
<div>
<h1>GROUP INFORMATION:</h1>
<br/>
<h1>AAYUSH HINDWAN</h1><h1>1806082</h1>
<br/>
<h1>YASH JANORIA</h1><h1>1806091</h1>
<br/>
<br/><br/><br/>
<br/>
<br/><br/><br/><br/>
<br/><br/><br/><br/>
<br/><br/><br/>
</div>
</div>
			);

	}
}
export default Home;
