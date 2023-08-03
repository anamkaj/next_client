import { useSingleProduct } from '@/components/MainPage/hook/get.one.product'
import Link from 'next/link'
import React from 'react'
import slug from 'slug'

export default function TitleProductCarousel({ id }: { id: number }) {
  const { data: product } = useSingleProduct(id)

  return (
    <>
      {product?.map((x) => {
        return (
          <Link
            href={`/product/${slug(product[0].title)}/${slug(
              product[0].title,
            )}/${product[0].id}`}
            key={x.id}
            className=' flex gap-2 items-center'
          >
            <div className=' w-[80px]'>
              <img
                src={`https://tmk-v.ru:8080/img/${x.imgFolder}/${x.imgLink[0]}`}
                alt={x.altImg}
              />
            </div>
            <>
              <div className=' font-thin'>
                {x.title.length > 30 ? x.title.slice(0, 30) + '..' : x.title}
              </div>
            </>
          </Link>
        )
      })}
    </>
  )
}
