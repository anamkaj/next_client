"use client";
import { IProduct } from "@/models/product";
import { motion } from "framer-motion";
import React from "react";
import { variants, variantsTableParams } from "../UI/animation/category";

export default function TableParamsProduct({
  product,
}: {
  product: IProduct[];
}) {
  return (
    <table className="min-w-full text-left text-sm font-light mt-4 ">
      <motion.tbody initial="hidden" animate="visible" variants={variants}>
        {product[0].paramsProduct.map((x, index) => {
          return (
            <motion.tr
              custom={index}
              variants={variantsTableParams}
              key={index}
              className=" hover:bg-gray-100 "
            >
              <th className=" text-sm font-light  border-b border-neutral-300 items-center whitespace-nowrap mobile:whitespace-normal">
                {Object.keys(x)}
              </th>
              <td className=" text-sm font-light border-b border-neutral-300 mobile:whitespace-normal ">
                {Object.values(x)}
              </td>
            </motion.tr>
          );
        })}
      </motion.tbody>
    </table>
  );
}
