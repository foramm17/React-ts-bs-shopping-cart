import React from "react";
import { Slider } from "antd";

interface PriceRangeSliderProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  maxPrice: number;
}

export function PriceRangeSlider({ priceRange, setPriceRange, maxPrice }: PriceRangeSliderProps) {
  return (
    <>
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
    </>
  );
}