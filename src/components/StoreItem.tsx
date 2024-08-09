// src/components/StoreItem.tsx
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorites } from "../context/FavoritesContext";

export type StoreItemProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
      id: number;
      name: string;
      image: string;
    };
    images: string[];
  };

export function StoreItem({ id, title, price, images }: StoreItemProps){
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(id);

    const handleFavoriteClick = () => {
        toggleFavorite(id);
    }
    
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={images[0]} width="400px" height="400px" style={{objectFit: "cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        {quantity === 0 ? (
                            <Button className="w-100 me-2" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
                        ) : (
                            <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                                <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                    <div>      
                                    <span className="fs-3">{quantity}</span> in cart
                                    </div>
                                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                </div>
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                            </div> 
                        )}
                        <Button 
                            variant="outline-secondary" 
                            onClick={handleFavoriteClick}
                            style={{minWidth: '40px', height: '40px', padding: 0}}
                        >
                            {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}



// import { Button, Card } from "react-bootstrap"
// import { formatCurrency } from "../utilities/formatCurrency"
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useFavorites } from "../context/FavoritesContext";

// export type StoreItemProps = { 
//     id: number
//     name: string
//     price: number
//     imgUrl: string
// }

// export function StoreItem({ id, name, price, imgUrl }: StoreItemProps){
//     const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
//     const quantity = getItemQuantity(id)
//     const { favorites, toggleFavorite } = useFavorites()
//     const isFavorite = favorites.includes(id)

//     const handleFavoriteClick = () => {
//         toggleFavorite(id)
//     }
    
//     return (
//         <Card className="h-100">
//             <Card.Img variant="top" src={imgUrl} width="400px" height="400px" style={{objectFit: "cover"}} />
//             <Card.Body className="d-flex flex-column">
//                 <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
//                     <span className="fs-2">{name}</span>
//                     <span className="ms-2 text-muted">{formatCurrency(price)}</span>
//                 </Card.Title>
//                 <div className="mt-auto">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                         {quantity === 0 ? (
//                             <Button className="w-100 me-2" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
//                         ) : (
//                             <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
//                                 <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
//                                     <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
//                                     <div>      
//                                     <span className="fs-3">{quantity}</span> in cart
//                                     </div>
//                                     <Button onClick={() => increaseCartQuantity(id)}>+</Button>
//                                 </div>
//                                 <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
//                             </div> 
//                         )}
//                         <Button 
//                             variant="outline-secondary" 
//                             onClick={handleFavoriteClick}
//                             style={{minWidth: '40px', height: '40px', padding: 0}}
//                         >
//                             {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//                         </Button>
//                     </div>
//                 </div>
//             </Card.Body>
//         </Card>
//     )
// }