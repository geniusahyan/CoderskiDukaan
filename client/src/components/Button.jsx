// Button.jsx
import React from "react";
import "./Button.css";

function Button({ children }) {
  return (
    <button className="mt-4 text-white relative overflow-hidden bg-[#FB923C] font-bold p-2 rounded-lg after:content-[''] after:absolute after:bg-red-500 after:opacity-0 after:scale-0 after:transition-transform after:transition-opacity after:transition-duration-300 hover:after:opacity-100 hover:after:scale-100">
      {children}
    </button>
  );
}

export default Button;
