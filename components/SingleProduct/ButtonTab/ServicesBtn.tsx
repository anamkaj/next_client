import React from "react";

type ServicesBtnProp = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

export default function ServicesBtn({ setActiveTab }: ServicesBtnProp) {
  return (
    <div>
      <button
        className={
          " text-gray-600 border-t-2  text-sm font-bold p-4  bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 "
        }
        onClick={() => setActiveTab(4)}
      >
        Все услуги
      </button>
    </div>
  );
}
