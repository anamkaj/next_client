import { IProduct } from '@/models/product'
import Link from 'next/link'
import React, { SetStateAction } from 'react'
import Image from 'next/image'
import { ICategory } from '@/models/category'
import slug from 'slug'

type PropProductSearchList = {
  product: IProduct[] | undefined
  category: ICategory[] | undefined
  closeSearch: () => void
}

export default function ProductSearchList({
  product,
  category,
  closeSearch,
}: PropProductSearchList) {
  return (
    <>
      {product?.map((x) => {
        return (
          <Link
            key={x.id}
            onClick={() => closeSearch()}
            href={{
              pathname: `/product/search/${slug(x.title)}/${x.id}`,
            }}
          >
            <div className=' flex items-center gap-4'>
              <p className=' font-light text-xs'>Артикул {x.article}</p>
              <span className=' text-sm'>{x.brand}</span>
              <span className=' text-sm'>{x.price} ₽</span>
            </div>
            <div className=' flex items-center gap-2'>
              <Image
                height={60}
                width={60}
                src={`https://tmk-v.ru:8080/img/${x.imgFolder}/${x.imgLink[0]}`}
                alt={x.altImg}
              />
              <h2 className=' p-2 hover:bg-slate-50 hover:p-2 hover:w-full text-sm'>
                {' '}
                {x.title}
              </h2>
            </div>
          </Link>
        )
      })}
    </>
  )
}
