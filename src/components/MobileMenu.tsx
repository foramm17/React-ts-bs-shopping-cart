import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

type MobileMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-black">
      <NavLinks onClick={toggleMenu} />
      <div className="block sm:hidden p-4">
        <SearchBar />
      </div>
    </div>
  );
}
