'use client'
import ProviderStore from '@/provider/Product/ProviderStor'
import { useAppSelector } from '@/store/Redux/storeHook'
import React from 'react'
import { FormCart } from '../UI/Form/FormCart/FormCart'
import AddedProducts from './AddedProducts'
import EmptyBasket from './EmptyBasket'
import HeaderCartPay from './HeaderCartPay'

export default function PageCart() {
  const data = useAppSelector((state) => state.cartReducer.cart)
  return (
    <div className='container mx-auto p-2'>
      <HeaderCartPay />
      {data.length < 1 ? (
        <EmptyBasket />
      ) : (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
          <div className=' col-span-1 lg:col-span-2 xl:col-span-3'>
            <ProviderStore>
              <AddedProducts data={data} />
            </ProviderStore>
          </div>
          <div>
            <FormCart />
          </div>
        </div>
      )}
    </div>
  )
}
