import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/sidebar.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg"




export const Sidebar_doc = () => {

	return (
        <>
        <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <strong>Menu Doc</strong>
      </button>
      
      <div class="offcanvas offcanvas-start side" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel"><img src={Medigeeks_Logo}/></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="d-flex justify-content-center">
            <Link to="/calendar">
                <button type="button" class="btn btn-danger button">Calendar</button>
            </Link>
          </div>
          <div class="d-flex justify-content-center">
            <Link to="/appointment">
                <button type="button" class="btn btn-danger button">Appointment</button>
            </Link>
          </div>
        </div>
      </div>
      </>
	);
};