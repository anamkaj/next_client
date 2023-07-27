"use client";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { BiFilterAlt } from "react-icons/bi";
import { useFilterChange } from "./hook/filter.head.product";
import { selectValue } from "./helper/filter.head";

export default function HeaderFilterProduct({
  pageNumber,
  pageFilter,
}: {
  pageFilter: string;
  pageNumber: string;
}) {
  const { selectChange } = useFilterChange({ pageFilter, pageNumber });

  return (
    <div className="flex justify-between mt-4">
      <div className=" flex gap-4">
        <HiAdjustmentsVertical className=" w-7 h-7" />

        <select
          onChange={(e) => selectChange(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        + focus:ring-blue-500 focus:border-gray-500 block w-[200px] p-1 font-light to-blue-400 outline-none mb-2"
        >
          {selectValue.map((item) => {
            return (
              <option key={item.id} value={item.sort}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      {/* <BiFilterAlt className=" w-7 h-7 cursor-pointer" /> */}

      {/* <div className="flex gap-3">
        <button onClick={() => changeGrid(true)}>
          <BsFillGrid3X3GapFill className="h-5 w-5" />
        </button>
        <button onClick={() => changeGrid(false)}>
          <BsFillGrid3X2GapFill className="h-5 w-5 " />
        </button>
      </div> */}
    </div>
  );
}