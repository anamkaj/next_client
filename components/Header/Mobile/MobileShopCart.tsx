import { useAppDispatch, useAppSelector } from '@/store/Redux/storeHook'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

type MobileShopCartProp = {
  setSetActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileShopCart = ({ setSetActive }: MobileShopCartProp) => {
  const countCart = useAppSelector((state) => state.cartReducer.cart).length
  const dispatch = useAppDispatch()

  //Добавление товаров из localstorege
  // useEffect(() => {
  //   dispatch(getLocalStore())
  // }, [])

  return (
    <>
      <Link href={'/order'} onClick={() => setSetActive(false)}>
        <div className='flex justify-center items-center p-4'>
          <div className='relative py-2'>
            <div className=' bottom-7 absolute left-4'>
              <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                {countCart}
              </p>
            </div>
            <AiOutlineShoppingCart className=' w-8 h-8' />
          </div>
        </div>
      </Link>
    </>
  )
}
