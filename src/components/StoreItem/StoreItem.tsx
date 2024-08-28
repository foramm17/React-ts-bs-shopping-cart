import { StoreItemProps } from "../types";
import { ItemInfo } from "./ItemInfo";
import { ItemImage } from "./ItemImage";
import { Quantity } from "./Quantity";
import { FavoriteButton } from "./FavoriteButton";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useFavorites } from "../../context/FavoritesContext";

export function StoreItem({ id, title, price, images }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(id);

  return (
    <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
      <ItemImage image={images[0]} title={title} />
      <div className="flex flex-col p-4 flex-1">
        <ItemInfo id={id} title={title} price={price} />
        <div className="mt-auto">
          <div className="flex justify-between items-center gap-4 mb-2">
            {quantity === 0 ? (
              <button
                className="w-full bg-black hover:bg-gray-900 text-cyan-300 py-2 transition"
                onClick={() => increaseCartQuantity(id)}
              >
                Add To Cart
              </button>
            ) : (
              <Quantity id={id} quantity={quantity} />
            )}
            <FavoriteButton
              isFavorite={isFavorite}
              onClick={() => toggleFavorite(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
