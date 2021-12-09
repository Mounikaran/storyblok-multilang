import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Card = ({ blok }) => {
  return (
    <div
      {...sbEditable(blok)}
      key={blok._uid}
      className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col items-center bg-white rounded shadow-lg"
    >
        <div className="font-bold">
            {blok.header}
        </div>
        <p className="text-base text-gray-600">{blok.content}</p>
    </div>
  );
};

export default Card;
