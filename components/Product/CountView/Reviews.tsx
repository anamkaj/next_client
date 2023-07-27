import { IProduct } from "@/models/product";
import Link from "next/link";
import React from "react";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

interface IProductProps {
  product: IProduct;
}

export default function Reviews({ product }: IProductProps) {
  return (
    <div className="hidden md:block">
      {product.countReviews !== 0 ? (
        <Link
          href={""}
          className="flex text-sm font-light underline hover:no-underline "
        >
          <span className=" mr-2 ">
            <HiOutlineChatBubbleBottomCenterText className=" w-5 h-5" />
          </span>
          {product.countReviews} Отзыва{" "}
        </Link>
      ) : (
        <span className="text-xs lg:text-sm font-light ">Нет отзывов</span>
      )}
    </div>
  );
}
