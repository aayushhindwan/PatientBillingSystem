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
<form style={{
    backgroundImage:' url("https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg?cs=srgb&dl=anatomy-biology-bone-2678059.jpg&fm=jpg")',
    backgroundSize: "100%",
    backgroundRepeat:"no-repeat"}}>
<h1 style={{color:"white"}}>Patient Registeration</h1>
  <div class="form-row">
    <div class="form-group col-md-6 " style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
      <label for="inputEmail4" style={{color:"white"}}>Full Name</label>
      <input type="text" class="form-control transparent-input" id="inputEmail4" placeholder="Full Name"/>
    </div>
    <div class="form-group col-md-6" style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
      <label for="inputPassword4" style={{color:"white"}}>Date </label>
      <input type="date" class="form-control transparent-input" id="inputPassword4" />
    </div>
    <div class="form-group col-md-6" style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
      <label for="inputPassword4" style={{color:"white"}}>Disease</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="suffering from" />
    </div>
  </div>
  <div class="form-group" style={{filter:"alpha(opacity=50)", opacity:"0.35"}} >
    <label for="inputAddress" style={{color:"white"}}>Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group" style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
    <label for="inputAddress2" style={{color:"white"}}>Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6" style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
      <label for="inputCity" style={{color:"white"}}>City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4" style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
      <label for="inputState" style={{color:"white"}}>State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2" style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
      <label for="inputZip" style={{color:"white"}}>Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group" style={{filter:"alpha(opacity=50)", opacity:"0.35"}}>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck" style={{color:"white"}}>
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">SUBMIT</button>
  <br/>
  <br/>
  <br/>
  <br/><br/><br/><br/>
</form>
			);

	}
}
export default Home;
