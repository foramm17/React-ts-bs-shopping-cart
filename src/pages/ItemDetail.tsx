import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useFavorites } from "../context/FavoritesContext";
import { ImageGallery } from "../components/ItemDetails/ImageGallery";
import { ProductInfo } from "../components/ItemDetails/ProductInfo";
import { SizeSelector } from "../components/ItemDetails/SizeSelector";
import { QuantityControls } from "../components/ItemDetails/QuantityControls";
import { ShippingInfo } from "../components/ItemDetails/ShippingInfo";

interface Category {
  id: number;
  name: string;
}

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id || "0");
  const [item, setItem] = useState<Item | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedShoeSize, setSelectedShoeSize] = useState("4");
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(numericId);
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(numericId);

  useEffect(() => {
    const foundItem = storeItems.find((item) => item.id === numericId);
    setItem(foundItem || null);
  }, [numericId]);

  if (!item) {
    return <div>Item not found</div>;
  }

  const isClothing = item.category.name.toLowerCase().includes("clothes");
  const isShoes = item.category.name.toLowerCase().includes("shoes");

  return (
    <div className="container mx-auto px-4 rounded shadow-2xl py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageGallery images={item.images} title={item.title} />
        <div>
          <ProductInfo
            title={item.title}
            category={item.category.name}
            price={item.price}
            description={item.description}
          />
          <SizeSelector
            isClothing={isClothing}
            isShoes={isShoes}
            selectedSize={selectedSize}
            selectedShoeSize={selectedShoeSize}
            onSizeChange={setSelectedSize}
            onShoeSizeChange={setSelectedShoeSize}
          />
          <QuantityControls
            quantity={quantity}
            onIncrease={() => increaseCartQuantity(numericId)}
            onDecrease={() => decreaseCartQuantity(numericId)}
            onRemove={() => removeFromCart(numericId)}
            isFavorite={isFavorite}
            onFavoriteClick={() => toggleFavorite(numericId)}
          />
          <ShippingInfo />
        </div>
      </div>
    </div>
  );
}