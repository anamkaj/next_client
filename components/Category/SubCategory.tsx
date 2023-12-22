'use server'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { PropsSubCategory } from '../Product/model/type.'

export default async function SubCategory({
  category,
  categoryId,
}: PropsSubCategory) {
  const subCategory = category?.filter(
    (y) => y?.parentCategoryId == Number(categoryId),
  )
  return (
    <div className=' mt-5 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1 '>
      {subCategory?.map((x) => {
        return (
          <div
            key={x.id}
            className=' border border-t-slate-50 rounded-sm hover:shadow-sm hover:border-slate-300 p-4'
          >
            <Link
              href={{
                pathname: `/category/${x.slug}/${x.id}`,
              }}
            >
              <div className=' flex flex-col items-center justify-center gap-2'>
                <Image
                  className='mt-4'
                  src={`https://tmk-v.ru:8080/img/${x.folderImg}/${x.img}`}
                  alt={''}
                  width={80}
                  height={80}
                />
                <span className='font-light text-neutral-800 text-center'>
                  {x?.name}
                </span>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
