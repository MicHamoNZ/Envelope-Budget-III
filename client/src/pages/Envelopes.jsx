import Stack from 'react-bootstrap/Stack';
import EnvelopeTransactions from '../components/EnvelopeTransactions';
import React, { useEffect, useState } from 'react';

export function Envelopes() {
  const [envelopeData, setEnvelopeData] = useState([{}]);

  useEffect(() => {
    fetch('/envelopes/3')
      .then((response) => response.json())
      .then((data) => {
        setEnvelopeData(data.data);
      });
  }, []);

  console.log(envelopeData);

  return (
    <>
      <h2>
        {envelopeData.envelope_name} has a balance of {envelopeData.budget}
      </h2>
      <EnvelopeTransactions />
    </>
  );
}
