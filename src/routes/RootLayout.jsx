import { Outlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader';

function RootLayout() {
  <>
    <MainHeader />
    <Outlet />
  </>;
}

export default RootLayout;
