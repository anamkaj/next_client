"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { IProduct } from "@/models/product";

export default function Pagination({ product }: { product: IProduct[] }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const filter = searchParams.get("filter");
  const router = useRouter();
  const countPage = useRef<number>(page !== null ? Number(page) : 1);
  //Подставляем значение из параметрова поиска , так как реф не реагирует на изменение програмных кнопок Назад Вперед из браузера
  const [numberPage, setNumberPage] = useState<number>(Number(page));

  const changeCounterUp = () => {
    countPage.current += 1;
    router.push(`?filter=${filter}&page=${countPage.current}`);
  };
  const changeCounterDown = () => {
    if (countPage.current <= 1) {
      countPage.current = 1;
    } else {
      countPage.current -= 1;
      router.push(`?filter=${filter}&page=${countPage.current}`);
    }
  };

  useEffect(() => {
    setNumberPage(Number(page));
    // countPage.current = Number(page);
  }, [page]);

  return (
    <nav className="mt-4">
      <ul className="list-style-none flex space-x-5">
        <li>
          <button
            onClick={() => changeCounterDown()}
            className="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
          >
            Назад
          </button>
        </li>
        <li>
          <div className="relative block rounded-full bg-slate-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300">
            {numberPage == 0 ? 1 : numberPage}
          </div>
        </li>

        <li>
          <button
            disabled={product.length < 25}
            onClick={() => changeCounterUp()}
            className="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
          >
            Вперед
          </button>
        </li>
      </ul>
    </nav>
  );
}
