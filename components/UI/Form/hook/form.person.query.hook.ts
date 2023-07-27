// Отправка заявки из "Быстрый Заказ"

import { SubmitHandler } from 'react-hook-form'
import { IProduct } from '@/models/product'
import { FormReq, IFormOneProductPost, Person } from '@/models/form'
import { FormServices } from '@/services/post.form'
import { useState } from 'react'

type PropFormHook = {
  product?: IProduct[]
  price?: number
}

export const useFormRequest = ({ product, price }: PropFormHook) => {
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const sendOneProduct = (oneProduct: IFormOneProductPost) => {
    const status = FormServices.postFormOneProduct(oneProduct).then((data) =>
      setResponse(data),
    )
  }

  //Отправка быстрой покупки одного товара
  const onSubmitFastOrder: SubmitHandler<Person> = (data: Person) => {
    if (product) {
      const oneProduct = {
        article: product[0].article,
        title: product[0].title,
        price: price || NaN,
        phone: Number(data.phone),
        name: data.name,
        email: data.email || '',
        id: product[0].id,
      }
      sendOneProduct(oneProduct)
    }
  }

  return { onSubmitFastOrder, response }
}
