// components/Layout.js
import React from 'react';
import ThemeToggle from './theme-toggle';

const Layout = ({ children }: {
    children: React.ReactNode;
}) => (
  <div className='bg-secondary text-primary'>
    <div className='fixed top-0 right-0 p-4'>
      <ThemeToggle />
    </div>
    {children}
  </div>
);

export default Layout;
