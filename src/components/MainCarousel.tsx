import { Carousel } from "antd";
import { Link } from "react-router-dom";

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

  
export function MainCarousel() {
  return (
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
              className="bg-black text-cyan-300 mt-4 py-1 px-4 text-md hover:bg-gray-600 transition sm:w-auto text-center"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}