import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <div className="md:hidden">
      <button onClick={toggle} className="text-white">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
}
