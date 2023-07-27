import { IProduct } from "@/models/product";
import React from "react";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import WatchProduct from "./WatchProduct";
import Reviews from "./Reviews";

interface CountProps {
  product: IProduct;
}

export default function CountView({ product }: CountProps) {
  return (
    <div className="flex items-center mt-6 lg:mt-2 ">
      {/*Счетчик просмотров*/}
      <WatchProduct product={product} />

      {/*Счетчик Рейтинг и отзывы*/}
      <div>
        <div className="flex items-center p-2">
          {product.rating > 2 ? (
            <p className=" flex ml-2 text-sm font-bold text-red-500">
              <span className=" mr-2 ">
                <HiOutlineArrowTrendingUp className=" w-5 h-5" />
              </span>
              {product.rating}
            </p>
          ) : (
            <p className=" flex ml-2 text-sm font-bold text-violet-400">
              <span className=" mr-2 ">
                <HiOutlineArrowTrendingUp className=" w-5 h-5" />
              </span>
              {product.rating}
            </p>
          )}
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
          <Reviews product={product} />
        </div>
      </div>
    </div>
  );
}
