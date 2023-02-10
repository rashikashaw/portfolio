import React from "react";

type ButtonProps = {
  label: React.ReactNode | string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  clasName: string;
  width?: string;
  padding?: string;
  isButtonLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {label, onClick, width, padding, isButtonLoading} = props;
  return (
    <button className={`ease group relative z-30 box-border inline-flex 
      ${
      width ? width : "w-auto"
      } 
      ${padding} 
      cursor-pointer 
      items-center 
      justify-center 
      overflow-hidden 
      rounded 
      bg-indigo-600 
      bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 
      px-8 py-3 
      font-bold 
      text-white 
      transition-all duration-300 
      focus:outline-none`
    }
    onClick={onClick}>
      <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      {isButtonLoading ? "Loading..." : label}
    </button>
  );
};
