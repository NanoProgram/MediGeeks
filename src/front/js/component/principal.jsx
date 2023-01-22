import React from 'react'
import { Inicio } from "../component/beginning.jsx";
import { One } from "../component/one.jsx";
import { Two } from "../component/two.jsx";
import { Three } from "../component/three.jsx";
import { Four } from "../component/four.jsx";
import { Five } from "../component/five.jsx";
import {Footer} from "../component/footer.jsx"

import "../../styles/principal.css"

export const Principal = () => {
  return (
    <div className=' background conteiner-md' >
        
        <Inicio />
        <br />
        <br />
        <br />
        <One />
        <br />
        <br />
        <br />
        <Two />
        <br />
        <br />
        <br />
        <Three />
        <br />
        <br />
        <br />
        <Four />
        <br />
        <Five />
        <br />
        <Footer />
    </div>
  )
}
