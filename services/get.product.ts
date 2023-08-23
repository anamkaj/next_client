import { IProduct } from '@/models/product'
import axios from 'axios'

export const ProductServices = {
  async getProduct(
    id: string,
    page: string,
    searchParams: { [key: string]: string },
  ) {
    try {
      const checkPage = (page: string) => {
        if (page !== undefined && Number(page) !== 1) {
          return Number(page) * 25
        } else {
          return 0
        }
      }

      const data = await fetch(
        'http://localhost:4000/api/all/?' +
          new URLSearchParams({
            id: id,
            skip: checkPage(page).toString(),
            take: '25',
            priceMin: searchParams.price_min || '1',
            priceMax: searchParams.price_max || '10000000',
            filter: searchParams.filter || 'popularity_desc',
          }),
      )

      return data.json()
    } catch (error) {
      console.log(error)
    }
  },

  // Получение продуктов для каталога и пагинации + фильтрация из head

  async getProductFilterHead(
    id: string,
    page: string,
    searchParams: { [key: string]: string },
  ) {
    try {
      const checkPage = (page: string) => {
        if (page !== undefined && Number(page) !== 1) {
          return Number(page) * 25
        } else {
          return 0
        }
      }
      console.log(searchParams)

      const data = await fetch(
        `http://localhost:4000/api/all/${
          searchParams.filter || 'popularity_desc'
        }?` +
          new URLSearchParams({
            id: id,
            skip: checkPage(page).toString(),
            take: '25',
            priceMin: searchParams.price_min || '1',
            priceMax: searchParams.price_max || '10000000',
            brand: searchParams.brand || '',
          }),
      )

      return data.json()
    } catch (error) {
      console.log(error)
    }
  },

  async popularProduct() {
    const { data } = await axios.get<IProduct[]>(
      `https://tmk-v.ru:8080/api/popularProduct`,
    )

    return data
  },

  async getSingleProduct(id: number) {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/one?id=${id}`)
      return data.json()
    } catch (error) {
      console.log(error)
    }
  },

  async getAllProductNotFilter(id: string) {
    try {
      const data = await fetch(`http://localhost:4000/api/notFilter?id=${id}`)
      return data.json()
    } catch (error) {
      console.log(error)
    }
  },

  async getBrandFilter(id: string) {
    try {
      const data = await fetch(`http://localhost:4000/api/brandFilter?id=${id}`)
      return data.json()
    } catch (error) {
      console.log(error)
    }
  },
}
