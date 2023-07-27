import { IProduct } from '@/models/product'
import { addToCart } from '@/store/Redux/Product/cartSlise'
import { useAppDispatch } from '@/store/Redux/storeHook'
import React from 'react'

type PropBtn = {
  product: IProduct[]
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  price: number
}

export default function AddProductToStor({
  product,
  price,
  setActive,
}: PropBtn) {
  const dispatch = useAppDispatch()
  const addProduct = () => {
    dispatch(
      addToCart({
        id: product[0].id,
        title: product[0].title,
        price: price,
        img: product[0].imgLink[0],
        imgFolder: product[0].imgFolder,
        totalCount: 1,
        sale: product[0].discount,
      }),
    )
    setActive(() => true)
  }

  return (
    <button
      className=' uppercase mt-10 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 focus:outline-none'
      onClick={() => addProduct()}
    >
      Добавить в корзину
    </button>
  )
}
