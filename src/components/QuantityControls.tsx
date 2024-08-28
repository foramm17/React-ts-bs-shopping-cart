import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface QuantityControlsProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
  isFavorite: boolean;
  onFavoriteClick: () => void;
}

export function QuantityControls({
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
  isFavorite,
  onFavoriteClick,
}: QuantityControlsProps) {
  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-2">
        {quantity === 0 ? (
          <button
            className="w-full bg-black hover:bg-gray-900 text-cyan-300 py-2 transition"
            onClick={onIncrease}
          >
            Add To Cart
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-200 text-cyan-700 text-md px-4 py-1 hover:bg-gray-300 transition"
                onClick={onDecrease}
              >
                -
              </button>
              <div className="text-xl">{quantity}</div>
              <button
                className="bg-gray-200 text-cyan-700 text-md px-4 py-1 hover:bg-gray-300 transition"
                onClick={onIncrease}
              >
                +
              </button>
              <button
                className="bg-red-500 text-white py-1 px-4 text-md hover:bg-red-600 transition w-full sm:w-auto"
                onClick={onRemove}
              >
                Remove
              </button>
              <Link
                to="/checkout"
                className="bg-black text-cyan-300 py-1 px-4 text-md hover:bg-gray-600 transition w-full sm:w-auto"
              >
                PLACE ORDER
              </Link>
            </div>
          </div>
        )}
        <button
          className="border-2 border-white p-2 rounded-full hover:border-cyan-300 transition"
          onClick={onFavoriteClick}
        >
          {isFavorite ? (
            <FavoriteIcon style={{ color: "#f44336" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </button>
      </div>
    </div>
  );
}
