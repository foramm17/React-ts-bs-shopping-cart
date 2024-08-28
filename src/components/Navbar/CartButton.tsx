import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type CartButtonProps = {
  quantity: number;
  onClick: () => void;
};

export function CartButton({ quantity, onClick }: CartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-12 h-12 flex items-center justify-center bg-black rounded-full text-black hover:bg-gray-600 transition-colors duration-200"
    >
      <ShoppingCartIcon style={{ color: "#4dd0e1", fontSize: "1.6rem" }} />
      {quantity > 0 && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
          {quantity}
        </div>
      )}
    </button>
  );
}
