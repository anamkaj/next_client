import React from 'react'
import { IProduct } from '../../../models/product'
import SingleProduct from '@/components/SingleProduct'
import { ProductServices } from '@/services/get.product'

export default async function SingleProductCart({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const product: IProduct[] = await ProductServices.getSingleProduct(
    Number(slug[2]),
  )
  console.log(slug[2])

  return (
    <>
      <SingleProduct product={product} />
    </>
  )
}
