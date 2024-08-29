import { StoreItem } from "../StoreItem/StoreItem";

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

interface StoreItemGridProps {
  items: Item[];
}

export function StoreItemGrid({ items }: StoreItemGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  );
}
