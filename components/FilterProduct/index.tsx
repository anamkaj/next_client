'use client'
import React from 'react'
import SliderRange from './SliderRange'
import BrandFilter from './BrandFilter'

export type RespProp = {
  length: number
  maxPrice: number
  minPrice: number
}

export interface IFilterProductProp {
  filterPrice: RespProp
  brand: string[]
  countSearchFilterProduct: number
}

export default function FilterProduct({
  filterPrice,
  brand,
}: IFilterProductProp) {
  return (
    <div className=' p-4 border rounded-md '>
      <h3 className='text-center  text-xl font-semibold lg:text-right'>
        Фильтры
      </h3>
      <SliderRange filterPrice={filterPrice} />
      <BrandFilter brand={brand} />
    </div>
  )
}
