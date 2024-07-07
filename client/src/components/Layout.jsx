import BasicNavbar from './BasicNavbar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <BasicNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
