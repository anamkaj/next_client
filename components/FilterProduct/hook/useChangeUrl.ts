import { valueHeaderFilter } from '@/store/Jotai/filter'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'

type ChangeUrlProp = {
  paramFilter: React.MutableRefObject<{
    [key: string]: string[]
  }>
  maxPrice: number
  minPrice: number
  valuePriceFilter: React.MutableRefObject<number[]>
  filterBrand: React.MutableRefObject<string[]>
  categoryId: string
}

export const useChangeUrl = ({
  paramFilter,
  maxPrice,
  minPrice,
  valuePriceFilter,
  filterBrand,
  categoryId,
}: ChangeUrlProp) => {
  const router = useRouter()
  const [paramFilterStore, _] = useAtom(valueHeaderFilter)


  //Функция добавления новых параметров в адресную строку
  const changeUrlParamFilter = () => {
    // параметры фильтра
    const str = Object.entries(paramFilter.current).map((x) => {
      const changePlus = x[1].map((x) => {
        // SearchParam - не видит "+" в адресной строке , заменяем на "*"
        const strArray: string[] = []
        for (let str of x) {
          strArray.push(str === '+' ? str.replace('+', '§') : str)
        }
        let resultString = strArray.join('')
        return resultString
      })
      return `f_${x[0]}_vl_${changePlus}`
    })

    const filterParam =
      Object.keys(paramFilter.current).length !== 0 ? `&paramfilter=${str}` : ''

    const filterPrice =
      minPrice == valuePriceFilter.current[0] &&
      maxPrice == valuePriceFilter.current[1]
        ? ''
        : `price_min=${valuePriceFilter.current[0]}&price_max=${valuePriceFilter.current[1]}`

    const filterBrandUrl =
      filterBrand.current.length !== 0 ? `&brand=${filterBrand.current}` : ''

    // Фильтр сортировки по цене и отзывам

    const sort = () => {
      let paramSort = ''
      paramFilterStore.forEach(({ id, param }) => {
        if (id === categoryId) {
          paramSort = `&sort=${param}`
        } else {
          return ''
        }
      })
      return paramSort
    }

    const urlUpdate = `?${filterPrice}${filterBrandUrl}${filterParam}${sort()}`
    // убираем занак &
    const resultUrl =
      urlUpdate[1] === '&'
        ? urlUpdate.slice(0, 1) + urlUpdate.slice(1 + 1)
        : urlUpdate

    router.push(resultUrl, {
      scroll: false,
    })
  }

  return { changeUrlParamFilter }
}
