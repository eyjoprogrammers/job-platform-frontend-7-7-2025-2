import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md font-arabic">
    <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
      <div className="flex items-center gap-3 ">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl" />
        </Link>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold ">منصة الوظائف</h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-0">
        <Link to="/" className="hover:text-gray-200 text-sm sm:text-base md:text-lg">الرئيسية</Link>
        <Link to="/about" className="hover:text-gray-200 text-sm sm:text-base md:text-lg">عن المنصة</Link>
        <Link to="/jobs" className="hover:text-gray-200 text-sm sm:text-base md:text-lg">الوظائف</Link>
        <Link to="/contact" className="hover:text-gray-200 text-sm sm:text-base md:text-lg">اتصل بنا</Link>
      </nav>
    </div>
  </header>
  
  );
};

export default Header;
