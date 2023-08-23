'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './../FilterProduct/slider.css'
import { useRouter, useSearchParams } from 'next/navigation'
import { RespProp } from '.'

interface ISliderRangeProps {
  filterPrice: RespProp
}

export default function SliderRange({ filterPrice }: ISliderRangeProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { maxPrice, minPrice } = filterPrice
  const [slideValue, setSlideValue] = useState<number[]>([minPrice, maxPrice])
  const valuePriceFilter = useRef<number[]>([minPrice, maxPrice])
  const [min] = useState<number>(minPrice)
  const [max] = useState<number>(maxPrice)
  const [focusInput, setFocusInput] = useState<boolean>()
  const url = searchParams.toString()

  // получение из адресной страки параметров для подстановки после возврата из карточки
  const getMinPrice = searchParams.get('price_min') || min
  const getMaxPrice = searchParams.get('price_max') || max

  // Функция изменения значений слайдера
  const changeSlide = (event: number | number[]) => {
    if (typeof event == 'object') {
      valuePriceFilter.current = event
      setSlideValue(event)
    }
    const _ = setTimeout(() => {
      changeParamFilter()
    }, 1000)
  }
  //Функции изменения стоимости в адресной строке через input
  const changeValueMin = (event: string) => {
    valuePriceFilter.current[0] = Number(event)
    setSlideValue((prev) => [(prev[0] = Number(event)), prev[1]])
  }
  const changeValueMax = (event: string) => {
    valuePriceFilter.current[1] = Number(event)
    setSlideValue((prev) => [prev[0], (prev[1] = Number(event))])
  }
  //Функция добавления новых параметров в адресную строку
  const changeParamFilter = () => {
    const changeUrl = url.split('&')
    const regex = /price_(max|min)/g
    const filter = changeUrl.filter((x) => {
      if (!x.match(regex)) {
        return x
      }
    })
    router.push(
      `?${filter.join('&')}&price_min=${
        valuePriceFilter.current[0]
      }&price_max=${valuePriceFilter.current[1]}`,
      {
        scroll: false,
      },
    )
  }

  // если значения input не изменены , тогда запрос не отправляется
  useEffect(() => {
    if (focusInput === false) {
      if (min !== slideValue[0] || max !== slideValue[1]) {
        changeParamFilter()
      }
    }
  }, [focusInput])

  // изменения слайдера если есть значения в параметрах url
  useEffect(() => {
    valuePriceFilter.current = [Number(getMinPrice), Number(getMaxPrice)]
    setSlideValue([Number(getMinPrice), Number(getMaxPrice)])
  }, [])

  return (
    <>
      <div className=' flex flex-col gap-2 mt-a4'>
        <span className=' font-normal text-sm'>Цена, ₽</span>

        <div className='grid grid-cols-7 items-center'>
          <span className='col-span-1 font-thin text-center'>от</span>
          <input
            type='number'
            className=' h-8 border border-slate-200 col-span-2 rounded-lg font-thin placeholder: pl-2 focus:outline-purple-500'
            onChange={(e) => changeValueMin(e.target.value)}
            value={slideValue[0]}
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
          />
          <span className='col-span-1 font-extrabold text-center'>–</span>
          <span className='col-span-1 font-thin text-center'>до</span>
          <input
            type='number'
            value={slideValue[1]}
            className='h-8 border border-slate-200 col-span-2 rounded-lg font-thin placeholder: pl-2 focus:outline-purple-500'
            onChange={(e) => changeValueMax(e.target.value)}
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
          />
        </div>
      </div>
      <div className='mt-4'>
        <Slider
          range
          value={valuePriceFilter.current}
          min={min}
          max={max}
          allowCross={false}
          onChange={(e) => changeSlide(e)}
        />
      </div>
    </>
  )
}
