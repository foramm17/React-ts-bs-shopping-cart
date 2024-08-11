import { Drawer } from 'antd';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";

type StoreItem = {
    id: number;
    price: number;
    title: string;
    images: string[];
};

type ShoppingCartProps = {
    isOpen: boolean;
    storeItems: StoreItem[];
};

export function ShoppingCart({ isOpen, storeItems }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();

    const grandTotal = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <Drawer
            title="Shopping Cart"
            placement="right"
            onClose={closeCart}
            open={isOpen}
            width={350}
        >
            <div className="flex flex-col h-full pb-0">
                <div className="flex-1 overflow-y-auto space-y-4">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} storeItems={storeItems} />
                    ))}
                </div>
            <div className="mt-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-lg">Order Summary:</span>
                    <span className="font-semibold text-lg">{formatCurrency(grandTotal)}</span>
                </div>
                <button 
                    className='bg-black text-cyan-300 text-xl px-24 py-3 ml-3'
                    onClick={() => {
                        console.log("Checkout clicked");
                        closeCart();
                    }}
                >
                    Checkout
                </button>
            </div>
            </div>
        </Drawer>
    );
}




// with bs
// import { Offcanvas, Stack, Button } from "react-bootstrap";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "../utilities/formatCurrency";
// import { CartItem } from "./CartItem";

// // Define the type for the store item, including imgUrl
// type StoreItem = {
//     id: number;
//     price: number;
//     title: string;
//     images: string[];
// };

// type ShoppingCartProps = {
//     isOpen: boolean;
//     storeItems: StoreItem[];
// };

// export function ShoppingCart({ isOpen, storeItems }: ShoppingCartProps) {
//     const { closeCart, cartItems } = useShoppingCart();

//     const grandTotal = cartItems.reduce((total, cartItem) => {
//         const item = storeItems.find(i => i.id === cartItem.id);
//         return total + (item?.price || 0) * cartItem.quantity;
//     }, 0);

//     return (
//         <Offcanvas show={isOpen} onHide={closeCart} placement="end">
//             <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Cart</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body className="d-flex flex-column">
//                 <Stack gap={3} className="mb-auto">
//                     {cartItems.map(item => (
//                         <CartItem key={item.id} {...item} storeItems={storeItems} />
//                     ))}
//                 </Stack>
//                 <div className="mt-4">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                         <span className="fw-bold fs-5">Grand Total:</span>
//                         <span className="fw-bold fs-5">{formatCurrency(grandTotal)}</span>
//                     </div>
//                     <Button 
//                         variant="dark" 
//                         size="lg" 
//                         className="w-100"
//                         onClick={() => {
//                             // Implement checkout logic here
//                             console.log("Checkout clicked");
//                             closeCart();
//                         }}
//                     >
//                         Checkout
//                     </Button>
//                 </div>
//             </Offcanvas.Body>
//         </Offcanvas>
//     );
// }



// //src/components/ShoppingCart.tsx

// import { Offcanvas, Stack, Button } from "react-bootstrap"
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import { formatCurrency } from "../utilities/formatCurrency"
// import { CartItem } from "./CartItem"
// import storeItems from "../data/items.json"

// type ShoppingCartProps = {
//     isOpen: boolean
// }

// export function ShoppingCart({ isOpen }: ShoppingCartProps) {
//     const { closeCart, cartItems } = useShoppingCart()

//     const grandTotal = cartItems.reduce((total, cartItem) => {
//         const item = storeItems.find(i => i.id === cartItem.id)
//         return total + (item?.price || 0) * cartItem.quantity
//     }, 0)

//     return (
//         <Offcanvas show={isOpen} onHide={closeCart} placement="end">
//             <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Cart</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body className="d-flex flex-column">
//                 <Stack gap={3} className="mb-auto">
//                     {cartItems.map(item => (
//                         <CartItem key={item.id} {...item} />
//                     ))}
//                 </Stack>
//                 <div className="mt-4">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                         <span className="fw-bold fs-5">Grand Total:</span>
//                         <span className="fw-bold fs-5">{formatCurrency(grandTotal)}</span>
//                     </div>
//                     <Button 
//                         variant="dark" 
//                         size="lg" 
//                         className="w-100"
//                         onClick={() => {
//                             // Implement checkout logic here
//                             console.log("Checkout clicked")
//                             closeCart()
//                         }}
//                     >
//                         Checkout
//                     </Button>
//                 </div>
//             </Offcanvas.Body>
//         </Offcanvas>
//     )
// }