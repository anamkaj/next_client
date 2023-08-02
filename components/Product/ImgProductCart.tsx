import React from 'react'
import { IProduct } from '@/models/product'
import Link from 'next/link'
import urlSlug from 'url-slug'
import Image from 'next/image'

interface imgProps {
  product: IProduct
  slug: string
}
export default function ImgProductCart({ product, slug }: imgProps) {
  return (
    <>
      <Link
        href={{
          pathname: `/product/${slug[0]}/${urlSlug(product.title)}/${
            product.id
          }`,
        }}
        className='mb-4 w-[150px] h-[150px]'
      >
        <Image
          height={250}
          width={250}
          src={`https://tmk-v.ru:8080/img/${product.imgFolder}/${product.imgLink[0]}`}
          alt={product.altImg}
        />
      </Link>
    </>
  )
}
