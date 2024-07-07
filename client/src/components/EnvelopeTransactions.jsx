import React, { useEffect, useState } from 'react';
import DataTable from './DataTable.jsx';

const EnvelopeTransactions = () => {
  const [transactionData, setTransactionData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:5001/api/v1/envelopes/3/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactionData(data.data);
      });
  }, []);

  const COLUMNS = [
    {
      title: 'ID',
      field: 'id',
    },
    {
      title: 'Date',
      field: 'transaction_dt',
    },
    {
      title: 'Description',
      field: 'description',
    },
    {
      title: 'Amount',
      field: 'amount',
    },
  ];

  return <DataTable data={transactionData} columns={COLUMNS} />;
};

export default EnvelopeTransactions;
