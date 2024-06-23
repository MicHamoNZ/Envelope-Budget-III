import Container from 'react-bootstrap/Container';
import Budget from '../components/Envelopes';

export function Home() {
  return (
    <Container>
      <h1>Your budget balances:</h1>
      <Budget />
    </Container>
  );
}
