import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

type CartItemProps = {
  id: number;
  quantity: number;
  storeItems: {
    id: number;
    title: string;
    price: number;
    images: string[];
  }[];
};

export function CartItem({ id, quantity, storeItems }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (!item) return null;

  return (
    <div className="flex items-center gap-2">
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-16 h-20 object-cover"
      />
      <div className="flex-1">
        <div>
          <span>
            <Link
              to={`/product/${id}`}
              className="text-gray-700 hover:text-cyan-300"
            >
              {item.title}
            </Link>
          </span>
          <div className="text-gray-500 text-sm">
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mr-4 gap-1">
        <button
          onClick={() => increaseCartQuantity(id)}
          className="p-0 hover:bg-cyan-300 text-black"
        >
          <KeyboardArrowUpIcon fontSize="small" />
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => decreaseCartQuantity(id)}
          className="p-0 hover:bg-cyan-300 text-black"
        >
          <KeyboardArrowDownIcon fontSize="small" />
        </button>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <button
        onClick={() => removeFromCart(id)}
        className="p-0 ml-2 hover:bg-red-500 text-black"
      >
        <CloseIcon fontSize="small" />
      </button>
    </div>
  );
}
