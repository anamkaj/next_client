import { FormReq, IFormOneProductPost, IFormReq } from '@/models/form'
import axios from 'axios'

export const FormServices = {
  async postFormFeedback(params: FormReq) {
    try {
      const { data, status } = await axios.post(
        `https://tmk-v.ru:8080/api/form/order`,
        {
          data: params,
        },
      )
      console.log(status)
      return { data, status, state: 'Форма успешно отправленна' }
    } catch (error) {
      return { state: 'Ошибка отправки формы ' }
    }
  },

  async postFormOneProduct(params: IFormOneProductPost) {
    try {
      const { data, status } = await axios.post(
        `https://tmk-v.ru:8080/api/form/order/oneProduct`,
        {
          data: params,
        },
      )

      return { data, status, state: 'Форма успешно отправленна' }
    } catch (error) {
      return { state: 'Ошибка отправки формы ' }
    }
  },

  async postFormCartPage(params: IFormReq) {
    try {
      const { data, status } = await axios.post(
        `https://tmk-v.ru:8080/api/form/order/cart`,
        {
          data: params,
        },
      )

      return { data, status, state: 'Корзина успешно отправленна' }
    } catch (error) {
      return { state: 'Ошибка отправки корзины ' }
    }
  },

  // async postFormSpecialist(params: FormSpecialist) {
  //   const { data, status } = await axios.post(
  //     `https://tmk-v.ru:8080/api/form/order`,
  //     {
  //       data: params,
  //     },
  //   )

  //   return { data, status }
  // },
}
