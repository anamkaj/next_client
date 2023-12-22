import { ICategory } from '@/models/category'
import Link from 'next/link'
import React from 'react'

type Props = {
  category: ICategory[]
  id: number
}

export default function CategoryDownLevel({ category, id }: Props) {
  const subCategory = category?.filter((y) => y?.parentCategoryId == id)
  return (
    <div className='  mt-5 flex flex-col items-center '>
      {subCategory?.map((x) => {
        return (
          <Link
            href={{
              pathname: `/category/${x.slug}/${x.id}`,
            }}
            className='  inline-block text-center rounded px-6 pt-2.5 pb-2 text-xs md:text-sm leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]'
          >
            <div className=' flex items-center'>
              <span className='  font-light'>{x?.name}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
