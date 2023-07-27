'use client'
import React from 'react'
import { usePopularProduct } from './hook/get.popular.product'
import CarouselProduct from '../UI/Carousel/ProductCarousel/Carousel'

export default function CarouselPopularProduct() {
  const { data, isLoading } = usePopularProduct()
  return (
    <div className='mt-12'>
      <div className=' mt-4 mb-6'>
        <p className=' font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
          Товары месяца
        </p>
      </div>

      <CarouselProduct product={data} />
    </div>
  )
}
