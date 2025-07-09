import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-6 mt-10">
    <div className="container mx-auto text-center space-y-3">
      <p>© {new Date().getFullYear()} منصة الوظائف. جميع الحقوق محفوظة.</p>
      <div className="flex justify-center gap-5">
        <a href="#" className="hover:text-gray-300">🌐 فيسبوك</a>
        <a href="#" className="hover:text-gray-300">🐦 تويتر</a>
        <a href="#" className="hover:text-gray-300">📸 إنستغرام</a>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
