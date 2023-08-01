import { ICategory } from '@/models/category'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type PropsSubCategory = {
  category: ICategory[]
  id: number
}

export default function SubCategory({ category, id }: PropsSubCategory) {
  const subCategory = category?.filter((y) => y?.parentCategoryId == id)
  return (
    <div className=' mt-5 grid grid-cols-5 gap-1 '>
      {subCategory?.map((x, i) => {
        return (
          <div className=' border border-t-slate-50 rounded-sm hover:shadow-sm hover:border-slate-300'>
            <Link
              href={{
                pathname: `/category/${x.slug}/${x.id}`,
                query: { filter: 'popularity_desc' },
              }}
              className=' inline-block text-center rounded px-6 pt-2.5 pb-2 text-sm  leading-normal text-neutral-800 '
            >
              <div className=' flex items-center justify-between gap-2'>
                <Image
                  className='mt-4'
                  src={`http://tmk-v.ru:8080/img/${x.folderImg}/${x.img}`}
                  alt={''}
                  width={80}
                  height={80}
                />
                <span className='  font-light'>{x?.name}</span>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
