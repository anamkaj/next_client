import { IProduct } from "@/models/product";
import React from "react";

export default function TablePropsProduct({
  product,
}: {
  product: IProduct[];
}) {
  const paramShort =
    product[0].shortParam.length > 9
      ? product[0].shortParam.slice(0, 9)
      : product[0].shortParam;
  return (
    <>
      <div className="flex flex-wrap flex-col gap-2 mt-5 ">
        {paramShort.map((e, index) => {
          return (
            <div className={"flex flex-wrap"} key={index}>
              <h3 className={"font-sens text-sm text-gray-400"}>
                {Object.keys(e)}
                <span>{" : "}</span>
              </h3>
              <h3 className={"font-light text-sm ml-2"}>
                {Object.values(e).toString().length > 60
                  ? Object.values(e).toString().slice(0, 60) + "..."
                  : Object.values(e)}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
