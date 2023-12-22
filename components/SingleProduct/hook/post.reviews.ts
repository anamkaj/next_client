import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { SendReviews } from '@/models/reviews'
import { Counters } from '@/services/reviews/post.count.view.inc'
import { ReviewsServices } from '@/services/reviews/reviews'
import useSWR from 'swr'
import { useState } from 'react'

// Отправка на сервер комментария и сброс формы

type SendReviewsProp = {
  id: number
  reset: UseFormReset<SendReviews>
}

export const usePostReviewsToServer = ({ id, reset }: SendReviewsProp) => {
  const [data, setData] = useState()
  const countUp = () => {
    Counters.countReviewInc(id)
  }

  // Отправка формы на бэк

  // const {
  //   mutate: addReviews,
  //   error,
  //   data,
  // } = useSWR('addReviews', (data: SendReviews) =>
  //   ReviewsServices.sendReviews(data),
  // )

  const sendReviews = async (comment: SendReviews) => {
    const { data, status } = await ReviewsServices.sendReviews(comment)
    return setData(data)
  }

  const onSubmit: SubmitHandler<SendReviews> = (data: SendReviews) => {
    if (data) {
      sendReviews(data)
      reset()
      countReviewInc()
    }
  }

  // Увеличение счетчика комментариев

  const countReviewInc = () => {
    setTimeout(() => {
      countUp()
    }, 2000)
  }

  return { onSubmit, data }
}
