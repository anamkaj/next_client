import React from "react";

type ReviewsBtnProp = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};
export default function ReviewsBtn({ setActiveTab }: ReviewsBtnProp) {
  return (
    <div onClick={() => scroll()}>
      <button
        className={
          " text-gray-600 border-t-2 text-sm font-bold p-4 rounded-r-lg bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 "
        }
        onClick={() => setActiveTab(3)}
      >
        Отзывы
      </button>
    </div>
  );
}
