import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {Routes, Route}from "react-router-dom"
import Product from './pages/product/Product';
import HomeLink from './components/header/HomeLink';

function App() {


  return (
    <Fragment>
        <div className="App">
          <Header  />
          <div className="body-app">
                <Routes>
                  <Route path='/' element ={<Home />}/>
                 <Route path='/account' element= {<Product/>}/>
                </Routes>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
