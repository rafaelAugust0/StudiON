import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.scss'

import Header from './components/Header';

import Home from './pages/Home'
import Empresa from "./pages/Empresa";

import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header/>

        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
        </Routes>

        <Footer/>
    </>
  );
}

export default App;
