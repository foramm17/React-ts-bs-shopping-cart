import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json"; // Import your local data
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useFavorites } from "../context/FavoritesContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id || "0"); // Convert id to number
  const [product, setProduct] = useState<Item | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(numericId); // Pass numericId instead of id
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(numericId); // Pass numericId instead of id

  const handleFavoriteClick = () => {
    toggleFavorite(numericId); // Pass numericId instead of id
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product!.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product!.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const foundProduct = storeItems.find((item) => item.id === numericId);
    setProduct(foundProduct || null);
  }, [numericId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 border-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={product.images[currentImageIndex]}
            alt={product.title}
            className="w-50 h-40 rounded"
          />
          <div className="flex justify-between mt-4">
            <button
              className="bg-gray-200 text-cyan-700 px-4 py-2 rounded hover:bg-gray-300 transition"
              onClick={prevImage}
            >
              Previous
            </button>
            <button
              className="bg-gray-200 text-cyan-700 px-4 py-2 rounded hover:bg-gray-300 transition"
              onClick={nextImage}
            >
              Next
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">{formatCurrency(product.price)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mt-auto">
            <div className="flex justify-between items-center gap-4 mb-2">
              {quantity === 0 ? (
                <button 
                  className="w-full bg-black hover:bg-gray-900 text-cyan-300 py-2 transition"
                  onClick={() => increaseCartQuantity(numericId)}
                >
                  Add To Cart
                </button>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <button 
                      className="bg-gray-200 text-cyan-700 text-xxl px-5 py-1 hover:bg-gray-300 transition"
                      onClick={() => decreaseCartQuantity(numericId)}
                    >
                      -
                    </button>
                    <div className="text-xl">{quantity}</div>
                    <button 
                      className="bg-gray-200 text-cyan-700 text-xxl px-5 py-1 hover:bg-gray-300 transition"
                      onClick={() => increaseCartQuantity(numericId)}
                    >
                      +
                    </button>
                    <button 
                      className="bg-red-500 text-white py-1 px-5 text-md hover:bg-red-600 transition"
                      onClick={() => removeFromCart(numericId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
              <button 
                className="border-2 border-white p-2 rounded-full hover:border-cyan-300 transition"
                onClick={handleFavoriteClick}
              >
                {isFavorite ? <FavoriteIcon style={{color:"#f44336"}} /> : <FavoriteBorderIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
