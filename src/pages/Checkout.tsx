import { Link } from "react-router-dom";

export default function Checkout() {
  const backgroundStyle = {
    backgroundImage: 'url("/imgs/Checkout bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <main 
      className="flex-grow flex flex-col items-center justify-center p-4 text-center"
      style={backgroundStyle}
    >
      <div className="max-w-2xl mx-auto bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Thank you for shopping with ShopLoop!
        </h2>
        <p className="mb-4 text-gray-700">Hope you enjoyed your experience.</p>
        <p className="mb-8 text-gray-700">
          Keep exploring our wide range of products to discover more exciting
          offers and deals.
        </p>
        <Link
          to="/store"
          className="bg-black text-cyan-300 py-2 px-6 hover:bg-gray-600 transition duration-300 inline-block"
        >
          Continue Shopping
        </Link>
        <p className="mt-8 text-gray-700">Happy shopping and see you again soon!</p>
      </div>
    </main>
  );
}

