'use client'
import React from 'react'
import { ICategory } from '@/models/category'

type PropBreadCrumbs = {
  slug: string
  category: ICategory[]
}

export default function BreadCrumbs({ category, slug }: PropBreadCrumbs) {
  const crumbs = category.filter((x) => x.id == Number(slug[1]))

  return (
    <div className=' mt-4'>
      {crumbs.map((x) => {
        return (
          <h2 className=' text-lg' key={x.id}>
            {x.name}
          </h2>
        )
      })}
    </div>
  )
}
