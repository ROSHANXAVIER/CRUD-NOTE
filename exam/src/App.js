
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Hello from './components/hello';
import Create from './components/create';
import Search from './components/search';
import Update from './components/update';
import Delete from './components/delete';
import Rx from './components/rx';
function App() {
  return (
    <React.Fragment>
      <Sidebar/>
      <Router>     
        <Routes>
           <Route path='/' exact element={<Hello/>}/>
           <Route path='/create' exact element={<Create/>}/>
           <Route path='/search' exact element={<Search/>}/>
           <Route path='/update' exact element={<Update/>}/>
           <Route path='/delete' exact element={<Delete/>}/>
           <Route path='/power' exact element={<Rx/>}/>
        </Routes>
      </Router> 
    </React.Fragment>
  );
}

export default App;
