import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

type FilterChangeProp = {
  pageFilter: string
  pageNumber: string
}

export const useFilterChange = ({
  pageFilter,
  pageNumber,
}: FilterChangeProp) => {
  const router = useRouter()
  const input = useRef<string>(pageFilter)

  const selectChange = (event: string) => {
    input.current = event
    if (pageNumber === undefined) {
      router.push(`?filter=${input.current}`)
    } else {
      router.push(`?filter=${input.current}&page=${pageNumber}`)
    }
  }

  // Пороверка стора на сохраненый фильтр

  // useEffect(() => {
  //   if (value !== "") {
  //     setSelect(value);
  //   }
  // }, []);

  return { selectChange }
}
