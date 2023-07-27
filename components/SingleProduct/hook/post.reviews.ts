
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { SendReviews } from "@/models/reviews";
import { Counters } from "@/services/reviews/post.count.view.inc";
import { ReviewsServices } from "@/services/reviews/reviews";
import useSWR from "swr";

// Отправка на сервер комментария и сброс формы

type SendReviewsProp = {
  id: number;
  reset: UseFormReset<SendReviews>;
};

export const usePostReviewsToServer = ({ id, reset }: SendReviewsProp) => {
  // Хук увеличения счетчика отзывов
  const { mutate: countInc } = useSWR("addCountReviews", (id: number) =>
    Counters.countReviewInc(id)
  );
  // Отправка формы на бэк
  
  const {
    mutate: addReviews,
    error,
    data,
  } = useSWR("addReviews", (data: SendReviews) =>
    ReviewsServices.sendReviews(data)
  );

  const onSubmit: SubmitHandler<SendReviews> = (data: SendReviews) => {
    if (data) {
      addReviews();
      reset();
      countReviewInc();
    }
  };

  // Увеличение счетчика комментариев

  const countReviewInc = () => {
    setTimeout(() => {
      countInc();
    }, 2000);
  };

  return { onSubmit, error, data };
};
