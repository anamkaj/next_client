'use server'
import React from 'react'

import CarouselProduct from '../UI/Carousel/ProductCarousel/Carousel'
import { ProductServices } from '@/services/get.product'
import { IProduct } from '@/models/product'

export default async function CarouselPopularProduct() {
  const getPopularProduct: IProduct[] = await ProductServices.popularProduct()

  return (
    <>
      <CarouselProduct product={getPopularProduct} />
    </>
  )
}
