import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';

const Navber = () => {
  return (
    <div className="navbar bg-blue-500 dark:bg-gray-800 dark:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 dark:bg-gray-800 rounded-box w-52">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/dashboard'>Dashboard</Link></li>
            <li><Link href='/settingcookie'>Setting Cookies</Link></li>
            <li><Link href='/readingcookie'>Reading Cookies</Link></li>
          </ul>
        </div>
        <Link href="/" className="normal-case text-xl">Cookie Based Web App</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/dashboard'>Dashboard</Link></li>
          <li><Link href='/settingcookie'>Setting Cookies & Authorization</Link></li>
          <li><Link href='/readingcookie'>Reading Cookies</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <DarkModeButton></DarkModeButton>
      </div>
    </div>
  );
}

export default Navber;
