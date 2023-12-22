import { ProductServices } from "@/services/get.product";
import useSWR from "swr";
import { IProduct } from "../../../models/product";
import { ReviewsServices } from "@/services/reviews/reviews";
import { Reviews } from "@/models/reviews";

// export const usePopularProduct = () => {
//   const { data, isLoading } = useSWR<IProduct[]>("popularProduct", () =>
//     ProductServices.popularProduct()
//   );
//   return { data, isLoading };
// };

export const useReviewsCarousel = () => {
  const { data, isLoading } = useSWR<Reviews[]>("reviewsProduct", () =>
    ReviewsServices.getReviewsCarousel()
  );
  return { data, isLoading };
};
