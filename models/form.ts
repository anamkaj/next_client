export type Person = {
  name: string
  phone: number
  email?: string
  surname?: string
  objectCity?: boolean
  internetTrue?: boolean
}

export type OpenForm = {
  name: string
  phone: number
}

export interface IFormCartPage extends Person {
  price: number
  data: DataCart[]
}

export interface IFormOneProduct extends Person {
  article: number
  title: string
  price: number
  id: number
}

type DataCart = {
  title: string
  price: number
  count: number
  sale: number
}

export type FormReq = {
  phone: number
  name: string
  email?: string
  objectCity?: boolean
  internetTrue?: boolean
}

export interface IFormReq extends FormReq {
  surname?: string
  data: DataCart[]
}

export interface IFormOneProductPost extends FormReq {
  article: number
  title: string
  price: number
  id: number
}
