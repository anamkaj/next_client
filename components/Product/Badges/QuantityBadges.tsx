import { IProduct } from "@/models/product";
import React from "react";

interface BadgesProps {
  product: IProduct;
}

export default function QuantityBadges({ product }: BadgesProps) {
  return (
    <>
      <p className="hidden left-14 lg:inline-block py-0.5 px-1.5 leading-none whitespace-nowrap font-medium bg-gray-100 text-black text-[10px] rounded">
        В наличии
        <span className="inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-light bg-red-600 text-white rounded ml-2">
          {product.quantity}
        </span>
      </p>
    </>
  );
}
