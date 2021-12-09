import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";

const Button = ({ blok }) => {
  return (
      <button {...sbEditable(blok)} key={blok._uid} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {blok.label}
      </button>
  );
};

export default Button;
