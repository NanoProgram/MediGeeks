import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg"

export const Login= () => {

	return (

    <div className="login position-absolute top-50 start-50 translate-middle">
        <form>
  <div className="logo d-flex justify-content-center">       
  <img  src={Medigeeks_Logo}/>
  </div> 
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
   
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
   
    <Link to="/Forgot"><a href="#!">Forgot password?</a></Link>
    </div>
  </div>

  <div class="col d-flex justify-content-center">
  <Link to="/"><button type="button" class="btn btn-primary btn-block mb-4 justify-content-center">Sign in</button></Link>
  </div>

  <div class="text-center">
    <p>Not a member? <Link to="/register"><a href="#!">Register</a></Link></p>
    <p>or sign up with:</p>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google fs-1"></i>
    </button>

  

  
  </div>
</form>
</div>
	);
};