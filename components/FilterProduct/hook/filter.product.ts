import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useFilterProduct = (brand: string[]) => {
  const searchParams = useSearchParams()
  const [checkedState, setCheckedState] = useState<boolean[]>(
    Array(brand.length).fill(false),
  )
  const getBrandUrl = searchParams.get('brand')?.split(',') || []

  // Синхронизация чекбоксов из адресной строки с чекбоксами в блоке фильтрации
  const changeBrandArray = (id: number | number[]) => {
    if (typeof id !== 'object') {
      const changeChecked = checkedState?.map((item, i) =>
        i == id ? !item : item,
      )
      setCheckedState(changeChecked)
    } else {
      const arrayId = checkedState.map((x, index) =>
        index == id[index] ? !x : x,
      )
      setCheckedState(arrayId)
    }
  }
  // Функция получения названий брендов из адресной строки. Получение их индексов
  const changeFilterBrand = () => {
    const arrayIndex: number[] = []

    const _ = brand.filter((x, index) => {
      if (getBrandUrl?.includes(x)) {
        arrayIndex.push(index)
      } else {
        arrayIndex.push(NaN)
      }
    })
    changeBrandArray(arrayIndex)
  }

  useEffect(() => {
    if (getBrandUrl.length !== 0) changeFilterBrand()
  }, [])

  return {
    changeBrandArray,
    checkedState,
    setCheckedState,
  }
}
