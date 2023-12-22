'use client'
import React, { useEffect, useRef, useState } from 'react'
import SliderRange from './SliderRange'
import BrandFilter from './BrandFilter'
import ProductParamFilter from './CheckboxFilter'
import { IFilterProductProp } from './model/type'
import { useSearchParams } from 'next/navigation'
import { urlSlice } from './utils/url.slice'
import { AiOutlineClear } from 'react-icons/ai'
import { FilterLoader } from '../LazyLoad/LazyLoad'
import { useListParam } from './hook/useListState'
import { useChangeUrl } from './hook/useChangeUrl'
import { useClearFilter } from './hook/useClearFilter'
import { useLoading } from './hook/useLoading'


export default function MainComponentFilter({
  filterPrice,
  paramFilterProduct,
  categoryId,
}: IFilterProductProp) {
  const searchParams = useSearchParams()
  const urlBrand = searchParams.get('brand')
  const urlParam = searchParams.get('paramfilter')
  const { some: data, brand, sumProduct } = paramFilterProduct
  const parentId = useRef<number[]>([])

  // ______________________________________________________________________

  // Выборка параметров из массива товаров
  const {
    paramFilter,
    listParam,
    setListParams,
    parentActive,
    setParentActive,
    changeArray,
    changeParentState,
  } = useListParam({ urlParam, data, parentId })

  // ______________________________________________________________________

  const { maxPrice, minPrice } = filterPrice // default value
  const valuePriceFilter = useRef<number[]>([minPrice, maxPrice])

  // ______________________________________________________________________

  const filterBrand = useRef<string[]>([])
  const [brandState, setBrandsState] = useState<boolean[]>(
    Array(Object.entries(brand).length).fill(false),
  )

  // ______________________________________________________________________
  // Эффект загрузки при выборе параметров фильтра
  const { blockUi, loading } = useLoading()

  const { changeUrlParamFilter } = useChangeUrl({
    categoryId,
    paramFilter,
    maxPrice,
    minPrice,
    valuePriceFilter,
    filterBrand,
  })

  const { clearFilter } = useClearFilter({
    paramFilter,
    valuePriceFilter,
    filterBrand,
    setBrandsState,
    setListParams,
    setParentActive,
    parentId,
    changeUrlParamFilter,
    minPrice,
    maxPrice,
    brandState,
    listParam,
    parentActive,
    loading,
  })

  // ______________________________________________________________________

  useEffect(() => {
    urlSlice(urlParam, paramFilter)
    setListParams(() => changeArray())
  }, [data])

  useEffect(() => {
    setParentActive(() => changeParentState())
  }, [listParam])

  useEffect(() => {
    const getUrlBrand = urlBrand?.split(',')
    if (getUrlBrand) {
      const updateStateBrand = Object.keys(brand).map((x) =>
        getUrlBrand.includes(x),
      )
      filterBrand.current = getUrlBrand
      setBrandsState(updateStateBrand)
    } else {
      setBrandsState([])
      filterBrand.current = []
    }
  }, [urlBrand])

  if (blockUi) {
    return (
      <div className='mb-[40vh]'>
        <FilterLoader />
      </div>
    )
  }

  return (
    <div className='p-4 border rounded-md w-full'>
      <div className=' text-xl font-semibold lg:flex-col lg:items-end xl:flex-row xl:items-center flex items-center justify-between gap-2'>
        <button
          onClick={() => clearFilter()}
          className=' text-xs uppercase text-fuchsia-600  font-normal hover:font-bold flex gap-2 items-center'
        >
          <AiOutlineClear className='h-5 w-5' />
          Очистить
        </button>
        <span>Фильтры</span>
      </div>

      <SliderRange
        min={minPrice}
        max={maxPrice}
        changeUrlParamFilter={changeUrlParamFilter}
        valuePriceFilter={valuePriceFilter}
      />

      <BrandFilter
        brand={brand}
        filterBrand={filterBrand}
        changeUrlParamFilter={changeUrlParamFilter}
        brandState={brandState}
        setBrandsState={setBrandsState}
        loading={loading}
      />

      <ProductParamFilter
        data={data}
        setParentActive={setParentActive}
        listParam={listParam}
        parentActive={parentActive}
        setListParams={setListParams}
        paramFilter={paramFilter}
        changeUrlParamFilter={changeUrlParamFilter}
        loading={loading}
      />

      <div className=' flex flex-col gap-4 justify-center mt-4 mobile:hidden lg:flex lg:text-xs '>
        <div className=' w-full border px-4 py-2 text-center'>
          <h3 className='font-thin'>
            Показанно: <span className='font-semibold'>{sumProduct}</span>{' '}
            товара(ов)
          </h3>
        </div>
      </div>
    </div>
  )
}
