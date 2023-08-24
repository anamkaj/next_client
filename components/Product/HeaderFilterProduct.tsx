'use client'
import React, { useRef, useState } from 'react'
import { BsFilterRight } from 'react-icons/bs'
import { BsFillGrid3X2GapFill } from 'react-icons/bs'
import { HiAdjustmentsVertical } from 'react-icons/hi2'
import { BiFilterAlt } from 'react-icons/bi'
import { useFilterChange } from './hook/filter.head.product'
import { selectValue } from './helper/filter.head'
import FilterProduct, { IFilterProductProp } from '../FilterProduct'
import { AiFillCloseCircle } from 'react-icons/ai'

type NameHeadFilter = {
  id: number
  name: string
  sort: string
}

export default function HeaderFilterProduct({
  filterPrice,
  brand,
  countSearchFilterProduct,
}: IFilterProductProp) {
  const { selectChange, getFilterState } = useFilterChange()
  const stateFilterName = useRef<NameHeadFilter[]>(selectValue)
  const [activeFilter, setActiveFilter] = useState(true)

  return (
    <div className='flex justify-between mt-4 p-2 item-center'>
      <div className=' flex gap-2'>
        <HiAdjustmentsVertical className=' w-7 h-7' />
        <select
          defaultValue={getFilterState}
          onChange={(e) => selectChange(e.target.value)}
          className=' cursor-pointer duration-300 w-[160px] outline-none  '
        >
          {stateFilterName.current.map((item) => {
            return (
              <option key={item.id} value={item.sort} className='font-thin '>
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
      <div className=' flex gap-2 lg:hidden'>
        <BsFilterRight className=' w-7 h-7' />
        <button
          className='font-bold uppercase '
          onClick={() => setActiveFilter(false)}
        >
          Фильтры
        </button>
      </div>
      <div hidden={activeFilter}>
        <div className='fixed left-0 top-0 w-full h-full bg-white z-10'>
          <div className='bg-white flex justify-between item-center  p-4'>
            <span className=' font-thin'>
              {' '}
              Товаров в группе: {brand.length}
            </span>
            <AiFillCloseCircle
              className='h-6 w-6 '
              onClick={() => setActiveFilter(true)}
            />
          </div>
          <FilterProduct
            filterPrice={filterPrice}
            brand={brand}
            countSearchFilterProduct={countSearchFilterProduct}
          />
          <div className=' flex justify-center '>
            <button
              className='fixed bottom-10 z-10 w-1/2 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
              onClick={() => setActiveFilter(true)}
            >
              <h3 className='font-thin'>
                Показать:{' '}
                <span className='font-semibold'>
                  {countSearchFilterProduct}
                </span>{' '}
                товаров
              </h3>
            </button>
          </div>
        </div>
      </div>
      {/* <BiFilterAlt className=" w-7 h-7 cursor-pointer" /> */}

      {/* <div className="flex gap-3">
        <button onClick={() => changeGrid(true)}>
          <BsFillGrid3X3GapFill className="h-5 w-5" />
        </button>
        <button onClick={() => changeGrid(false)}>
          <BsFillGrid3X2GapFill className="h-5 w-5 " />
        </button>
      </div> */}
    </div>
  )
}
