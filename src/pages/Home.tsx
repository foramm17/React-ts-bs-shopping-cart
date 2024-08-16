import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import storeItems from "../data/items.json";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItems = [
  {
    id: 1,
    title: "Everything You Need, In One Place",
    description:
      "From electronics to fashion, home essentials to unique finds, we've got you covered",
    image: "/imgs/slide1.jpg",
  },
  {
    id: 2,
    title: "Tech That Inspires",
    description:
      "Discover the latest smartphones, laptops, gaming consoles, and more.",
    image: "/imgs/slide2.jpg",
  },
  {
    id: 3,
    title: "Create Your Dream Home",
    description:
      "Explore our range of furniture, home decor, and kitchen essentials.",
    image: "/imgs/slide3.jpg",
  },
];

const categories = [
  {
    id: 1,
    name: "Clothes",
    image:
      "https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Accessories",
    image:
      "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Electronics",
    image:
      "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Furniture",
    image:
      "https://images.pexels.com/photos/609768/pexels-photo-609768.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Shoes",
    image:
      "https://images.pexels.com/photos/1909014/pexels-photo-1909014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Miscellaneous",
    image:
      "https://images.pexels.com/photos/683929/pexels-photo-683929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Makeup",
    image:
      "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

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

export function Home() {
  const navigate = useNavigate();
  const [bestSellers, setBestSellers] = useState(storeItems);

  useEffect(() => {
    const shuffled = [...storeItems].sort(() => 0.5 - Math.random());
    setBestSellers(shuffled.slice(0, 10));
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold my-1">Welcome to ShopLoop</h1>

      <Carousel autoplay className="mb-12">
        {carouselItems.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-center text-sm sm:text-md md:text-lg">{item.description}</p>
              <Link
                to="/store"
                className="bg-black text-cyan-300 mt-4 py-1 px-4 text-md hover:bg-gray-600 transition  sm:w-auto text-center"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        ))}
      </Carousel>

      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <MultiCarousel responsive={responsive} className="mb-12">
        {categories.map((category) => (
          <div key={category.id} className="px-2">
            <div
              onClick={() =>
                navigate(`/store${category.name.toLowerCase() === 'all' ? '' : `/${category.name.toLowerCase()}`}`, {
                  state: { selectedCategory: category }
                })
              }
              className="cursor-pointer block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="text-center font-medium">{category.name}</h3>
            </div>
          </div>
        ))}
      </MultiCarousel>

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
    </div>
  );
}
