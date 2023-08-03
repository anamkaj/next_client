import React from 'react'
import { IProduct } from '@/models/product'
import Link from 'next/link'
import slug from 'slug'

interface TitleProps {
  product: IProduct
  url: string
}

export default function TitleProductCart({ product, url }: TitleProps) {
  return (
    <>
      <Link
        href={{
          pathname: `/product/${url[0]}/${slug(product.title)}/${product.id}`,
        }}
        className=' flex font-light text-black text-sm text-center mb-2 h-8'
      >
        {product.title.length > 50
          ? product.title.slice(0, 44) + '...'
          : product.title}
      </Link>
    </>
  )
}
