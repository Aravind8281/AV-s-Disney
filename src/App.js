import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Detail from './Components/Detail';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
      {/*<Header />
      <Home />*/}
    </div>
  );
}

export default App;
