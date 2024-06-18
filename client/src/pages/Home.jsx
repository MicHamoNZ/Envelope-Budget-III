import React, { useEffect, useState } from 'react';

export function Home() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/envelopes')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h2>Home page</h2>
          <p>
            {typeof backendData.data === 'undefined' ? (
              <p>Loading...</p>
            ) : (
              <div>
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Budget</th>
                  </tr>
                  {backendData.data.map((key) => (
                    <tr>
                      <td>{key.id}</td>
                      <td>{key.envelope_name}</td>
                      <td>{key.budget}</td>
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </p>
        </header>
      </div>
    </>
  );
}
