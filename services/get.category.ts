//Получение категорий для страницы каталога

export const CategoryServices = {
  async getAllCategory(id: string) {
    const data = await fetch(
      `http://tmk-v.ru:8080/api/category/all-category?id=${id}`,
    )
    console.log(data)

    return data.json()
  },

  async getMainCategory() {
    const data = await fetch('http://tmk-v.ru:8080/api/category/null-category')
    return data.json()
  },
}
