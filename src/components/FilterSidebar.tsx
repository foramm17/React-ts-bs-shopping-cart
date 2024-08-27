import React from "react";
import { Select } from "antd";
import { CategoryList } from "./CategoryList";
import { PriceRangeSlider } from "./PriceRangeSlider";

const { Option } = Select;

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  maxPrice: number;
}

export function FilterSidebar({ 
  categories, 
  selectedCategory, 
  handleCategoryChange, 
  priceRange, 
  setPriceRange, 
  maxPrice 
}: FilterSidebarProps) {
  return (
    <div className="md:w-1/5 w-full px-4 pt-6 mt-6 mr-4 pb-5 shadow-lg">
      <h2 className="text-md md:text-xl font-semibold mb-4">Categories</h2>
      {/* Mobile dropdown */}
      <div className="md:hidden">
        <Select
          className="w-full mb-4"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((cat) => (
            <Option key={cat} value={cat}>
              {cat}
            </Option>
          ))}
        </Select>
      </div>
      {/* Desktop/Tablet list */}
      <CategoryList 
        categories={categories} 
        selectedCategory={selectedCategory} 
        handleCategoryChange={handleCategoryChange} 
      />

      <h2 className="text-xl font-semibold mb-4">Price Range</h2>
      <PriceRangeSlider 
        priceRange={priceRange} 
        setPriceRange={setPriceRange} 
        maxPrice={maxPrice} 
      />
    </div>
  );
}