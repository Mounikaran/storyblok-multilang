import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const ButtonGrid = ({ blok }) => (
  <div
    {...sbEditable(blok)}
    key={blok._uid}
    className="flex justify-center py-8 mb-6 container mx-auto"
  >
    {blok.columns.map((nestedBlok) => (
      <div key={nestedBlok._uid} className="px-2">
        <DynamicComponent blok={nestedBlok} />
      </div>
    ))}
  </div>
);

export default ButtonGrid;
