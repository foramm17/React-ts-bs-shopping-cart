import { MainCarousel } from "../components/MainCarousel";
import { CategoryCarousel } from "../components/CategoryCarousel";
import { BestSellersCarousel } from "../components/BestSellersCarousel";

export function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold my-1">Welcome to ShopLoop</h1>
      <MainCarousel />
      <CategoryCarousel />
      <BestSellersCarousel />
    </div>
  );
}