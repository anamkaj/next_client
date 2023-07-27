import { IProduct } from "@/models/product";
import axios from "axios";

export const ProductServices = {
  async getProduct(id: string, page: string) {
    try {
      const checkPage = (page: string) => {
        if (page !== undefined && Number(page) !== 1) {
          return Number(page) * 25;
        } else {
          return 0;
        }
      };
      const paramsReq = {
        id: id,
        skip: checkPage(page),
        take: 25,
        // filter: "popularity_desc",
      };

      const data = await fetch(
        `https://tmk-v.ru:8080/api/all/?id=${id}&skip=${paramsReq.skip}&take=${paramsReq.take}`
      );
      return data.json();
    } catch (error) {
      console.log(error);
    }
  },

  // Получение продуктов для каталога и пагинации + фильтрация из head

  async getProductFilterHead(id: string, page: string, filter: string) {
    try {
      const checkPage = (page: string) => {
        if (page !== undefined && Number(page) !== 1) {
          return Number(page) * 25;
        } else {
          return 0;
        }
      };
      const paramsReq = {
        id: id,
        skip: checkPage(page),
        take: 25,
        filter: filter,
      };

      const data = await fetch(
        `https://tmk-v.ru:8080/api/all/${paramsReq.filter}/?id=${id}&skip=${paramsReq.skip}&take=${paramsReq.take}`
      );
      return data.json();
    } catch (error) {
      console.log(error);
    }
  },

  async popularProduct() {
    const { data } = await axios.get<IProduct[]>(
      `https://tmk-v.ru:8080/api/popularProduct`
    );

    return data;
  },

  async getSingleProduct(id: number) {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/one?id=${id}`);
      return data.json();
    } catch (error) {
      console.log(error);
    }
  },
};
