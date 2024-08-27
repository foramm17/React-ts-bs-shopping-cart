import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface SizeSelectorProps {
  isClothing: boolean;
  isShoes: boolean;
  selectedSize: string;
  selectedShoeSize: string;
  onSizeChange: (size: string) => void;
  onShoeSizeChange: (size: string) => void;
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const shoeSizes = ["4", "5", "6", "7", "8", "9", "10", "11"];

export function SizeSelector({ 
  isClothing, 
  isShoes, 
  selectedSize, 
  selectedShoeSize, 
  onSizeChange, 
  onShoeSizeChange 
}: SizeSelectorProps) {
  if (!isClothing && !isShoes) return null;

  return (
    <FormControl fullWidth className="mb-4">
      <InputLabel id="size-select-label">Size</InputLabel>
      <Select
        labelId="size-select-label"
        value={isClothing ? selectedSize : selectedShoeSize}
        label="Size"
        onChange={(e) => isClothing ? onSizeChange(e.target.value) : onShoeSizeChange(e.target.value)}
      >
        {(isClothing ? sizes : shoeSizes).map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}