'use client'
import { useAppDispatch, useAppSelector } from '@/store/Redux/storeHook'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function ShopCardHeader() {
  const countProductCart = useAppSelector((state) => state.cartReducer.cart)
  const dispatch = useAppDispatch()
  //   useEffect(() => {
  //     dispatch(getLocalStore())
  //   }, [])
  return (
    <div className=' hidden md:block'>
      <Link href={'/order'}>
        <div className='flex justify-center items-center'>
          <div className='relative py-2'>
            <div className=' bottom-9 absolute left-6'>
              <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                {countProductCart?.length}
              </p>
            </div>
            <AiOutlineShoppingCart className=' w-10 h-10' />
          </div>
        </div>
      </Link>
    </div>
  )
}
