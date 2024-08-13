// src/components/StoreItem.tsx
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorites } from "../context/FavoritesContext";
import { formatCurrency } from "../utilities/formatCurrency";

export type StoreItemProps = {
    id: number;
    title: string;
    price: number;
    images: string[];
};

export function StoreItem({ id, title, price, images }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(id);

    const handleFavoriteClick = () => {
        toggleFavorite(id);
    };

    return (
        <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
                src={images[0]} 
                alt={title} 
                className="w-full h-70 object-cover"
            />
            <div className="flex flex-col p-4 flex-1">
                <div className="flex justify-between items-baseline mb-4">
                <Link to={`/product/${id}`} className="text-lg font-semibold text-gray-700 hover:text-cyan-300">
          {title}
        </Link>
                    <span className="text-gray-600">{formatCurrency(price)}</span>
                </div>
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
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <button 
                                        className="bg-gray-200 text-cyan-700 text-xxl px-5 py-1 hover:bg-gray-300 transition"
                                        onClick={() => decreaseCartQuantity(id)}
                                    >
                                        -
                                    </button>
                                    <div className="text-xl">{quantity}</div>
                                    <button 
                                        className="bg-gray-200 text-cyan-700 text-xxl px-5 py-1 hover:bg-gray-300 transition"
                                        onClick={() => increaseCartQuantity(id)}
                                    >
                                        +
                                    </button>
                                
                                <button 
                                    className="bg-red-500 text-white py-1 px-5 text-md hover:bg-red-600 transition"
                                    onClick={() => removeFromCart(id)}
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
    );
}



