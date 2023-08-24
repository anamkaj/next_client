import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useVisibleCartProduct } from './hook/visible.cart'

type PropVisibleCartProduct = {
  countProductCart: number
}

export default function VisibleCartProduct({
  countProductCart,
}: PropVisibleCartProduct) {
  const { hiddenCart, position } = useVisibleCartProduct(countProductCart)
  return (
    <div>
      <Link
        href={'/order'}
        hidden={hiddenCart || !position}
        className=' fixed bottom-10 right-5 bg-slate-50 p-4 rounded-full shadow-lg'
      >
        <div className='flex justify-center items-center'>
          <div className='relative py-2'>
            <div className=' bottom-9 absolute left-6'>
              <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                {countProductCart}
              </p>
            </div>
            <AiOutlineShoppingCart className=' w-10 h-10' />
          </div>
        </div>
      </Link>
    </div>
  )
}
