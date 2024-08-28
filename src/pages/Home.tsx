import { MainCarousel } from "../components/Home/MainCarousel";
import { CategoryCarousel } from "../components/Home/CategoryCarousel";
import { BestSellersCarousel } from "../components/Home/BestSellersCarousel";

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