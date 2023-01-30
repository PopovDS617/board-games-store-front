import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

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
      </div>
      <div className="flex justify-end items-center">
        <div className="px-5">
          <Link href="/auth/login">
            <a
              className={`${
                currentPath === '/auth/login' ? 'text-yellow-500' : 'text-white'
              }`}
            >
              Login
            </a>
          </Link>
        </div>
        <div className="px-5">
          <Link href="/auth/signup">
            <a
              className={`${
                currentPath === '/auth/signup'
                  ? 'text-yellow-500'
                  : 'text-white'
              }`}
            >
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
