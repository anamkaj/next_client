import { useState, useEffect } from 'react'
import { Like } from '@/models/reviews'
import { ReviewsServices } from '@/services/reviews/reviews'
import useSWR from 'swr'

// Отправка на сервер комментария и сброс формы

export const usePostReviewsRating = (id: number) => {
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)

  const { mutate: incLike } = useSWR('incLike', () =>
    ReviewsServices.incLike({ commentId: id }),
  )
  const { mutate: decLike } = useSWR('decLike', () =>
    ReviewsServices.incDislike({ commentId: id }),
  )

  useEffect(() => {
    if (like === true) {
      incLike()
    }
  }, [like])

  useEffect(() => {
    if (dislike === true) {
      decLike()
    }
  }, [dislike])

  return { incLike, setLike, like, dislike, setDislike }
}
