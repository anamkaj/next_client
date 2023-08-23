'use client'
import React from 'react'
import { ICategory } from '@/models/category'
import { RespProp } from '@/app/category/[...slug]/page'

type PropBreadCrumbs = {
  categoryId: string
  category: ICategory[]
  filterPrice: RespProp
}

export default function BreadCrumbs({
  category,
  categoryId,
  filterPrice,
}: PropBreadCrumbs) {
  const crumbs = category.filter((x) => x.id == Number(categoryId))
  const { length } = filterPrice

  return (
    <div className='w-full mt-4'>
      {crumbs.map((x) => {
        return (
          <div
            key={x.id}
            className=' flex items-center md:space-x-4 space-x-0 flex-wrap md:flex-nowrap justify-between'
          >
            <h2 className=' text-lg'>{x.name}</h2>
            <span className=' font-thin text-slate-700 text-lg'>
              {' '}
              Товаров в каталоге: <span className='font-bold'>
                {length}{' '}
              </span>{' '}
              шт.
            </span>
          </div>
        )
      })}
    </div>
  )
}
