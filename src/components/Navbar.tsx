import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
import { CartButton } from "./CartButton";
import { MobileMenu } from "./MobileMenu";
import { MenuToggle } from "./MenuToggle";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black shadow-lg py-0 sticky top-0 z-50">
      <div className="mx-auto px-5 flex justify-between items-center">
        <MenuToggle isOpen={isMenuOpen} toggle={toggleMenu} />
        <Logo />
        <NavLinks className="hidden md:flex space-x-6" />
        <div className="flex items-center space-x-4">
          <SearchBar className="hidden sm:block" />
          <CartButton quantity={cartQuantity} onClick={openCart} />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}
