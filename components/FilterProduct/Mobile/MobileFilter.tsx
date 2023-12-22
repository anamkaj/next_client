'use client'
import React, { useRef } from 'react'
import { BsFilterRight } from 'react-icons/bs'
import { MobileFilterProp } from '../model/type'
import { AiFillCloseCircle } from 'react-icons/ai'
import MainComponentFilter from '../MainComponentFilter'
import { useScrollOff } from '../hook/useScrollOff'

export default function MobileFilter({
  filterPrice,
  paramFilterProduct,
  categoryId,
  activeFilter,
  setActiveFilter,
  countProductMobile,
}: MobileFilterProp) {
  const { length } = filterPrice
  const filter = useRef<HTMLDivElement>(null)
  const _ = useScrollOff(activeFilter, filter.current)

  return (
    <div>
      <div className='absolute right-2 top-[-38px] lg:hidden'>
        <div className='flex gap-4'>
          <BsFilterRight className=' w-7 h-7' />
          <button
            className='font-bold uppercase '
            onClick={() => setActiveFilter(false)}
          >
            Фильтры
          </button>
        </div>
      </div>
      <div
        ref={filter}
        hidden={activeFilter}
        className=' fixed left-0 top-0 w-full h-full overflow-auto overscroll-none bg-white'
      >
        <div>
          <div className=' flex justify-between item-center  p-4 lg:hidden'>
            <span className=' font-thin'>
              {' '}
              Товаров в группе: {length}
            </span>
            <AiFillCloseCircle
              className='h-6 w-6 '
              onClick={() => setActiveFilter(true)}
            />
          </div>
          <div>
            <MainComponentFilter
              paramFilterProduct={paramFilterProduct}
              filterPrice={filterPrice}
              categoryId={categoryId}
            />
          </div>
          <div className=' flex justify-center '>
            <button
              className='fixed bottom-10 z-10 w-1/2 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline font-thin'
              onClick={() => setActiveFilter(true)}
            >
              Показать:{' '}
              <span className='font-semibold'>{countProductMobile}</span>{' '}
              товаров
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
