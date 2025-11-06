import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import CartTab from './CartTab';
import { useSelector } from 'react-redux';


const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className="layout-root">
      <main className={`layout-main ${statusTabCart ? 'main-shifted' : ''}`}>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
