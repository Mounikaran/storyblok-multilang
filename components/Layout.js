import Head from "../components/Head";
// import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div className="bg-purple-300">
    <Head />
    {children}
    <Footer locale={locale} locales={locales} defaultLocale={defaultLocale} />
  </div>
);

export default Layout;
