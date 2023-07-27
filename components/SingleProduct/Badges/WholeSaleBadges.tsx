import { IProduct } from "@/models/product";
import React from "react";

export default function WholeSaleBadges({ product }: { product: IProduct[] }) {
  return (
    <div className={"flex gap-4 mt-2"}>
      <p className=" animate-fade-left inline-block py-1 px-4 leading-none whitespace-nowrap font-light bg-amber-300 text-black text-[14px] rounded">
        Оптом выгоднее на{" "}
        <span className=" inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-light bg-green-500 text-white rounded ml-2">
          {product && Math.round(product[0].price * 0.1).toFixed(2)} ₽
        </span>
      </p>
    </div>
  );
}
