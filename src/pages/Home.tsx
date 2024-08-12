// src/pages/Home.tsx
// import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Discover our latest summer styles",
    image: "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out our fresh new products",
    image: "https://i.imgur.com/jb5Yu0h.jpeg"
  },
  // Add more items as needed
];

const categories = [
  { id: 1, name: "Clothes", image: "https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, name: "Accessories", image: "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Electronics", image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Furniture", image: "https://images.pexels.com/photos/609768/pexels-photo-609768.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Shoes", image: "https://images.pexels.com/photos/1909014/pexels-photo-1909014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 6, name: "Miscellaneous", image: "https://images.pexels.com/photos/683929/pexels-photo-683929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 7, name: "Makeup", image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const categorySettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold my-6">Welcome to ShopLoop</h1>

      {/* Main Carousel */}
      <Slider {...carouselSettings} className="mb-12">
        {carouselItems.map(item => (
          <div key={item.id} className="relative">
            <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
              <p className="text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Category Slider */}
      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <Slider {...categorySettings} className="mb-12">
        {categories.map(category => (
          <div key={category.id} className="px-2">
            <Link to={`/store?category=${category.name}`} className="block">
              <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="text-center font-medium">{category.name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}