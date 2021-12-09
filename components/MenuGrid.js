import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";


const MenuGrid = ({ blok }) => (
  <ul
    {...sbEditable(blok)}
    key={blok._uid}
    className="flex justify-start"
  >
    {blok.menuitems.map((nestedBlok) => (
      <li className="px-2" key={nestedBlok._uid} >
            <DynamicComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
