"use client";
import React, { useEffect, useState } from "react";
import ProductCart from "@/components/Product";
import { IProduct } from "@/models/product";
import Carousel from "nuka-carousel";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./slider.css";
import { useMediaQuery } from "react-responsive";

type CarouselsProp = {
  product: IProduct[] | undefined;
};

export default function CarouselProduct({ product }: CarouselsProp) {
  const [countSlide, setCountSlide] = useState(4);
  const [cellSpacing, setCellSpacing] = useState(10);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 480px)" });
  const isFullScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMidScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const params = {
    slidesToShow: countSlide,
    autoplay: true,
    defaultControlsConfig: {
      containerClassName: "containerSlider",
      nextButtonClassName: "nextButtonSlider",
      prevButtonClassName: "prevButtonSlider",
      pagingDotsClassName: "pagingDotsSlider",
      nextButtonText: <AiOutlineDoubleRight />,
      prevButtonText: <AiOutlineDoubleLeft />,
    },
    wrapAround: true,
    disableAnimation: false,
    className: "sliderStyle",
    cellSpacing: cellSpacing,
    speed: 1000,
  };

  useEffect(() => {
    if (isMobileScreen) {
      setCountSlide(1);
      setCellSpacing(10);
    } else if (isFullScreen) {
      setCountSlide(4);
    } else if (isMidScreen) {
      setCountSlide(3);
    }
  });
  return (
    <div className=" relative shadow-lg">
      <div>
        <Carousel {...params}>
          {product?.map((x) => (
            <ProductCart key={x.id} product={x} slug={""} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
