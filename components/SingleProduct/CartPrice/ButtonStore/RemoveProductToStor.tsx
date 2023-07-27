import { IProduct } from '@/models/product'
import { removeToCart } from '@/store/Redux/Product/cartSlise'
import { useAppDispatch } from '@/store/Redux/storeHook'
import React from 'react'

type PropBtn = {
  product: IProduct[]
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
  setCountFastOrderProduct: React.Dispatch<React.SetStateAction<number>>
}

export default function RemoveProductToStor({
  product,
  setActive,
  setCountPopupProduct,
  setCountFastOrderProduct,
}: PropBtn) {
  const dispatch = useAppDispatch()
  const removeProduct = () => {
    dispatch(
      removeToCart({
        id: product[0].id,
        title: product[0].title,
        price: product[0].price,
        img: product[0].imgLink[0],
        imgFolder: product[0].imgFolder,
        totalCount: 1,
        sale: product[0].discount,
      }),
    )
    // setActive(() => false);
    // setCountPopupProduct(1);
    // setCountFastOrderProduct(1);
  }
  return (
    <button
      className='uppercase mt-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-100 font-medium rounded-lg text-sm lg:text-base px-5 py-3 text-center '
      onClick={() => removeProduct()}
    >
      Удалить товар из корзины
    </button>
  )
}
