import { ICategory } from '@/models/category'
import { IProduct } from '@/models/product'

export interface IProductCart {
  categoryId: string
  page: string
  searchParams: { [key: string]: string }
  slug: string
}

export type PropsSubCategory = {
  category: ICategory[]
  categoryId: string
}

export type PropBreadCrumbs = {
  categoryId: string
  category: ICategory[]
}

export type FilterComponentProp = {
  categoryId: string
  searchParams: {
    [key: string]: string
  }
}

export type CartProductProp = {
  categoryId: string
  page: string
  searchParams: { [key: string]: string }
  slug: string
}

export type ProductCartProp = {
  product: IProduct[]
  slug: string
}
