// src/components/Navbar.tsx
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import storeItems from "../data/items.json";

// Define an interface for your store items
interface StoreItem {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<StoreItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      const results = storeItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      navigate('/store', { state: { searchResults } });
      setSearchTerm('');
    }
  };

  return (
    <nav className="bg-black shadow-lg py-0 sticky top-0 z-50">
      <div className="container mx-auto px-0 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/imgs/ShopLoop_logo.png"
            alt="logo"
            className="w-25 h-20 object-contain mr-4"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-white hover:text-gray-600 transition-colors duration-200">
            Home
          </NavLink>
          <NavLink to="/store" className="text-white hover:text-gray-600 transition-colors duration-200">
            Store
          </NavLink>
          <NavLink to="/wishlist" className="text-white hover:text-gray-600 transition-colors duration-200">
            Wishlist
          </NavLink>
        </div>
        
        <div className="flex items-center space-x-4">
        <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-white text-black pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-gray-300 transition-colors duration-200"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </form>
          <button
            onClick={openCart}
            className="relative w-12 h-12 flex items-center justify-center bg-black rounded-full text-black hover:bg-gray-600 transition-colors duration-200"
          >
            <ShoppingCartIcon style={{color:"#4dd0e1", fontSize: "1.6rem" }} />
            {cartQuantity > 0 && (
              <div
                className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
              >
                {cartQuantity}
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}



//with bs
// import { Button, Container, Nav, Navbar as Navbarbs } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import material icon

// export function Navbar() {
//     const { openCart, cartQuantity } = useShoppingCart();

//     return (
//         <Navbarbs sticky="top" className="bg-white shadow-sm mb-3">
//             <Container>
//                 <Nav className="me-auto">
//                     <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
//                     <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
//                     <Nav.Link to="/wishlist" as={NavLink}>Wishlist</Nav.Link>
//                 </Nav>
//                 <Button
//                     onClick={openCart}
//                     style={{ width: "4rem", height: "4rem", position: "relative" }}
//                     variant="outline-info"
//                     className="rounded-circle"
//                 >
//                     <ShoppingCartIcon style={{ fontSize: "2rem" }} /> {/* Use material icon here */}
//                     {cartQuantity > 0 && (
//                         <div
//                             className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
//                             style={{
//                                 color: "white",
//                                 width: "2rem",
//                                 height: "2rem",
//                                 position: "absolute",
//                                 bottom: 0,
//                                 right: 0,
//                                 transform: "translate(25%, 25%)"
//                             }}
//                         >
//                             {cartQuantity}
//                         </div>
//                     )}
//                 </Button>
//             </Container>
//         </Navbarbs>
//     );
// }
        

// import { Button, Container, Nav, Navbar as Navbarbs } from "react-bootstrap"
// import { NavLink } from "react-router-dom"
// import { useShoppingCart } from "../context/ShoppingCartContext"

// export function Navbar(){
//     const { openCart, cartQuantity} = useShoppingCart()

//     return <Navbarbs sticky="top" className="bg-white shadow-sm mb-3">
//         <Container>
//             <Nav className="me-auto">
//                 <Nav.Link  to="/" as={NavLink}>Home</Nav.Link>
//                 <Nav.Link  to="/store" as={NavLink}>Store</Nav.Link>
//                 <Nav.Link  to="/wishlist" as={NavLink}>Wishlist</Nav.Link>      
//             </Nav>
//             {cartQuantity > 0 &&(<Button onClick={openCart} style={{ width:"4rem", height:"4rem", position:"relative"}} variant="outline-info" className="rounded-circle">

//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" xmlSpace="preserve"><path fill="#18CEF6" d="M26.029 58.156c-1.683 0-3.047 1.334-3.047 2.979 0 1.646 1.364 2.979 3.047 2.979s3.047-1.333 3.047-2.979c0-1.645-1.364-2.979-3.047-2.979zm17.795 0c-1.682 0-3.046 1.334-3.046 2.979 0 1.646 1.364 2.979 3.046 2.979 1.683 0 3.047-1.333 3.047-2.979 0-1.645-1.364-2.979-3.047-2.979zM22.515 26.997l5.416 14.5h21.793l6.189-14.5H22.515z"/><path fill="#233251" d="m58.753 13-9.67 28.181H23.85l-6.527-17.968h29.111v-2.27H14.036l7.722 21.258-6.281 10.643h35.794v-2.271H19.494l4.207-7.125h27.051l9.67-28.18H71V13H58.753zm-33.4 41.861c-3.134.002-5.674 2.484-5.676 5.548.002 3.065 2.542 5.548 5.676 5.549 3.133-.002 5.672-2.485 5.672-5.549 0-3.064-2.539-5.546-5.672-5.548zm0 8.827c-1.853-.003-3.35-1.468-3.353-3.279.003-1.81 1.5-3.274 3.353-3.277 1.849.003 3.349 1.467 3.352 3.277-.003 1.812-1.503 3.276-3.352 3.279zm17.794-8.827c-3.134.002-5.673 2.484-5.674 5.548.001 3.065 2.54 5.548 5.674 5.549 3.134-.002 5.672-2.485 5.674-5.549-.002-3.064-2.54-5.546-5.674-5.548zm0 8.827c-1.851-.003-3.349-1.468-3.352-3.279.003-1.81 1.501-3.274 3.352-3.277 1.851.003 3.35 1.467 3.353 3.277-.003 1.812-1.502 3.276-3.353 3.279z"/>
//                 </svg>

//                 <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:"white", width:"2rem", height:"2rem", position:"absolute", bottom: 0, right: 0, transform: "translate(25%, 25%"}}>{cartQuantity}</div>
//                 </Button>)}
//         </Container>
//     </Navbarbs>
// }

