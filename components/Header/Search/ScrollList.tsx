'use client'
import { ICategory } from '@/models/category'
import { IProduct } from '@/models/product'
import React, { useEffect, useState } from 'react'
import ProductSearchList from './ProductSearchList'
import CategoryList from './CategoryList'

type ScrollProp = {
  product: IProduct[] | undefined
  active: boolean
  input: string | undefined
  isError: boolean
  category: ICategory[] | undefined
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  closeSearch: () => void
}

export default function ScrollList({
  product,
  active,
  isError,
  input,
  category,
  setActive,
  closeSearch,
}: ScrollProp) {
  // useValidateScroll({ product, input, setHiddenScroll, active })

  return (
    <div className='absolute z-20 flex bg-white p-2 rounded-b-xl mt-1 w-full'>
      <div className=' flex flex-col'>
        {isError && (
          <div>
            <h4 className='font-medium text-xl'>
              Ошибка ответа сервера - проверьте запрос
            </h4>
          </div>
        )}
        {product && active && (
          <div>
            <ProductSearchList
              product={product}
              category={category}
              closeSearch={closeSearch}
            />
            {product.length !== 0 && (
              <span className=' font-extralight text-xs'> Группы товаров </span>
            )}

            <CategoryList category={category} closeSearch={closeSearch} />
          </div>
        )}
        {product?.length == 0 && !isError && active && (
          <div className=' flex items-center justify-center'>
            <p className=' font-thin text-lg '>
              Ввиедите запрос или проверьте правильность ввода{' '}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
