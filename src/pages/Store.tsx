import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import storeItems from "../data/items.json";
import { FilterSidebar } from "../components/FilterSidebar";
import { SearchResults } from "../components/SearchResults";
import { SortDropdown } from "../components/SortDropdown";
import { StoreItemGrid } from "../components/StoreItemGrid";

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

interface LocationState {
  searchResults?: Item[];
  searchTerm?: string;
  selectedCategory?: string;
}

export function Store() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = useParams<{ category?: string }>();

  const locationState = location.state as LocationState;
  const searchResults = locationState?.searchResults;
  const searchTerm = locationState?.searchTerm || "";
  const initialCategory = category || locationState?.selectedCategory || "All";

  const [items, setItems] = useState<Item[]>([]);
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
        (item: Item) =>
          item.category.name.toLowerCase() === selectedCategory.toLowerCase()
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
    if (category) {
      setSelectedCategory(category);
    } else if (locationState?.selectedCategory) {
      setSelectedCategory(locationState.selectedCategory);
    }
  }, [category, locationState]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    navigate(
      `/store${value.toLowerCase() === "all" ? "" : `/${value.toLowerCase()}`}`,
      {
        state: { searchResults, searchTerm, selectedCategory: value },
      }
    );
  };

  const clearSearch = () => {
    setItems(storeItems as Item[]);
    navigate("/store", { state: {} });
  };

  return (
    <div className="px-6 flex flex-col md:flex-row">
      <FilterSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        maxPrice={maxPrice}
      />

      <div className="md:w-4/5 w-full mt-6 md:mt-0">
        <SearchResults
          searchResults={searchResults}
          searchTerm={searchTerm}
          clearSearch={clearSearch}
        />
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Store</h1>
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </div>

        <StoreItemGrid items={items} />
      </div>
    </div>
  );
}
