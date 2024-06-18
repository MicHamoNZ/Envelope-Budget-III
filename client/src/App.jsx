import React, { useEffect, useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Index } from './pages/Index'
import { Envelopes } from './pages/Envelopes';
import { Transactions } from './pages/Transactions';

function App() {

  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch('/api').then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Index/>}/>
          <Route path='/Envelopes' element={<Envelopes/>}/>
          <Route path='/Transactions' element={<Transactions/>}/>
        </Route>
       </Routes>
    </Router>
    /*         
      <div className="App">
        <header className="App-header">
          <p>
            {(typeof backendData.info === 'undefined') ? (
              <p>Loading...</p>
            ) : (
              backendData.info.map((info, i) => (
              <p key={i}>{info}</p>
            ))
            )}
          </p>
        </header>
      </div>
    */
  );
}

export default App;
