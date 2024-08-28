import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Wishlist } from "./pages/Wishlist";
import { Navbar } from "./components/Navbar/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ItemDetail } from "./pages/ItemDetail";
import Checkout from "./pages/Checkout";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ShoppingCartProvider>
      <FavoritesProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <div className="px-2 py-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:category" element={<Store />} />
              <Route path="/product/:id" element={<ItemDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </FavoritesProvider>
    </ShoppingCartProvider>
  );
}

export default App;
