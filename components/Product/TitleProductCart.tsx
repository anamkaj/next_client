import React from "react";
import { IProduct } from "@/models/product";
import Link from "next/link";

import urlSlug from "url-slug";

interface TitleProps {
  product: IProduct;
  slug: string;
}

export default function TitleProductCart({ product, slug }: TitleProps) {
  return (
    <>
      <Link
        // onClick={() => countViewInc()}
        href={{
          pathname: `/product/${slug[0]}/${urlSlug(product.title)}/${
            product.id
          }`,
        }}
        className=" flex font-light text-black text-sm text-center mb-2 h-8"
      >
        {product.title.length > 50
          ? product.title.slice(0, 44) + "..."
          : product.title}
      </Link>
    </>
  );
}
