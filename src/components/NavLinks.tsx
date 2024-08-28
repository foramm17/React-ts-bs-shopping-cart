import { NavLink } from "react-router-dom";

type NavLinksProps = {
  className?: string;
  onClick?: () => void;
};

export function NavLinks({ className = "", onClick }: NavLinksProps) {
  const links = [
    { to: "/", text: "Home" },
    { to: "/store", text: "Store" },
    { to: "/wishlist", text: "Wishlist" },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="block text-white py-2 px-5 md:px-0 hover:text-gray-700 transition-colors duration-200"
          onClick={onClick}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}
