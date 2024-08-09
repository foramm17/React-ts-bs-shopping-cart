// src/components/CartItem.tsx
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

// Define the type for the cart item props
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
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);

    if (!item) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img 
                src={item.images[0]} 
                alt={item.title}
                style={{ width: "75px", height: "75px", objectFit: "cover" }} 
            />
            <div className="me-auto">
                <div>
                    {item.title}
                    <div className="text-muted" style={{ fontSize: ".75rem" }}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
            </div>
            <div 
                className="d-flex flex-column align-items-center" 
                style={{ gap: ".25rem", marginRight: "1rem" }}
            >
                <Button 
                    variant="link" 
                    className="p-0" 
                    onClick={() => increaseCartQuantity(id)}
                >
                    <KeyboardArrowUpIcon fontSize="small" style={{ color: 'black' }} />
                </Button>
                <span>{quantity}</span>
                <Button 
                    variant="link" 
                    className="p-0" 
                    onClick={() => decreaseCartQuantity(id)}
                >
                    <KeyboardArrowDownIcon fontSize="small" style={{ color: 'black' }} />
                </Button>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button 
                variant="link" 
                className="p-0 ms-2" 
                onClick={() => removeFromCart(id)}
            >
                <CloseIcon fontSize="small" style={{ color: 'black' }} />
            </Button>
        </Stack>
    );
}





// //src/components/CartItem.tsx

// import { Button, Stack } from "react-bootstrap"
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import storeItems from "../data/items.json"
// import { formatCurrency } from "../utilities/formatCurrency"
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import CloseIcon from '@mui/icons-material/Close';

// type CartItemProps = {
//     id: number
//     quantity: number
// }

// export function CartItem({id, quantity}: CartItemProps) {
//     const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
//     const item = storeItems.find(i => i.id === id)
//     if (item == null) return null

//     return (
//         <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
//             <img src={item.imgUrl} style={{width: "75px", height: "75px", objectFit: "cover"}} />
//             <div className="me-auto">
//                 <div>
//                     {item.name}
//                     <div className="text-muted" style={{fontSize: ".75rem"}} >{formatCurrency(item.price)}</div>
//                 </div>
//             </div>
//             <div className="d-flex flex-column align-items-center" style={{gap: ".25rem", marginRight: "1rem"}}>
//                 <Button 
//                     variant="link" 
//                     className="p-0" 
//                     onClick={() => increaseCartQuantity(id)}
//                 >
//                     <KeyboardArrowUpIcon fontSize="small" style={{ color: 'black' }} />
//                 </Button>
//                 <span>{quantity}</span>
//                 <Button 
//                     variant="link" 
//                     className="p-0" 
//                     onClick={() => decreaseCartQuantity(id)}
//                 >
//                     <KeyboardArrowDownIcon fontSize="small" style={{ color: 'black' }} />
//                 </Button>
//             </div>
//             <div>{formatCurrency(item.price * quantity)}</div>
//             <Button 
//                 variant="link" 
//                 className="p-0 ms-2" 
//                 onClick={() => removeFromCart(item.id)}
//             >
//                 <CloseIcon fontSize="small" style={{ color: 'black' }} />
//             </Button>
//         </Stack>
//     )
// }