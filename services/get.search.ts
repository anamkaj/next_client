import { ICategory } from '@/models/category'
import { IProduct } from '@/models/product'
import axios from 'axios'

export const SearchServices = {
  async productSearch(params: string | undefined) {
    try {
      const { data } = await axios.get<IProduct[]>(
        `https://tmk-v.ru:8080/api/searchProduct`,
        {
          params: {
            input: params,
          },
        },
      )
      return data
    } catch (error) {
      throw new Error('ошибка от сервера')
    }
  },

  async categorySearch(params: string | undefined) {
    try {
      const { data } = await axios.get<ICategory[]>(
        `https://tmk-v.ru:8080/api/searchCategory`,
        {
          params: {
            input: params,
          },
        },
      )

      return data
    } catch (error) {
      throw new Error('ошибка от сервера')
    }
  },
}
