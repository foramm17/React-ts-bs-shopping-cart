import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MultiCarousel from "react-multi-carousel";
import storeItems from "../data/items.json";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

export function BestSellersCarousel() {
  const [bestSellers, setBestSellers] = useState(storeItems);

  useEffect(() => {
    const shuffled = [...storeItems].sort(() => 0.5 - Math.random());
    setBestSellers(shuffled.slice(0, 10));
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Best Sellers</h2>
      <MultiCarousel responsive={responsive}>
        {bestSellers.map((item) => (
          <div key={item.id} className="px-2">
            <Link to={`/product/${item.id}`} className="block">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="text-center font-medium">{item.title}</h3>
            </Link>
          </div>
        ))}
      </MultiCarousel>
    </>
  );
}