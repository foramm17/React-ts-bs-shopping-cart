import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import storeItems from "../data/items.json";

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

type SearchBarProps = {
  className?: string;
};

export function SearchBar({ className = "" }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<StoreItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      const results = storeItems.filter((item) =>
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
      navigate("/store", { state: { searchResults, searchTerm } });
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="bg-white text-black pl-10 pr-4 py-2 sm:w-auto focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-gray-300 transition-colors duration-200"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
    </form>
  );
}
