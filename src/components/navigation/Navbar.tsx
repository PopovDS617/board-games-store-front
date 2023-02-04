import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import AuthLinks from './AuthLinks';
import { logoutThunk } from '../../store/auth/authSlice';
import Logout from './Logout';

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const { name, isAuthorized, userId } = useAppSelector((state) => state.auth);
  const greeting = 'Welcome, ' + name;
  const dispatch = useAppDispatch();

  const logoutHandler = (userId: string) => {
    dispatch(logoutThunk(userId));
  };

  return (
    <nav className=" bg-teal-500 flex justify-between items-center p-5">
      <div className="flex flex-start items-center">
        <div>
          <Link href="/">
            <a
              className={`${
                currentPath === '/' ? 'text-yellow-500' : 'text-white'
              }`}
            >
              Home page
            </a>
          </Link>
        </div>
        <div>
          <Link href="/products">
            <a
              className={`${
                currentPath === '/products' ? 'text-yellow-500' : 'text-white'
              }`}
            >
              Products
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center">
        {isAuthorized && <h1> {greeting}</h1>}
        {isAuthorized ? (
          <Logout onLogout={logoutHandler.bind(null, userId)} />
        ) : (
          <AuthLinks currentPath={currentPath} />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
