import { useFavorites } from "../context/FavoritesContext";
import { StoreItem, StoreItemProps } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Wishlist() {
  const { favorites } = useFavorites();

  const favoriteItems = storeItems.filter((item) =>
    favorites.includes(item.id)
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6">My Wishlist</h1>
      {favoriteItems.length === 0 ? (
        <p className="text-lg">
          You haven't added any items to your wishlist yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteItems.map((item: StoreItemProps) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
