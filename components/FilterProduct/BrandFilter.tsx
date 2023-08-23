'use client'
import React, { useRef } from 'react'
import { useFilterProduct } from './hook/filter.product'
import { useRouter, useSearchParams } from 'next/navigation'

type PropBrandFilter = {
  brand: string[]
}

export default function BrandFilter({ brand }: PropBrandFilter) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Фильтрация по бренду
  const url = searchParams.toString()
  const getBrandUrl = searchParams.get('brand')?.split(',') || []
  const filterBrand = useRef<string[]>(
    getBrandUrl.length !== 0 ? getBrandUrl : [],
  )

  // Получение уникальных названий брендов
  const uniqBrandArray: string[] = []
  const _ = brand.filter(
    (x) => !uniqBrandArray.includes(x) && uniqBrandArray.push(x),
  )
  //Хук получения из адресной строки параметров фильтра по бренду и заполнение чекбоксов
  const { changeBrandArray, checkedState } = useFilterProduct(uniqBrandArray)
  
  //Функция добавления новых параметров в адресную строку
  const changeParamFilter = () => {
    const changeUrl = url.split('&')
    const regex = /brand/g
    const filter = changeUrl.filter((x) => {
      if (!x.match(regex)) {
        return x
      }
    })
    const nameBrand =
      filterBrand.current.length !== 0 ? `&brand=${filterBrand.current}` : ''

    router.push(`?${filter.join('&')}${nameBrand}`, {
      scroll: false,
    })
  }

  // Изменение параметров фильтров в адресной строке через чекбоксы
  const selectInputValue = (event: string, index: number) => {
    if (!filterBrand.current.includes(event)) {
      filterBrand.current.push(event)
      changeBrandArray(index)
      changeParamFilter()
    } else {
      filterBrand.current = filterBrand.current.filter((x) => x !== event)
      changeBrandArray(index)
      changeParamFilter()
    }
  }

  return (
    <div className=' mt-4'>
      <h3 className='font-bold'>Бренд</h3>
      <div className=' mt-2'>
        <ul>
          {uniqBrandArray.map((x, index) => {
            return (
              <li key={index}>
                <label>
                  <input
                    name={x}
                    checked={checkedState[index] || false}
                    value={x}
                    type='checkbox'
                    onChange={(e) => selectInputValue(e.target.value, index)}
                  />
                  <span className='ml-2'>{x}</span>
                </label>{' '}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
