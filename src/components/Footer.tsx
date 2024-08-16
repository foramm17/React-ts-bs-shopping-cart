import { useNavigate } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Facebook,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const categories = [
  "Clothes",
  "Accessories",
  "Electronics",
  "Furniture",
  "Shoes",
  "Miscellaneous",
  "Makeup",
];

const Footer = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/store${category.toLowerCase() === 'all' ? '' : `/${category.toLowerCase()}`}`, {
      state: { selectedCategory: category }
    });
  };
  return (
    <footer className="bg-black text-white mt-4 py-4">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl text-cyan-300 font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <Instagram fontSize="large" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <Twitter fontSize="large" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <Facebook fontSize="large" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <LinkedIn fontSize="large" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <YouTube fontSize="large" />
              </a>
            </div>
          </div>

          {/* ShopLoop Logo */}
          <div className="flex justify-center items-center">
            <img
              src="/imgs/ShopLoop_logo.png"
              alt="ShopLoop Logo"
              className="h-16"
            />
          </div>

          {/* Categories */}
          <div className="text-center md:text-right">
            <h3 className="text-xl text-cyan-300 font-bold mb-4">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="hover:text-red-500 transition duration-300"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-4 border-t border-gray-700">
          <p>
            &copy; {new Date().getFullYear()} ShopLoop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
