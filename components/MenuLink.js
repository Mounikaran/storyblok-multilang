import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";

const MenuLink = ({ blok }) => {
  return (
    <Link {...sbEditable(blok)} key={blok._uid} href={blok.link.url}>
      <a className={blok.is_brand ? 'font-bold text-xl' : ''}>
        {blok.text}
      </a>
    </Link>
  );
};

export default MenuLink;
