// Отправка заявки из "Быстрый Заказ"

import { FormReq, Person } from '@/models/form'
import { FormServices } from '@/services/post.form'
import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

export const useFormHeaderBtn = () => {
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const sendForm = (form: Person) => {
    const status = FormServices.postFormFeedback(form).then((data) =>
      setResponse(data),
    )
  }

  const onSubmitFormContact: SubmitHandler<Person> = (data: Person) => {
    if (data) {
      const form = {
        phone: Number(data.phone),
        name: data.name,
        email: data.email,
        objectCity: data.objectCity,
        internetTrue: data.internetTrue,
      }
      sendForm(form)
    }
  }

  return { onSubmitFormContact, response }
}
