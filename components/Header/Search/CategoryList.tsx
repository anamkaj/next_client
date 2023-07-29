'use client'
import { ICategory } from '@/models/category'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function CategoryList({
  category,
  closeSearch,
}: {
  category: ICategory[] | undefined
  closeSearch: () => void
}) {
  return (
    <>
      {category?.length !== 0 && (
        <div className='  flex flex-wrap gap-2 mb-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500'>
          {category?.map((x) => {
            if (x.parentCategoryId !== null)
              return (
                <Link
                  onClick={() => closeSearch()}
                  href={{
                    pathname: `/category/${x.slug}/${x.id}`,
                    query: { filter: 'popularity_desc' },
                  }}
                  key={x.id}
                  className=' flex flex-col p-2 w-1/3 text-center justify-center border items-center shadow-sm rounded-md  '
                >
                  <Image
                    height={40}
                    width={40}
                    src={`https://tmk-v.ru:8080/img/${x.folderImg}/${x.img}`}
                    alt={x.name}
                  />
                  <h2 className=' text-xs lg:text-sm whitespace-pre-wrap '>
                    {x.name}
                  </h2>
                </Link>
              )
          })}
        </div>
      )}
    </>
  )
}
