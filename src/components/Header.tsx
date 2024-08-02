import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 text-white py-4 shadow-md w-full">
      <div className="text-center">
        <Link href="/" passHref>
          <h1 className="text-3xl font-bold cursor-pointer">
            レシピ集
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;