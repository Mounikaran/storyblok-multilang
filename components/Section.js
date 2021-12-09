import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Section = ({ blok }) => (
  <section {...sbEditable(blok)} key={blok._uid} className="">
    <img
      src={blok.bg_image?.filename}
      alt={blok.bg_image?.filename}
      className="absolute w-full"
    />
    <div className="relative z-10">
      {blok.blocks.map((nestedBlok) => (
        <div key={nestedBlok._uid} className="flex-auto px-6">
          <DynamicComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  </section>
);

export default Section;
