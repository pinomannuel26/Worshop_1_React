import { useState } from 'react';
import Header from "./Components/Header/Header"
import HeaderMain from "./Components/HeaderMain/HeaderMain"
import Creations from "./Components/bodyMain/Creations"
import Footer from "./Components/Footer/Footer"
import NavBarMovil from "./Components/NavBarMovil/NavBarMovil"
function App() {

  /*Estado */
  const [mostrarMenuHamburguesa, actualizarMostrar] = useState(false)
  const cambiarMostrar =()=>{
      actualizarMostrar(!mostrarMenuHamburguesa);
      
    }
  return (
    <>
      {mostrarMenuHamburguesa ? <NavBarMovil cambiarMostrar={cambiarMostrar}/> : <><Header cambiarMostrar={cambiarMostrar}/> <HeaderMain/> <Creations/> <Footer/></>}  
    </>
  )
}

export default App
