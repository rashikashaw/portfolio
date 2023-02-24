'use client';
import React from 'react';
import { RiSunLine, RiMoonFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';

export const Navbar = () => {
  const  { systemTheme, theme, setTheme } = useTheme();
  const currTheme = (theme === 'system' ? systemTheme : theme) || 'dark';
  return (
    <header className="relative container items-center justify-center mx-auto p-6 top-2">
      <div className="flex justify-between px-10 items-center md:px-20">
        <a href="#home" className="pt-2 font-display text-2xl cursor-pointer items-center">
          Rashika Shaw
        </a>
        <div className="hidden pt-2 lg:flex space-x-8">
          <a href={'#home'} className="hover:text-seaGreen cursor-pointer font-">Home</a>
          <a href={'#about'} className="hover:text-seaGreen cursor-pointer">About</a>
          <a href={'#projects'} className="hover:text-seaGreen cursor-pointer">Projects</a>
          <a href={'#contact'} className="hover:text-seaGreen cursor-pointer">Contact</a>
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
