// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Wishlist } from "./pages/Wishlist";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ItemDetail } from "./pages/ItemDetail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <ShoppingCartProvider>
      <FavoritesProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <div className="px-2 py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/product/:id" element={<ItemDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </div>
        </div>
      </FavoritesProvider>
    </ShoppingCartProvider>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom"
// import { Container } from "react-bootstrap"
// import { Home } from "./pages/Home"
// import { Store } from "./pages/Store"
// import { Wishlist } from "./pages/Wishlist"
// import { Navbar } from "./components/Navbar"
// import { ShoppingCartProvider } from "./context/ShoppingCartContext"
// import { FavoritesProvider } from "./context/FavoritesContext"

// function App() {
//   return (
//     <ShoppingCartProvider>
//       <FavoritesProvider>
//         <Navbar />
//         <Container className="mb-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/store" element={<Store />} />
//             <Route path="/wishlist" element={<Wishlist />} />
//           </Routes>
//         </Container>
//       </FavoritesProvider>
//     </ShoppingCartProvider>
//   )
// }

// export default App
