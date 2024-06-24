import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState } from 'react';

const EnvelopeTransactions = () => {
  const [transactionData, setTransactionData] = useState([{}]);

  useEffect(() => {
    fetch('/envelopes/3/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactionData(data);
      });
  }, []);

  return (
    <>
      <Table striped bordered hover responsive size='sm'>
        <thead>
          <tr>
            <th>Transaction Id</th>
            <th>Transaction Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {' '}
          {typeof transactionData.data === 'undefined' ? (
            <Spinner animation='border' />
          ) : (
            transactionData.data.map((envelope, i) => (
              <tr key={i}>
                <td>{envelope.id}</td>
                <td>{envelope.transaction_dt}</td>
                <td>{envelope.amount}</td>
                <td>{envelope.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default EnvelopeTransactions;
