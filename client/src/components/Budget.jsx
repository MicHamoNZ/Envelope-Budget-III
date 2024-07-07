import Spinner from 'react-bootstrap/Spinner';
import DataTable from './DataTable.jsx';
import React, { useEffect, useState } from 'react';

const Budget = () => {
  const [budgetData, setBudgetData] = useState([{}]);

  console.log('Fetch all envelopes!');
  useEffect(() => {
    fetch('http://localhost:5001/api/v1/envelopes')
      .then((response) => response.json())
      .then((data) => {
        setBudgetData(data.data);
      });
  }, []);

  const COLUMNS = [
    {
      title: 'ID',
      field: 'id',
    },
    {
      title: 'Envelope',
      field: 'envelope_name',
    },
    {
      title: 'Amount',
      field: 'budget',
    },
  ];

  return <DataTable data={budgetData} columns={COLUMNS} />;
};

export default Budget;
