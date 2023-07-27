import { IProduct } from "@/models/product";
import React from "react";

export default function DiscountBadges({ product }: { product: IProduct[] }) {
  return (
    <div className={" mt-2"}>
      <span className=" text-white text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500  rounded ">
        {" "}
        -{product[0].discount} %
      </span>
      <p className="line-through text-right animate-fade-left inline-block py-2 px-4 leading-none whitespace-nowrap font-light text-gray-900 text-xl rounded">
        {product[0].price.toLocaleString("ru")} ₽ за 1 шт.
      </p>
    </div>
  );
}
