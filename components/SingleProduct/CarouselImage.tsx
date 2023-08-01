"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/models/product";
import FsLightbox from "fslightbox-react";

export default function CarouselImage({ product }: { product: IProduct[] }) {
  const [img, setImg] = useState({ id: 0, url: "" });
  const [toggler, setToggler] = useState(false);
  const handleClick = (index: number, url: string) => {
    setImg({ id: index, url: url });
  };
  useEffect(() => {
    setImg({
      id: 0,
      url: `http://tmk-v.ru:8080/img/${product[0].imgFolder}/${product[0].imgLink[0]}`,
    });
  }, [product]);
  return (
    <div className=" flex flex-col box-border  mt-5 gap-2 p-4">
      {
        <img
          src={img.url}
          alt={product[0].altImg}
          onClick={() => {
            setToggler(!toggler);
          }}
        />
      }
      <FsLightbox toggler={toggler} sources={[img.url]} key={img.id} />
      <div className={"flex gap-4 "}>
        {product[0].imgLink?.map((data, index) => {
          return (
            <div
              className={
                index === img.id
                  ? " w-[80px] h-[80px] box-border border-2 border-gray-400"
                  : " w-[80px] h-[80px] box-border border-2 border-gray-100 "
              }
              key={index}
            >
              <img
                src={`http://tmk-v.ru:8080/img/${product[0].imgFolder}/${data}`}
                alt={product[0].altImg}
                key={index}
                onClick={() => {
                  handleClick(
                    index,
                    `http://tmk-v.ru:8080/img/${product[0].imgFolder}/${data}`
                  );
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
