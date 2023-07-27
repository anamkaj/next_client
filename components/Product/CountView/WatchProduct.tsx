import { IProduct } from "@/models/product";
import React from "react";
import { FaEye } from "react-icons/fa";

interface WatchProps {
  product: IProduct;
}

export default function WatchProduct({ product }: WatchProps) {
  return (
    <div className=" flex items-center">
      <div className=" font-light text-xs rounded-l-lg  flex items-center">
        <span className=" mr-2 ">
          <FaEye className=" w-5 h-5" />
        </span>
      </div>
      <div className="bg-white font-light text-xs rounded-r-lg hover:text-blue-500">
        {product.watchProduct}
      </div>
    </div>
  );
}
