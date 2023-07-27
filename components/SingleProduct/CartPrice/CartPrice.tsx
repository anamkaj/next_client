import { IProduct } from '@/models/product'
import React from 'react'
import { BsGear } from 'react-icons/bs'
import CartHeader from './CartHeader'
import { useAppSelector } from '@/store/Redux/storeHook'
import Price from './Price'
import AddProductToStor from './ButtonStore/AddProductToStor'
import RemoveProductToStor from './ButtonStore/RemoveProductToStor'
import OrderOneClick from './OrderOneClick'

type PropCartPrise = {
  product: IProduct[]
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
  setCountFastOrderProduct: React.Dispatch<React.SetStateAction<number>>
}

export default function CartPrice({
  product,
  setActive,
  setCountPopupProduct,
  setFastOrderModel,
  setCountFastOrderProduct,
}: PropCartPrise) {
  const store = useAppSelector((state) => state.cartReducer.cart)
  const price = Math.round(product[0].price / (product[0].discount * 0.11))
  //поиск по корзине , добавлен ли товар ранее в карзину , тогда стиль кнопки меняется
  const checkCartStore =
    store.length > 0 ? store.find((e) => e.id === product[0].id) : undefined

  return (
    <div className='flex flex-wrap gap-6 justify-start lg:justify-end'>
      <div className='flex flex-col mt-5 w-full shadow-lg border rounded-lg p-4 h-[370px]'>
        <>
          <CartHeader product={product} />
          <div className=' flex gap-1 items-center justify-end'>
            <BsGear className=' h-3 w-3' />
            <p className=' text-xs '>Производитель: {product[0].brend}</p>
          </div>
        </>

        {/*Цена со скидкой*/}

        <Price product={product} price={price} />

        {/*кнопка добавить в корзину */}

        {checkCartStore == undefined ? (
          <AddProductToStor
            product={product}
            setActive={setActive}
            price={product[0].price}
          />
        ) : (
          <RemoveProductToStor
            product={product}
            setActive={setActive}
            setCountPopupProduct={setCountPopupProduct}
            setCountFastOrderProduct={setCountFastOrderProduct}
          />
        )}

        {/* Заказ в один клик */}

        <OrderOneClick setFastOrderModel={setFastOrderModel} />
      </div>
    </div>
  )
}
