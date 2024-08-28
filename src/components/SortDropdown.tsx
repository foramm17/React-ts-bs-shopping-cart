import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface SortDropdownProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
  return (
    <Select
      className="w-48"
      value={sortOption}
      onChange={(value: string) => setSortOption(value)}
    >
      <Option value="default">Default Sorting</Option>
      <Option value="priceLowToHigh">Price: Low to High</Option>
      <Option value="priceHighToLow">Price: High to Low</Option>
    </Select>
  );
}
