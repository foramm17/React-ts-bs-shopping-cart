import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Wishlist } from "./pages/Wishlist"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { FavoritesProvider } from "./context/FavoritesContext"

function App() {
  return (
    <ShoppingCartProvider>
      <FavoritesProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Container>
      </FavoritesProvider>
    </ShoppingCartProvider>
  )
}

export default App
