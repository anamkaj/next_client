'use client'
import React from 'react'
import { PropBrandFilter } from './model/type'

export default function BrandFilter({
  brand,
  filterBrand,
  changeUrlParamFilter,
  brandState,
  setBrandsState,
  loading,
}: PropBrandFilter) {
  // Изменение параметров фильтров в адресной строке через чекбоксы
  const selectInputValue = (event: string, index: number) => {
    if (!filterBrand.current.includes(event)) {
      filterBrand.current.push(event)
      setBrandsState(() =>
        brandState.map((item, i) => (i == index ? !item : item)),
      )
      changeUrlParamFilter()
      loading()
    } else {
      filterBrand.current = filterBrand.current.filter((x) => x !== event)
      setBrandsState(() =>
        brandState.map((item, i) => (i == index ? !item : item)),
      )
      changeUrlParamFilter()
      loading()
    }
  }

  return (
    <div className=' mt-6'>
      <h3 className='font-semibold text-normal lg:text-sm'>Бренды </h3>
      <div className=' mt-2'>
        <ul>
          {Object.entries(brand).map((x, index) => {
            return (
              <li key={index}>
                <label className=' font-normal hover:font-medium cursor-pointer uppercase text-base'>
                  <input
                    name={x[0]}
                    checked={brandState[index] || false}
                    value={x[0]}
                    type='checkbox'
                    onChange={(e) => selectInputValue(e.target.value, index)}
                  />
                  <span className='ml-2'>{x[0]}</span>
                  <span className='ml-2 font-thin text-xs '>({x[1]})</span>
                </label>{' '}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
