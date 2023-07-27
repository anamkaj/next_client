//Получение категорий для страницы каталога

export const CategoryServices = {
  async getAllCategory(id: string) {
    const data = await fetch(
      `https://tmk-v.ru:8080/api/category/all-category?id=${id}`
    );

    return data.json();
  },

  async getMainCategory() {
    const data = await fetch(
      "https://tmk-v.ru:8080/api/category/null-category"
    );
    return data.json();
  },
};
