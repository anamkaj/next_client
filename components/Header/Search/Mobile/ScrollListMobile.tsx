'use client'
import { ICategory } from '@/models/category'
import { IProduct } from '@/models/product'
import { resultSearchWindows } from '@/store/Jotai/modal'
import { useAtom } from 'jotai'
import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import ProductSearchList from '../ProductSearchList'
import CategoryList from '../CategoryList'

type ScrollMobileProp = {
  product: IProduct[] | undefined
  active: boolean
  input: string | undefined
  isError: boolean
  category: ICategory[] | undefined
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  closeSearch: () => void
}

export default function ScrollListMobile({
  product,
  active,
  isError,
  input,
  category,
  setActive,
  closeSearch,
}: ScrollMobileProp) {
  const [hiddenScroll, setHiddenScroll] = useAtom(resultSearchWindows)
  return (
    <div hidden={!hiddenScroll}>
      <div className='absolute z-10 flex flex-col gap-4 p-2 bg-white rounded-b-xl left-0 top-14 '>
        {/* кнопка возврата на страницу */}
        <div onClick={() => closeSearch()} className=' flex items-center gap-2'>
          <span>
            <BsArrowLeftCircle className=' w-5 h-5 text-slate-500' />
          </span>
          <span>Назад</span>
        </div>
        <div className=' flex flex-col'>
          {!isError ? (
            <div>
              <ProductSearchList
                product={product}
                category={category}
                closeSearch={closeSearch}
              />
              <span className=' font-extralight text-xs'> Группы товаров </span>
              <CategoryList category={category} closeSearch={closeSearch} />
            </div>
          ) : (
            <div className=' flex items-center justify-center'>
              <p className=' font-medium text-2xl'>Товар не найден </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
