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
}

export default function FilterProduct({
  filterPrice,
  brand,
}: IFilterProductProp) {
  return (
    <div className=' p-6 border rounded-md h-[30vh] bg-slate-50'>
      <h3 className=' text-xl font-semibold text-right'>Фильтры</h3>
      <SliderRange filterPrice={filterPrice} />
      <BrandFilter brand={brand} />
    </div>
  )
}
