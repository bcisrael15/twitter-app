import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Trending from './Components/Trending';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/Trending" element={<Trending/>}></Route>
    </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
