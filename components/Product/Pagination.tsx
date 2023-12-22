'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IProduct } from '@/models/product'

export default function Pagination({
  page,
  product,
}: {
  page: string
  product: IProduct[]
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const url = searchParams.toString()

  const changeUrl = url.split('&')
  const regex = /page/g
  let pageNum = Number(page)

  const changePage = () => {
    const filter = changeUrl.filter((x) => {
      if (!x.match(regex)) {
        return x
      }
    })
    const url = `?${filter.join('&')}&page=${pageNum}`
    const resultUrl = url[1] === '&' ? url.slice(0, 1) + url.slice(1 + 1) : url

    router.push(resultUrl)
  }

  const changeCounterUp = () => {
    pageNum += 1
    changePage()
  }
  const changeCounterDown = () => {
    pageNum -= 1
    if (pageNum == 0) {
      pageNum = 1
    }
    changePage()
  }

  const lengthProductArray = product.length < 25

  return (
    <>
      <nav className='mt-8'>
        <ul className='list-style-none flex space-x-5'>
          <li>
            <button
              disabled={pageNum == 1}
              onClick={() => changeCounterDown()}
              className='relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100'
            >
              Назад
            </button>
          </li>
          <li>
            <div className='relative block rounded-full bg-slate-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300'>
              {pageNum}
            </div>
          </li>

          <li>
            <button
              disabled={lengthProductArray}
              onClick={() => changeCounterUp()}
              className='relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100'
            >
              Вперед
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
