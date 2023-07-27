
import { IProduct } from "@/models/product";
import React from "react";

interface BadgesProps {
  product: IProduct;
}

export default function ArticleBadges({ product }: BadgesProps) {
  return (
    <>
      <p className="  whitespace-nowrap right-12 font-light text-xs mt-0 bg-gray-100 p-1 rounded-sm">
        <span className=" text-blue-500">Артикул</span> : {product.article}
      </p>
    </>
  );
}
