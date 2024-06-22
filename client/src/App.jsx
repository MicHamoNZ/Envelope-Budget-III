import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Envelopes } from './pages/Envelopes';
import { Transactions } from './pages/Transactions';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Envelopes' element={<Envelopes />} />
          <Route path='/Transactions' element={<Transactions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
