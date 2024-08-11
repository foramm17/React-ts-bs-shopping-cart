// src/pages/Store.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  const location = useLocation();
  const [displayItems, setDisplayItems] = useState(storeItems);

  useEffect(() => {
    if (location.state && location.state.searchResults) {
      setDisplayItems(location.state.searchResults);
    } else {
      setDisplayItems(storeItems);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-2">
      <h1 className="text-3xl font-semibold mb-6">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}


 // const [storeItems, setStoreItems] = useState<StoreItemProps[]>([]);

  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) {
  //         setStoreItems(data);
  //       } else {
  //         console.error("Data is not an array:", data);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

//with bs
// import { Col, Row } from "react-bootstrap";
// import { StoreItem } from "../components/StoreItem";
// import { useEffect, useState } from "react";
// import { StoreItemProps } from '../components/StoreItem';

// export function Store() {
//   const [storeItems, setStoreItems] = useState<StoreItemProps[]>([]);
//   useEffect(() => {
//       fetch('https://api.escuelajs.co/api/v1/products')
//           .then(response => response.json())
//           .then(data => {
//               if (Array.isArray(data)) {
//                   setStoreItems(data);
//               } else {
//                   console.error('Data is not an array:', data);
//               }
//           })
//           .catch(error => console.error('Error fetching products:', error));
//   }, []);
  
//   return (
//     <>
//         <h1>Store</h1>
//         <Row md={2} xs={1} lg={3} className="g-3">
//             {storeItems.map(item => (
//                 <Col key={item.id}><StoreItem {...item} /></Col>
//             ))}
//         </Row>
//     </>
// );
// } 

// //src/pages/store.tsx

// import { Col, Row } from "react-bootstrap"
// import storeItems from "../data/items.json"
// import { StoreItem } from "../components/StoreItem"


// export function Store() {
//     return <>
//     <h1>Store</h1>
//     <Row md={2} xs={1} lg={3} className="g-3">
//         {storeItems.map(item => (
//         <Col key={item.id}><StoreItem{...item} /></Col>
//         ))}
//     </Row>
//     </>
// }