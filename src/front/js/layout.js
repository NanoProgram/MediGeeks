import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/login";
import { Home } from "./pages/home.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Cita } from "./pages/cita_1.jsx";
import { Cita2 } from "./pages/cita_2.jsx";
import { Cita3 } from "./pages/cita_3.jsx";
import { Appointment } from "./pages/Appointment.jsx";
import { Calendar } from "./pages/Calendar.jsx";
import {Recuperar} from "./pages/recuperarContra"
import injectContext from "./store/appContext";

import { Sidebar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Sidebar_doc } from "./component/Sidebar Doctors.jsx";


import { SignUp } from "./pages/signUp";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Sidebar />
          <Sidebar_doc />
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signUp" />
            <Route element={<Recuperar />} path="/recuperarContra" />
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Cita />} path="/cita" />
            <Route element={<Cita2 />} path="/cita2" />
            <Route element={<Cita3 />} path="/cita3" />
            <Route element={<Appointment />} path="/appointment" />
            <Route element={<Calendar />} path="/calendar" />
            <Route element={<Sidebar_doc />} path="/sidebardoc" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
