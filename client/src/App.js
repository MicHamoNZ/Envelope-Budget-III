import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
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
  );
}

export default App;
