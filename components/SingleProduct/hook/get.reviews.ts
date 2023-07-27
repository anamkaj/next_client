import { Reviews } from "@/models/reviews";
import { ReviewsServices } from "@/services/reviews/reviews";
import useSWR from "swr";

// получение отзывов о товаре

export function useGetReviews(id: number) {
  const {
    data: reviews,
    error,
    isLoading,
  } = useSWR<Reviews[]>("getReviews", () => ReviewsServices.getReviews(id));

  return { reviews, error, isLoading };
}
