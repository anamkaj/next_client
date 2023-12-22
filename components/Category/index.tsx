import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryDownLevel from './CategoryDownLevel'
import { ICategory } from '@/models/category'

interface PropCategory {
  category: ICategory[]
}

export default function Category({ category }: PropCategory) {
  return (
    <div className=' grid grid-cols-2 gap-2 lg:grid-cols-4 p-2 md:grid-cols-3  '>
      {category.map((e) => {
        if (e.parentCategoryId == null)
          return (
            <div
              key={e.id}
              className=' flex flex-col rounded-lg shadow-lg box-border p-2 items-center justify-start '
            >
              <div className=' flex h-32 w-32 items-center '>
                <Image
                  className='mt-4'
                  src={`https://tmk-v.ru:8080/img/${e.folderImg}/${e.img}`}
                  alt={''}
                  width={200}
                  height={200}
                />
              </div>
              <div className='mt-4 flex items-center h-[50px]'>
                <Link
                  href={{
                    pathname: `/category/${e.slug}/${e.id}`,
                  }}
                  className=' text-center rounded p-3 text-xs md:text-sm font-medium uppercase leading-normal '
                >
                  {e.name}
                </Link>
              </div>
              <CategoryDownLevel category={category} id={e.id} />
            </div>
          )
      })}
    </div>
  )
}
