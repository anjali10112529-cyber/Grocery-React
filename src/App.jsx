import React from 'react';
import Navbar from './nav';
import Carousel from './carousel.jsx';
import Products from './products.jsx';
import './App.css';
function App(){
  return(
    <div>
      <Navbar />
      <Carousel/>
      <Products />
    </div>
  );
}
export default App;