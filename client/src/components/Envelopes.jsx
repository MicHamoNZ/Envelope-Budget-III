import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState } from 'react';

function Budget() {
  const [budgetData, setBudgetData] = useState([{}]);

  useEffect(() => {
    fetch('/envelopes')
      .then((response) => response.json())
      .then((data) => {
        setBudgetData(data);
      });
  }, []);

  return (
    <>
      <Table striped bordered hover responsive size='sm'>
        <thead>
          <tr>
            <th>Envelope Id</th>
            <th>Description</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {typeof budgetData.data === 'undefined' ? (
            <Spinner animation='border' />
          ) : (
            budgetData.data.map((envelope, i) => (
              <tr key={i}>
                <td>{envelope.id}</td>
                <td>{envelope.envelope_name}</td>
                <td>{envelope.budget}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Budget;
