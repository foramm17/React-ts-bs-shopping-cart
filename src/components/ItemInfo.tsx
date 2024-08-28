import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";

type ItemInfoProps = {
  id: number;
  title: string;
  price: number;
};

export function ItemInfo({ id, title, price }: ItemInfoProps) {
  return (
    <div className="flex justify-between items-baseline mb-4">
      <Link
        to={`/product/${id}`}
        className="text-lg font-semibold text-gray-700 hover:text-cyan-300"
      >
        {title}
      </Link>
      <span className="text-gray-600">{formatCurrency(price)}</span>
    </div>
  );
}
