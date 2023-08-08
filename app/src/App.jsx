import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Jumbotron from './components/Jumbotron'
import Card from './components/card'



const App = () => {
  return (
    <>
      <Navbar />
     
      <div className="container">
        <div className='Jumbotron'>
      <Jumbotron />
      </div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;
