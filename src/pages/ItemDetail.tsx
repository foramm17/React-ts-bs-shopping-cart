import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useFavorites } from "../context/FavoritesContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type Category = {
  id: number;
  name: string;
};

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const shoesSize = ["4", "5", "6", "7", "8", "9", "10", "11"];

export function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id || "0");
  const [item, setItem] = useState<Item | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
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

  const handleFavoriteClick = () => {
    toggleFavorite(numericId);
  };

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
        {/* Item Images */}
        <div className="space-y-4">
          <img
            src={item.images[selectedImage]}
            alt={`${item.title} - Image ${selectedImage + 1}`}
            className="w-full h-96 object-cover rounded"
          />
          <div className="flex space-x-2 overflow-x-auto py-2">
            {item.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 flex-shrink-0 ${
                  selectedImage === index ? "border-2 border-cyan-300" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${item.title} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
          <h3 className="text-xl md:text-lg font-normal mb-4">
            {item.category.name}
          </h3>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            {formatCurrency(item.price)}
          </p>
          <p className="text-gray-700 mb-6">{item.description}</p>

          {isClothing && (
            <FormControl fullWidth className="mb-4">
              <InputLabel id="size-select-label">Size</InputLabel>
              <Select
                labelId="size-select-label"
                value={selectedSize}
                label="Size"
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {isShoes && (
            <FormControl fullWidth className="mb-4">
              <InputLabel id="size-select-label">Size</InputLabel>
              <Select
                labelId="size-select-label"
                value={selectedShoeSize}
                label="Size"
                onChange={(e) => setSelectedShoeSize(e.target.value)}
              >
                {shoesSize.map((shoesSize) => (
                  <MenuItem key={shoesSize} value={shoesSize}>
                    {shoesSize}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <div className="mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-2">
              {quantity === 0 ? (
                <button
                  className="w-full bg-black hover:bg-gray-900 text-cyan-300 py-2 transition"
                  onClick={() => increaseCartQuantity(numericId)}
                >
                  Add To Cart
                </button>
              ) : (
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-gray-200 text-cyan-700 text-md px-4 py-1 hover:bg-gray-300 transition"
                      onClick={() => decreaseCartQuantity(numericId)}
                    >
                      -
                    </button>
                    <div className="text-xl">{quantity}</div>
                    <button
                      className="bg-gray-200 text-cyan-700 text-md px-4 py-1 hover:bg-gray-300 transition"
                      onClick={() => increaseCartQuantity(numericId)}
                    >
                      +
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-4 text-md hover:bg-red-600 transition w-full sm:w-auto"
                      onClick={() => removeFromCart(numericId)}
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
                onClick={handleFavoriteClick}
              >
                {isFavorite ? (
                  <FavoriteIcon style={{ color: "#f44336" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
            <p>Free shipping on orders over $50</p>
            <p>
              <b>Estimated delivery:</b> 3-5 business days
            </p>
            <p>Express shipping available at checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
