import BasicExample from './Navbar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <BasicExample />
      <main>
        <Outlet />
      </main>
    </>
  );
}
