import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';

import {Link,NavLink } from 'react-router-dom'; 
class MyNavbar extends Component
{
  state={class:"block",temp:0};

toggleDivision=()=>
{
  if(this.state.temp==1)
  this.setState({class:"",temp:0});

else
 this.setState({class:"collapse",temp:1});

}

	render()
	{
    var p=this.state.class;
		return(
     <div>



			<Navbar className="navbar" style={{backgroundColor: "black",filter:"alpha(opacity=50)", opacity:"1.0",position:"sticky"}}>
    
 <div className={p}>
<h1 style={{color:"white"}}>Hospital Billing System </h1>

<input type= "text" placeholder="Username"/>
<input type="password" placeholder="Password"/>
  </div>
 
<div >

    
  <NavLink style={{padding:"15px",fontSize:"24px",color:"white"}} to="/hom" ><span>Home</span></NavLink >

  <NavLink style={{padding:"15px",fontSize:"24px",color:"white"}}  to="/Patient-Registration"><span>Patient-Registration</span>
  </NavLink >
  <NavLink style={{padding:"15px",fontSize:"24px",color:"white"}} to="/Slip"><span>Print-Slip</span>
  </NavLink >
  <NavLink style={{padding:"15px",fontSize:"24px",color:"white"}} ><span>Treatment Rates</span>
  </NavLink >
  <NavLink style={{padding:"15px",fontSize:"24px",color:"white"}}><span>Doctors-Available</span>
  </NavLink >
  <NavLink style={{padding:"15px",fontSize:"24px",color:"white"}} ><span>Patient-History</span>
  </NavLink >

  <NavLink style={{padding:"15px",fontSize:"24px",color:"white"}}><span>Profile</span>
  </NavLink >
  

    <button  className="btn btn-lg  active btn-primary" onClick={this.toggleDivision}>LOGIN</button>
</div>
</Navbar>

</div>
			);

	}
}
export default MyNavbar;