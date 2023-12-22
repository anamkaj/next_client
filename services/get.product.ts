export const ProductServices = {
  // Получение продуктов для каталога и пагинации + фильтрация из head

  async getProductFilterHead(
    id: string,
    page: string,
    searchParams: { [key: string]: string },
  ) {
    const pageNumber = (Number(page) - 1) * 25
    try {
      const data = await fetch(
        `http://localhost:4000/api/all/sort?` +
          new URLSearchParams({
            id: id,
            skip: pageNumber.toString(),
            take: '25',
            priceMin: searchParams.price_min || '1',
            priceMax: searchParams.price_max || '10000000',
            brand: searchParams.brand || '',
            paramFilter: searchParams.paramfilter || '',
            sortParams: searchParams.sort || 'popularity_desc',
          }),
      )

      return data.json()
    } catch (error) {
      console.log(error)
    }
  },
  // ______________________________________________________________________

  async popularProduct() {
    try {
      const data = await fetch(`http://localhost:4000/api/popularProduct`)

      return data.json()
    } catch (error) {
      console.log(error)
    }
  },
  // ______________________________________________________________________
  // Получение одного товара
  async getSingleProduct(id: number) {
    try {
      const data = await fetch(`http://localhost:4000/api/one?id=${id}`)
      return data.json()
    } catch (error) {
      console.log(error)
    }
  },
  // ______________________________________________________________________
  // Получение колличества всех товаро в группе + минмальная и максимальная цена товаров в группу  без фильтрации
  async getAllProductNotFilter(id: string) {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/notFilter?id=${id}`)
      return data.json()
    } catch (error) {
      console.log(error)
    }
  },
  // ______________________________________________________________________

  // ______________________________________________________________________
  async getFilterParamsProduct(
    id: string,
    searchParams: { [key: string]: string },
  ) {
    try {
      const data = await fetch(
        `http://localhost:4000/api/filterParamsProduct?` +
          new URLSearchParams({
            id: id,
            priceMin: searchParams.price_min || '1',
            priceMax: searchParams.price_max || '10000000',
            brand: searchParams.brand || '',
            paramFilter: searchParams.paramfilter || '',
          }),
      )

      return data.json()
    } catch (error) {
      console.log(error)
    }
  },
}
