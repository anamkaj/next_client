import { ElementArray } from '../model/type'

type ClearFilterProp = {
  paramFilter: React.MutableRefObject<{
    [key: string]: string[]
  }>

  valuePriceFilter: React.MutableRefObject<number[]>
  filterBrand: React.MutableRefObject<string[]>
  setBrandsState: React.Dispatch<React.SetStateAction<boolean[]>>
  setListParams: React.Dispatch<React.SetStateAction<ElementArray[][]>>
  setParentActive: React.Dispatch<React.SetStateAction<boolean[]>>
  parentId: React.MutableRefObject<number[]>
  changeUrlParamFilter: () => void
  minPrice: number
  maxPrice: number
  brandState: boolean[]
  listParam: ElementArray[][]
  parentActive: boolean[]
  loading: () => void
}

export const useClearFilter = ({ ...arg }: ClearFilterProp) => {
  const clearFilter = () => {
    arg.paramFilter.current = {}
    arg.valuePriceFilter.current = [arg.minPrice, arg.maxPrice]
    arg.filterBrand.current = []
    arg.setBrandsState(arg.brandState.map((x) => (x == true ? !x : x)))
    arg.setListParams(
      arg.listParam.map((x) => {
        return x.map((v) => {
          if (v.state == true) {
            v.state = false
            return v
          } else {
            return v
          }
        })
      }),
    )
    arg.setParentActive(arg.parentActive.map((v) => (v == false ? !v : v)))
    arg.parentId.current = []
    arg.changeUrlParamFilter()
    arg.loading()
  }
  return { clearFilter }
}
