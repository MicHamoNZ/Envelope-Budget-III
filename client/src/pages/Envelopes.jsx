import EnvelopeTransactions from '../components/EnvelopeTransactions';
import React, { useEffect, useState } from 'react';

export function Envelopes() {
  const [envelopeData, setEnvelopeData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:5001/api/v1/envelopes/3')
      .then((response) => response.json())
      .then((data) => {
        setEnvelopeData(data.data);
      });
  }, []);

  console.log(envelopeData);

  return (
    <>
      <EnvelopeTransactions />
    </>
  );
}
