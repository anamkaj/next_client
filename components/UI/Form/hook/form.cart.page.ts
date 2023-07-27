import { SubmitHandler } from 'react-hook-form'
import { useAppSelector } from '@/store/Redux/storeHook'
import { IFormCartPage, Person } from '@/models/form'
import { FormServices } from '@/services/post.form'
import { useState } from 'react'

export const useFormCartPage = () => {
  const storCart = useAppSelector((state) => state.cartReducer.cart)
  const totalPriceCart = useAppSelector((state) => state.cartReducer.total)
  const [response, setResponse] = useState<
    | {
        data: any
        status: number
        state: string
      }
    | { state: string; data?: undefined; status?: undefined }
  >()

  const cart = storCart.map((x) => {
    return {
      title: x.title,
      count: x.totalCount,
      price: x.price,
      sale: x.sale,
    }
  })

  // const mutation = useMutation({
  //   mutationFn: (data: IFormCartPage) => FormServices.postFormCartPage(data),
  //   mutationKey: ['pageCart'],
  // })

  const sendForm = (form: IFormCartPage) => {
    const status = FormServices.postFormCartPage(form).then((data) =>
      setResponse(data),
    )
  }

  const onSubmitOrderCart: SubmitHandler<Person> = (data: Person) => {
    if (data && storCart) {
      const form = {
        phone: Number(data.phone),
        name: data.name,
        surname: data.surname,
        email: data.email,
        price: totalPriceCart,
        data: cart,
      }
      sendForm(form)
    }
  }
  return { onSubmitOrderCart, response }
}
