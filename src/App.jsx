import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Homepage, Show} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main-title'>
        TV Maze Shows
      </div>
      <div className='main'>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={ <Homepage /> }></Route>
              <Route exact path='/showDetails/:showId' element={ <Show /> }></Route>
            </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
