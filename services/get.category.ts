//Получение категорий для страницы каталога

export const CategoryServices = {
  async getAllCategory(id: string) {
    const data = await fetch(
      `https://tmk-v.ru:8080/api/category/all-category?id=${id}`,
    )
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }

    return data.json()
  },

  async getMainCategory() {
    const data = await fetch('https://tmk-v.ru:8080/api/category/null-category')
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
    return data.json()
  },
}
