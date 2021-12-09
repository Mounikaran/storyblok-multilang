import Link from "next/link";


const Footer = ({ locale, locales, defaultLocale }) => {
  const defaultRoot = locale === defaultLocale ? "/" : `/${locale}/`;
  return (
    <footer className="text-center flex flex-col items-center py-20 container mx-auto">
<div className="w-full md:w-auto flex-none md:flex md:items-center">
           <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
              {locales.map((loc) => {
                return (
                  <li key={loc}>
                    <Link
                      href={`/${loc === defaultLocale ? "" : loc}`}
                      locale={false}
                    >
                      <a
                        className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 ${
                          locale === loc ? "bg-black text-white" : ""
                        }`}
                      >
                        {loc}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
    </footer>
  );
};

export default Footer;
