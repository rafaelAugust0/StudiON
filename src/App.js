import React from "react";

import './App.scss'

import Header from './components/Header';
import Carousel from './components/Carousel'
import Counter from './components/Counter'
import Institutional from "./components/Institutional";
import Quotation from './components/Quotation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Counter/>
      <Institutional/>
      <Quotation/>
    </div>
  );
}

export default App;
