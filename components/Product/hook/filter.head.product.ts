import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export const useFilterChange = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const input = useRef<string>('')
  const getFilterState = searchParams.get('filter') || ''

  const url = searchParams.toString()

  const selectChange = (event: string) => {
    input.current = event
    const changeUrl = url.split('&')
    const regex = /filter/g

    const filter = changeUrl.filter((x) => {
      if (!x.match(regex)) {
        return x
      }
    })

    input.current = event
    router.push(`?filter=${input.current}&${filter.join('&')}`, {
      scroll: false,
    })
  }

  // Пороверка стора на сохраненый фильтр

  // useEffect(() => {
  //   if (value !== "") {
  //     setSelect(value);
  //   }
  // }, []);

  return { selectChange, getFilterState }
}
