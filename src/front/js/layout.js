import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home.jsx";
import { Cita } from "./pages/cita_1.jsx";
import { Cita2 } from "./pages/cita_2.jsx";
import { Cita3 } from "./pages/cita_3.jsx";
import { Appointment } from "./pages/Appointment.jsx";
import { Calendardoc } from "./pages/Calendardoc.jsx";
import { Login } from "./component/login.jsx"
import { Singup } from "./component/singup.jsx"
import { Forgot } from "./component/Forgot.jsx"
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { Sidebar_doc } from "./component/Sidebar Doctors.jsx";




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
            <Route element={<Singup />} path="/signup" />
            <Route element={<Home />} path="/" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Cita />} path="/cita" />
            <Route element={<Cita2 />} path="/cita2" />
            <Route element={<Cita3 />} path="/cita3" />
            <Route element={<Appointment />} path="/appointment" />
            <Route element={<Calendardoc />} path="/calendardoc" />
            <Route element={<Sidebar_doc />} path="/sidebardoc" />
            <Route element={<Login />} path="/login" />
            <Route element={<Forgot />} path="/forgot" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
