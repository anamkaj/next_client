
import { OpenFormProp } from '@/models/form'
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

  const sendForm = (form: OpenFormProp) => {
    const status = FormServices.postFormFeedback(form).then((data) =>
      setResponse(data),
    )
  }

  const onSubmitOpenForm: SubmitHandler<OpenFormProp> = (data: OpenFormProp) => {
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
