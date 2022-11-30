import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.scss'

import Header from './components/Header';

import Home from './pages/Home'
import Empresa from "./pages/Empresa";
import Eventos from "./pages/Eventos";
import Galeria from "./pages/Galeria";

import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header/>

        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/eventos" element={<Eventos/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
        </Routes>

        <Footer/>
    </>
  );
}

export default App;
