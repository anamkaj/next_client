'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IProduct } from '@/models/product'

type PaginationProp = {
  product: IProduct[]
  page: string
}

export default function Pagination({ product, page }: PaginationProp) {
  const searchParams = useSearchParams()
  const router = useRouter()

  //Стейт количества товаров для оповещения о том что товаров на странице нет.
  const [lengthProduct, setLengthProduct] = useState(true)

  const countPage = useRef<number>(Number(page))
  //Подставляем значение из параметрова поиска , так как реф не реагирует на изменение програмных кнопок Назад Вперед из браузера
  const [numberPage, setNumberPage] = useState<number>(1)

  const url = searchParams.toString()

  const addRouter = () => {
    const changeUrl = url.split('&')
    const regex = /page/g
    const filter = changeUrl.filter((x) => {
      if (!x.match(regex)) {
        return x
      }
    })

    if (filter.length !== 0) {
      return `?${filter.join('&')}&page=${countPage.current}`
    } else {
      return `?${filter.join('&')}page=${countPage.current}`
    }
  }

  const changeCounterUp = () => {
    countPage.current += 1
    router.push(`${addRouter()}`)
  }
  const changeCounterDown = () => {
    if (countPage.current <= 1) {
      countPage.current = 1
    } else {
      countPage.current -= 1
      router.push(`${addRouter()}`)
    }
  }

  useEffect(() => {
    if (page !== undefined) {
      setNumberPage(Number(page))
    }
  }, [page])

  useEffect(() => {
    if (product.length == 0) {
      setLengthProduct(false)
      setTimeout(() => {
        changeCounterDown()
        setLengthProduct(true)
      }, 2000)
    }
  }, [product])

  return (
    <>
      <div
        hidden={lengthProduct}
        className='  font-medium text-xl text-slate-500 absolute mb-[300px] '
      >
        <h2 className='text-center'>
          Товары закончились, перебросим вас не предыдущую страницу{' '}
        </h2>
      </div>
      <nav className='mt-8'>
        <ul className='list-style-none flex space-x-5'>
          <li>
            <button
              onClick={() => changeCounterDown()}
              className='relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100'
            >
              Назад
            </button>
          </li>
          <li>
            <div className='relative block rounded-full bg-slate-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300'>
              {numberPage == 0 ? 1 : numberPage}
            </div>
          </li>

          <li>
            <button
              disabled={product.length < 25}
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
