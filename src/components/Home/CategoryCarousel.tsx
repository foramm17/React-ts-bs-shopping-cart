import { useNavigate } from "react-router-dom";
import MultiCarousel from "react-multi-carousel";

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

export function CategoryCarousel() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <MultiCarousel responsive={responsive} className="mb-12">
        {categories.map((category) => (
          <div key={category.id} className="px-2">
            <div
              onClick={() =>
                navigate(
                  `/store${
                    category.name.toLowerCase() === "all"
                      ? ""
                      : `/${category.name.toLowerCase()}`
                  }`,
                  {
                    state: { selectedCategory: category },
                  }
                )
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
    </>
  );
}
