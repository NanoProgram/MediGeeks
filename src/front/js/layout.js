import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home.jsx";
import { Cita } from "./pages/cita_1.jsx";
import { Cita3 } from "./pages/cita_3.jsx";
import { Appointment } from "./pages/Appointment.jsx";
import { Calendardoc } from "./pages/Calendardoc.jsx";
import { Login } from "./component/login.jsx";
import { Singup } from "./component/singup.jsx";
import { Forgot } from "./component/Forgot.jsx";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer.jsx";
import { Sidebar_doc } from "./component/Sidebar Doctors.jsx";
import { AdmissionDoctor } from "./component/singupdoc.jsx";
import { Recover } from "./component/recoverPassword.jsx";
import { Principal} from "./component/principal.jsx";
import { Prueba } from "./pages/pruebas.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Sidebar_doc />
          <Routes>          
          <Route element={<Principal />} path="/" />       
          <Route element={<Recover/>} path="/recoverPassword" />
          <Route element={<AdmissionDoctor/>} path="/singupdoc" />
            <Route element={<Singup />} path="/signup" />
            <Route element={<Prueba />} path="/prueba" />
            <Route element={<Singup />} path="/singup" />
            <Route element={<Home />} path="/home" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Cita />} path="/appointment" />          
            <Route element={<Cita3 />} path="/appointment-confirmed" />
            <Route element={<Appointment />} path="/doctor" />
            <Route element={<Calendardoc />} path="/calendardoc" />
            <Route element={<Sidebar_doc />} path="/sidebardoc" />
            <Route element={<Login />} path="/login" />
            <Route element={<Footer />} path="/footer" />
          </Routes>
        
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
