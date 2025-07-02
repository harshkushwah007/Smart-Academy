import React from "react";

const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex bg-pink-500 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-pink-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
