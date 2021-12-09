import Teaser from "./Teaser";
import Feature from "./Feature";
import FeaturedPosts from "./FeaturedPosts";
import Grid from "./Grid";
import Placeholder from "./Placeholder";
import PostsList from "./PostsList";
import Page from "./Page";
import BlogPost from "./BlogPost";
import Text from "./Text";
import MenuGrid from "./MenuGrid";
import Navigation from "./Navigation";
import MenuLink from "./MenuLink";
import Button from "./Button";
import Card from "./Card";
import ButtonGrid from "./ButtonGrid";
import Section from "./Section";

const Components = {
  teaser: Teaser,
  grid: Grid,
  menugrid : MenuGrid,
  feature: Feature,
  "featured-posts": FeaturedPosts,
  page: Page,
  post: BlogPost,
  text: Text,
  "selected-posts": PostsList,
  navigation : Navigation,
  menulink : MenuLink,
  button:Button,
  card:Card,
  buttongrid:ButtonGrid,
  section : Section
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
