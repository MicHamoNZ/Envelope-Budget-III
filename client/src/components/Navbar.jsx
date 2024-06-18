import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <button className='navbutton'>Home</button>
      </Link>
      <Link to='/Envelopes'>
        <button className='navbutton'>Envelopes</button>
      </Link>
      <Link to='/Transactions'>
        <button className='navbutton'>Transactions</button>
      </Link>
    </div>
  );
}
