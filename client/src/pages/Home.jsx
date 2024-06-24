import Container from 'react-bootstrap/Container';
import Budget from '../components/Budget';

export function Home() {
  return (
    <Container>
      <h1>Your budget balances:</h1>
      <Budget />
    </Container>
  );
}
