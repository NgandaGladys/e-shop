import { categories, quickLinks, popularTags } from "@/assets/data/data.tsx";
import logo from "/eshop-logo.png";

const Footer = () => {
  return (
    <footer className="mt-auto text-white bg-gray-900 pt-16 pb-8">
      <div className="section md:flex md:flex-wrap md:gap-6 md:justify-between">
        {/* Brand & Contact Info */}
        <div className="mb-8 md:mb-0">
          <div className="mb-4 flex gap-2 items-center text-white">
            <img src={logo} alt="GiltzMart Logo" className="w-14 h-14" />
            <h1 className="text-3xl font-extrabold">GiltzMart</h1>
          </div>
          <p className="text-gray-300 text-sm">Customer Support:</p>
          <h3 className="text-lg font-bold text-gray-100">(256) 770997777</h3>
          <h4 className="text-gray-300 mt-2">Kampala, Uganda</h4>
          <a
            href="mailto:giltzmart@gmail.com"
            className="text-gray-100 font-bold mt-2 block"
          >
            giltzmart@gmail.com
          </a>
          {/* Social Media Links */}
          <div className="mt-4 flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-red-500">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Top Categories */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl text-gray-100 font-bold">TOP CATEGORIES</h2>
          <div className="mt-4 flex flex-col gap-2 text-gray-300 text-sm">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="block hover:text-white transition-all duration-250"
              >
                {category}
              </a>
            ))}
          </div>
          <a
            href="/products"
            className="mt-6 flex items-center text-warning-500 gap-2"
          >
            Browse All Products <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl text-gray-100 font-bold">QUICK LINKS</h2>
          <div className="mt-4 flex flex-col gap-2 text-gray-300 text-sm">
            {quickLinks.map(({ name, link }, index) => (
              <a
                key={index}
                href={link}
                className="block hover:text-white transition-all duration-250"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mb-8 md:mb-0 max-w-[15.625rem]">
          <h2 className="text-2xl text-gray-100 font-bold">POPULAR TAGS</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-gray-100 font-bold text-sm">
            {popularTags.map(({ name, link }, index) => (
              <a
                key={index}
                href={link}
                className="border-[1px] p-2 hover:bg-gray-800 focus:bg-gray-800 border-gray-100"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="h-[1px] w-full bg-gray-700 mt-12" />
      <div className="text-center text-gray-300 pt-6">
        <p>
          GiltzMart - eCommerce Platform © {new Date().getFullYear()}. Design by
          Gladys
        </p>
      </div>
    </footer>
  );
};

export default Footer;
