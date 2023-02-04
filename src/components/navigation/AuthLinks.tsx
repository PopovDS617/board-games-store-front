import Link from 'next/link';

const AuthLinks = ({ currentPath }: { currentPath: string }) => {
  return (
    <>
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
              currentPath === '/auth/signup' ? 'text-yellow-500' : 'text-white'
            }`}
          >
            Sign up
          </a>
        </Link>
      </div>
    </>
  );
};

export default AuthLinks;
