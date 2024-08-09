// src/pages/store.tsx

// src/pages/store.tsx

import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useEffect, useState } from "react";
import { StoreItemProps } from '../components/StoreItem';

export function Store() {
  const [storeItems, setStoreItems] = useState<StoreItemProps[]>([]);
  useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => {
              if (Array.isArray(data)) {
                  setStoreItems(data);
              } else {
                  console.error('Data is not an array:', data);
              }
          })
          .catch(error => console.error('Error fetching products:', error));
  }, []);
  
  return (
    <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}><StoreItem {...item} /></Col>
            ))}
        </Row>
    </>
);
} 

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