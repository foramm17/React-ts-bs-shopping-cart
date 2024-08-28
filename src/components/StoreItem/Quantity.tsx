import { useShoppingCart } from "../../context/ShoppingCartContext";

type QuantityProps = {
  id: number;
  quantity: number;
};

export function Quantity({ id, quantity }: QuantityProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <button
          className="bg-gray-200 text-cyan-700 text-xxl px-3 py-1 hover:bg-gray-300 transition"
          onClick={() => decreaseCartQuantity(id)}
        >
          -
        </button>
        <div className="text-xl">{quantity}</div>
        <button
          className="bg-gray-200 text-cyan-700 text-xxl px-3 py-1 hover:bg-gray-300 transition"
          onClick={() => increaseCartQuantity(id)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white py-1 px-3 text-md hover:bg-red-600 transition"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
