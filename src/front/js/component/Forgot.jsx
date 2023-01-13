import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg"

export const Forgot= () => {

	return (

    <div className="login position-absolute top-50 start-50 translate-middle">
        <form>
  <div className="logo d-flex justify-content-center">       
  <img  src={Medigeeks_Logo}/>
  </div> 
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">New Password</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Confirm Password</label>
  </div>

  
  

  <div class="col d-flex justify-content-center">
  <button type="button" class="btn btn-primary btn-block mb-4 justify-content-center">Sign in</button>
  </div>

  
</form>
</div>
	);
};