import { Drawer } from 'antd';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { Link } from 'react-router-dom';

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
                <Link 
                    to="/checkout"
                    className='bg-black text-cyan-300 text-lg px-16 py-3 ml-5'
                    // onClick={() => {
                    //     console.log("Checkout clicked");
                    //     closeCart();
                    // }}
                >
                    PLACE ORDER
                </Link>
            </div>
            </div>
        </Drawer>
    );
}




