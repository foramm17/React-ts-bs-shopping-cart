import React, { useState, useEffect } from "react";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { Slider } from "antd";
import "antd/dist/antd.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface Item {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
  };
}

export function Store() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = useParams<{ category?: string }>();

  const searchResults = location.state?.searchResults;
  const searchTerm = location.state?.searchTerm || "";
  const initialCategory = category || "All";

  const [items, setItems] = useState<Item[]>(
    searchResults || (storeItems as Item[])
  );
  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortOption, setSortOption] = useState<string>("default");

  const categories = [
    "All",
    ...Array.from(new Set(storeItems.map((item: Item) => item.category.name))),
  ];
  const maxPrice = Math.max(...storeItems.map((item: Item) => item.price));

  useEffect(() => {
    let filteredItems: Item[] = searchResults || (storeItems as Item[]);

    if (selectedCategory !== "All") {
      filteredItems = filteredItems.filter(
        (item: Item) => item.category.name === selectedCategory
      );
    }

    filteredItems = filteredItems.filter(
      (item: Item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    switch (sortOption) {
      case "priceLowToHigh":
        filteredItems.sort((a: Item, b: Item) => a.price - b.price);
        break;
      case "priceHighToLow":
        filteredItems.sort((a: Item, b: Item) => b.price - a.price);
        break;
      default:
        break;
    }

    setItems(filteredItems);
  }, [selectedCategory, priceRange, sortOption, searchResults]);

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
      navigate(
        `/store/${location.state.selectedCategory}`,
        { state: { searchResults, searchTerm }, replace: true } 
      );
    }
  }, [location.state, navigate, searchResults, searchTerm]);

  return (
    <div className="px-6 flex flex-col md:flex-row">
      {/* Filters Sidebar */}
      <div className="md:w-1/4 w-full px-4 pt-6 mt-6 mr-4 pb-5 shadow-lg">
        <h2 className="text-md md:text-xl font-semibold mb-4">Categories</h2>
        <ul className="mb-4">
          {categories.map((category) => (
            <li
              key={category}
              className="text-sm md:text-lg p-3 hover:bg-gray-50"
            >
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setSelectedCategory(category);
                  navigate(`/store/${category.toLowerCase()}`, {
                    state: { searchResults, searchTerm },
                  });
                }}
                className={
                  selectedCategory === category
                    ? "text-cyan-600 font-semibold"
                    : "text-gray-600 hover:text-cyan-600"
                }
              >
                {category}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-4">Price Range</h2>
        <Slider
          range
          value={priceRange}
          min={0}
          max={maxPrice}
          onChange={(value: [number, number]) => setPriceRange(value)}
        />
        <div className="mt-2 text-sm text-gray-600">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      {/* Store Items */}
      <div className="md:w-3/4 w-full mt-6 md:mt-0">
        {searchResults && searchResults.length > 0 && (
          <div className="mb-4 text-lg">
            Showing search results for "{searchTerm}"
            <button
              className="ml-4 text-cyan-600 hover:text-cyan-800"
              onClick={() => {
                setItems(storeItems as Item[]);
                navigate("/store", { state: {} });
              }}
            >
              Clear search
            </button>
          </div>
        )}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Store</h1>
          <select
            value={sortOption}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortOption(e.target.value)
            }
            className="px-3 py-2 border rounded-md"
          >
            <option value="default">Default Sorting</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: Item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
