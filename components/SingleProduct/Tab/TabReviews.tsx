"use client";
import React, { use } from "react";
import { Reviews } from "@/models/reviews";
import ReviewsStar from "./ReviewsStar";
import ReviewsLike from "./ReviewsLike";
import Image from "next/image";
import { useGetReviews } from "@/components/SingleProduct/hook/get.reviews";


export default function TabReviews({ id }: { id: number }) {
  const { reviews, isLoading, error } = useGetReviews(id);
  return (
    <div className="flex flex-col gap-2 justify-start  mt-4">
      {reviews?.map((x) => {
        return (
          <div key={x.id} className="w-full rounded border px-6 py-4">
            <div className=" flex items-center">
              <Image alt={""} width="48" height="48" src="" />
              <div className=" mb-5 ">
                <h3 className=" text-purple-600 font-semibold text-lg  md:text-left ">
                  @Гость
                  {x.userId}
                </h3>
                <div>
                  <span className=" font-extralight text-xs">
                    {x.createdAt.toString().slice(0, 10)}
                  </span>
                </div>
                <ReviewsStar like={x.like} />
              </div>
            </div>
            <p className="mb-4 text-gray-600 text-lg md:text-left ">{x.text}</p>

            {/* Компонент рейтинга  */}

            <div className=" flex items-centre justify-between gap-4">
              {x.like > 1 && (
                <p className=" font-extralight text-xs text-gray-400">
                  {x.like} человека считают этот отзыв полезным
                </p>
              )}
              {x.like == 1 && (
                <p className=" font-extralight text-xs text-gray-400">
                  {x.like} человек считает этот отзыв полезным
                </p>
              )}
              <div className="flex justify-end gap-4">
                <ReviewsLike id={x.id} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
