import React, { useState } from 'react'
import {
  incrementCounter,
  decrementCounter,
} from '../../../../../store/Redux/Product/cartSlise'
import { useAppDispatch } from '../../../../../store/Redux/storeHook'
import { IProduct } from '@/models/product'


type PropCount = {
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
  countPopupProduct: number
  product: IProduct[]
}

export const useCountProductStore = ({
  setCountPopupProduct,
  countPopupProduct,
  product,
}: PropCount) => {
  const dispatch = useAppDispatch()

  const incrementProduct = () => {
    dispatch(
      incrementCounter({
        id: product[0].id,
        totalCount: countPopupProduct,
      }),
    )
    setCountPopupProduct((prev) => prev + 1)
  }
  const decrementProduct = () => {
    dispatch(
      decrementCounter({
        id: product[0].id,
        totalCount: countPopupProduct,
      }),
    )
    setCountPopupProduct((prev) => prev - 1)
  }

  return { incrementProduct, decrementProduct }
}
