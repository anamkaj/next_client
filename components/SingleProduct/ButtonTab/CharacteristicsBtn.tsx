"use client";
import React from "react";

type CharacteristicsBtnProp = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

export default function CharacteristicsBtn({
  setActiveTab,
}: CharacteristicsBtnProp) {
  return (
    <div>
      <button
        className={
          " text-gray-600 border-t-2  text-sm font-bold p-4 rounded-l-lg bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-900"
        }
        onClick={() => setActiveTab(2)}
      >
        Все характеристики
      </button>
    </div>
  );
}
