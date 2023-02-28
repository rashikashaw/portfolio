'use client';
import React, { useEffect, useState } from 'react';
import { RiSunLine, RiMoonFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { Link } from 'react-scroll/modules';
import { GoThreeBars } from 'react-icons/go';

export const Navbar = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const  { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false)
    };
    window.addEventListener("scroll", listener);
    return() => {
      window.removeEventListener("scroll", listener);
    }
  })
  const currTheme = (theme === 'system' ? systemTheme : theme) || 'dark';
  return (
    <header className={`w-full backdrop-filter backdrop-blur-lg bg-gray/50 p-6 sticky z-40 top-0 trasition ease-in-out duration-500 ${animateHeader && "shadow-xl"}`}>
      <div className="flex justify-between px-12 items-center">
        <a className="pt-2 font-display text-2xl cursor-pointer items-center">
          Rashika Shaw
        </a>
        <div className="hidden pt-2 px-20 lg:flex space-x-8">
          <Link to='hero' smooth={true} duration={500} className="hover:text-seaGreen cursor-pointer font-">Home</Link>
          <Link to='about' smooth={true} duration={500} className="hover:text-seaGreen cursor-pointer">About</Link>
          <Link to='projects' smooth={true} duration={500} className="hover:text-seaGreen cursor-pointer">Projects</Link>
          <Link to='contact' smooth={true} duration={500} className="hover:text-seaGreen cursor-pointer">Contact</Link>
        </div>
        <div>
        <div>
          
        </div>
        <div className="md:hidden">
          <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
        </div>
          { currTheme === 'dark' && (
            <button onClick={() => setTheme('light')} className="cursor-pointer">
              <RiSunLine size={25}/>
            </button>
          )} 
          {currTheme === 'light' &&  (
            <button onClick={() => setTheme('dark')} className="cursor-pointer">
              <RiMoonFill size={25}/>
            </button>
          )}
      </div>
    </header>
  );
};
