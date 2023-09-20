import { Routes,Route } from "react-router-dom";
import App from "./App";
import React from 'react'
import About from "./Components/Pages/About.jsx";
import Carrers from "./Components/Pages/Carrers.jsx";
import Events from "./Components/Pages/Events.jsx";
import Products from "./Components/Pages/Products.jsx";
import Support from "./Components/Pages/Support.jsx";

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<App/>} />
        <Route path='home' element={<App/>} />
        <Route path='About' element={<About/>} />
        <Route path='Carrers' element={<Carrers/>} />
        <Route path='Events' element={<Events/>} />
        <Route path='Products' element={<Products/>} />
        <Route path='Support' element={<Support/>} />
    </Routes>
  )
}

export default AppRoutes