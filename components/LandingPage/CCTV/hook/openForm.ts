import { OpenForm } from '@/models/form'
import { FormServices } from '@/services/post.form'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

export const useOpenForm = () => {
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const sendForm = (form: OpenForm) => {
    const status = FormServices.postFormFeedback(form).then((data) =>
      setResponse(data),
    )
  }

  const onSubmitOpenForm: SubmitHandler<OpenForm> = (data: OpenForm) => {
    if (data) {
      const form = {
        phone: Number(data.phone),
        name: data.name,
      }
      sendForm(form)
    }
  }

  return { onSubmitOpenForm, response }
}
