import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/calendar.css";
import { Link } from "react-router-dom";

export const Calendar = () => {

	return (
	      <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="year">
			      <div className="mes mes1"><div className="ene"><Link to="/appointment"><button>ENE</button></Link></div></div>
                        <div className="mes mes2"><div className="feb"><Link to="/appointment"><button>FEB</button></Link></div></div>
                        <div className="mes mes3"><div className="mar"><Link to="/appointment"><button>MAR</button></Link></div></div>
                        <div className="mes mes4"><div className="abr"><Link to="/appointment"><button>ABR</button></Link></div></div>
                        <div className="mes mes5"><div className="may"><Link to="/appointment"><button>MAY</button></Link></div></div>
                        <div className="mes mes6"><div className="jun"><Link to="/appointment"><button>JUN</button></Link></div></div>
                        <div className="mes mes7"><div className="jul"><Link to="/appointment"><button>JUL</button></Link></div></div>
                        <div className="mes mes8"><div className="ago"><Link to="/appointment"><button>AGO</button></Link></div></div>
                        <div className="mes mes9"><div className="sep"><Link to="/appointment"><button>SEP</button></Link></div></div>
                        <div className="mes mes10"><div className="oct"><Link to="/appointment"><button>OCT</button></Link></div></div>
                        <div className="mes mes11"><div className="nov"><Link to="/appointment"><button>NOV</button></Link></div></div>
                        <div className="mes mes12"><div className="dic"><Link to="/appointment"><button>DIC</button></Link></div></div>
		    </div>
            </div>
	);
};