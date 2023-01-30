import React, { PropsWithChildren } from 'react';
import Navbar from './navigation/Navbar';

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="w-full h-full bg-slate-400">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
