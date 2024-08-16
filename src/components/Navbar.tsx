import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import storeItems from "../data/items.json";

interface StoreItem {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<StoreItem[]>([]);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      const results = storeItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      navigate("/store", { state: { searchResults, searchTerm } });
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black shadow-lg py-0 sticky top-0 z-50">
      <div className="mx-auto px-5 flex justify-between items-center">
        {/* Hamburger menu for small and medium screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        <div className="flex items-center">
          <img
            src="/imgs/ShopLoop_logo.png"
            alt="logo"
            className="w-25 h-20 object-contain mr-3"
          />
        </div>


        {/* Navigation links for large screens */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-white hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className="text-white hover:text-gray-600 transition-colors duration-200"
          >
            Store
          </NavLink>
          <NavLink
            to="/wishlist"
            className="text-white hover:text-gray-600 transition-colors duration-200"
          >
            Wishlist
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <form
            onSubmit={handleSearchSubmit}
            className="relative hidden sm:block"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-white text-black pl-10 pr-4 py-2 sm:w-auto focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-gray-300 transition-colors duration-200"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </form>
          <button
            onClick={openCart}
            className="relative w-12 h-12 flex items-center justify-center bg-black rounded-full text-black hover:bg-gray-600 transition-colors duration-200"
          >
            <ShoppingCartIcon
              style={{ color: "#4dd0e1", fontSize: "1.6rem" }}
            />
            {cartQuantity > 0 && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartQuantity}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <NavLink
            to="/"
            className="block text-white py-2 px-4 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className="block text-white py-2 px-4 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Store
          </NavLink>
          <NavLink
            to="/wishlist"
            className="block text-white py-2 px-4 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Wishlist
          </NavLink>
          <form onSubmit={handleSearchSubmit} className="block sm:hidden p-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full bg-white text-black pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-gray-300 transition-colors duration-200"
            />
          </form>
        </div>
      )}
    </nav>
  );
}