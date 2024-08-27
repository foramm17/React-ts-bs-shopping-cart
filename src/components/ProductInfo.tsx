import { formatCurrency } from "../utilities/formatCurrency";

interface ProductInfoProps {
  title: string;
  category: string;
  price: number;
  description: string;
}

export function ProductInfo({ title, category, price, description }: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <h3 className="text-xl md:text-lg font-normal mb-4">{category}</h3>
      <p className="text-xl font-semibold text-gray-700 mb-4">
        {formatCurrency(price)}
      </p>
      <p className="text-gray-700 mb-6">{description}</p>
    </div>
  );
}