import React from "react";

import './App.scss'

import Header from './components/Header';
import Carousel from './components/Carousel'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Counter/>
    </div>
  );
}

export default App;
