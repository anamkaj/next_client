import { ICategory } from '@/models/category'
import { CategoryServices } from '@/services/get.category'
import useSWR from 'swr'

export const useGetCategoryMobile = () => {
  const { data, isLoading } = useSWR<ICategory[]>('categoryCatalog', () =>
    CategoryServices.getMainCategory(),
  )
  const category = data?.filter((e) => e.parentCategoryId == null)
  return { category, isLoading }
}
