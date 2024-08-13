
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col justify-between  bg-[length:1400px_600px]"
      style={{
        backgroundImage: `url('/imgs/Checkout.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ''
      }}
    >
      
      <div className="p-8 flex justify-center">
        <Link 
          to="/store" 
          className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;