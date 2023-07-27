import { IProduct } from "@/models/product";
import React from "react";
import DiscountBadges from "../Badges/DiscountBadges";

type PropPrice = {
  price: number;
  product: IProduct[];
};

export default function Price({ product, price }: PropPrice) {
  return (
    <div>
      {/* <WholeSaleBadges product={product} /> */}
      <>
        <DiscountBadges product={product} />
        <p className="flex items-center mt-5 font-bold text-3xl ">
          {price.toLocaleString("ru")}₽
        </p>
      </>
    </div>
  );
}
