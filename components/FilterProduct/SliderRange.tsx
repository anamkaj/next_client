'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './css/slider.css'
import { useSearchParams } from 'next/navigation'
import { ISliderRangeProps } from './model/type'
import { z } from 'zod'
import debounce from 'lodash.debounce'

export default function SliderRange({
  changeUrlParamFilter,
  min,
  max,
  valuePriceFilter,
}: ISliderRangeProps) {
  const searchParams = useSearchParams()

  const [slideValue, setSlideValue] = useState<number[]>([min, max])
  const [errorMessage, setErrorMessage] = useState<string>('')

  const inputMin = z
    .number()
    .gte(min, { message: 'Цена слишком маленькая' })
    .lte(max, {
      message: 'Цена больше максимальной',
    })

  const inputMax = z
    .number()
    .gte(min, { message: 'Цена слишком маленькая' })
    .lte(max, {
      message: 'Цена больше максимальной',
    })

  // ______________________________________________________________________

  // получение из адресной страки параметров для подстановки после возврата из карточки
  const getMinPrice = searchParams.get('price_min') || min
  const getMaxPrice = searchParams.get('price_max') || max

  // Функция изменения значений слайдера
  const changeSlide = (event: number | number[]) => {
    if (typeof event == 'object') {
      setSlideValue(event)
      timer()
    }
  }

  // ______________________________________________________________________
  //Функции изменения стоимости в адресной строке через input
  const changeValueMin = (event: string) => {
    const price = Number(event)
    setSlideValue((prev) => [(prev[0] = price), prev[1]])
    const checkError = inputMin.safeParse(price)
    if (checkError.success) {
      setErrorMessage('')
      timer()
    } else {
      checkError.error.errors.forEach(({ message }) => setErrorMessage(message))
    }
  }

  const changeValueMax = (event: string) => {
    const price = Number(event)
    setSlideValue((prev) => [prev[0], (prev[1] = price)])
    const checkError = inputMax.safeParse(price)
    if (checkError.success) {
      setErrorMessage('')
      timer()
    } else {
      checkError.error.errors.forEach(({ message }) => setErrorMessage(message))
    }
  }
  const changeParamUrlFilter = () => {
    if (slideValue[0] < slideValue[1]) {
      valuePriceFilter.current = slideValue
      changeUrlParamFilter()
    } else {
      const string = 'Минимальная цена , больше максимальной'
      setErrorMessage(string)
    }
  }

  const timer = debounce(() => changeParamUrlFilter(), 500)

  // ______________________________________________________________________

  // изменения слайдера если есть значения в параметрах url
  useEffect(() => {
    valuePriceFilter.current = [Number(getMinPrice), Number(getMaxPrice)]
    setSlideValue([Number(getMinPrice), Number(getMaxPrice)])
  }, [])

  return (
    <>
      <div className=' flex flex-col gap-2 mt-4'>
        <span className=' font-normal text-sm'>Цена, ₽</span>

        <div className='flex gap-2'>
          <input
            type='number'
            className=' h-8 border border-slate-200  font-thin placeholder: pl-2 focus:outline-purple-500 w-[100px] md:w-[70px] placeholder:text-sm placeholder:text-gray-900'
            onChange={(e) => changeValueMin(e.target.value)}
            value={slideValue[0] == 0 ? '' : slideValue[0]}
          />
          <span className=' font-extrabold text-center'>–</span>

          <input
            type='number'
            className='h-8 border border-slate-200  font-thin placeholder: pl-2 focus:outline-purple-500 w-[100px] md:w-[70px] placeholder:text-sm placeholder:text-gray-900'
            onChange={(e) => changeValueMax(e.target.value)}
            value={slideValue[1] == 0 ? '' : slideValue[1]}
          />
        </div>
      </div>
      <div className='mt-4'>
        <Slider
          value={slideValue}
          range
          min={min}
          max={max}
          allowCross={false}
          onChange={(e) => changeSlide(e)}
        />
      </div>

      <div>
        {errorMessage && (
          <p className='mt-2 font-thin text-xs'>Ошибка: {errorMessage}</p>
        )}
      </div>
    </>
  )
}
