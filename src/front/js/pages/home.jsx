import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center border p-1">
      <div className="text-center mt-5">
        <h1>MediGeeks</h1>
      </div>
      <div className="row justify-content-center g-2 ">
        <div className="col-4 ">
          <div className="border border-dark p-2" id="esp_11">
            <p>espacio 1</p>
          </div>
        </div>
        <div className="col-4">
          <div className="border border-dark p-2" id="esp_12">
            <p>espacio 2</p>
          </div>
        </div>
        <div className="col-4">
          <div className="border border-dark p-2" id="esp_13">
            <p>espacio 3</p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="border border-dark p-2" id="esp_21">
            <p>espacio 4</p>
          </div>
        </div>
        <div className="col-8 ">
          <div className="border border-dark p-2" id="esp_22">
            <p>espacio 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};
