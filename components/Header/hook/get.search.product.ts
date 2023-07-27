import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { validate } from '../Search/validate'
import { ICategory } from '@/models/category'
import { SearchServices } from '@/services/get.search'
import { IProduct } from '@/models/product'

export const useSearch = (input: string | undefined) => {
  const [value, setValue] = useState<string>('')
  const lengthInput = value.length >= 2

  useEffect(() => {
    if (input !== undefined) {
      if (validate(input!)) {
        const value = input.trim()
        setValue(value)
        getProduct()
        getCategory()
      }
    } else {
      setValue('')
    }
  }, [input])

  const {
    data: category,
    isLoading: isLoadingCategory,
    error: errorCategory,
    mutate: getCategory,
  } = useSWR<ICategory[]>('categorySearch', () =>
    lengthInput ? SearchServices.categorySearch(value) : [],
  )

  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorProduct,
    mutate: getProduct,
  } = useSWR<IProduct[]>('productSearch', () =>
    lengthInput ? SearchServices.productSearch(value) : [],
  )

  return { product, errorProduct, category, errorCategory }
}
