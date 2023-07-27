'use client'

import Link from 'next/link'
import React from 'react'
import { useGetCategoryMobile } from './hook/get.category.mobile'
import { BsCaretRight } from 'react-icons/bs'
import { mobileLeftBar } from '@/store/Jotai/modal'
import { useAtom } from 'jotai'

export default function ListMenu() {
  const { category, isLoading } = useGetCategoryMobile()
  const [active, setActive] = useAtom(mobileLeftBar)
  return (
    <div className=' absolute z-30 w-full'>
      <div className=' bg-slate-50 opacity-100  p-2 lg:p-4 rounded-b-xl lg:hover:shadow-2xl'>
        <ul className=' flex flex-col items-start mb-2 '>
          {category?.map((x) => {
            return (
              <li
                key={x.id}
                className=' font-light text-lg md:text-xs lg:text-sm hover:font-normal hover:bg-white cursor-pointer w-full p-1 flex space-x-2 items-center  '
              >
                <BsCaretRight className=' w-2 h-2' />
                <Link
                  href={{
                    pathname: `/category/${x.slug}/${x.id}`,
                    query: { filter: 'popularity_desc' },
                  }}
                  onClick={() => setActive(false)}
                >
                  {x.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
