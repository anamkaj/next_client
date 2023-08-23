export interface IProduct {
  id: number;
  title: string;
  type: string;
  paramsProduct: ParamsProduct;
  shortParam: ShortParam;
  price: number;
  descriptionOne: string;
  categoryId: number;
  imgLink: string[];
  altImg: string;
  tag: string[];
  rating: number;
  watchProduct: number;
  inStock: boolean;
  quantity: number;
  discount: number;
  brand: string;
  subCategoryId: number;
  article: number;
  imgFolder: string;
  countReviews: number;
  buyAlready: number;
  brendImg: string;
}

type ShortParam = {
  [key: string]: string;
};

type ParamsProduct = {
  [key: string]: string;
};
