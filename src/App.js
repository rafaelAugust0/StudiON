import React from "react";

import './App.scss'

import Header from './components/Header';
import Carousel from './components/Carousel'
import Counter from './components/Counter'
import Institutional from "./components/Institutional";
import Quotation from './components/Quotation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Counter/>
      <Institutional/>
      <Quotation/>
      <Footer/>
    </div>
  );
}

export default App;
