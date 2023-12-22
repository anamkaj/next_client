import { useRef, useState } from 'react'
import { ElementArray, Some } from '../model/type'
import { urlSlice } from '../utils/url.slice'

type ListParamProp = {
  urlParam: string | null
  data: Some[]
  parentId: React.MutableRefObject<number[]>
}

export const useListParam = ({ urlParam, data, parentId }: ListParamProp) => {
    
  const paramFilter = useRef<{ [key: string]: string[] }>({})
  urlSlice(urlParam, paramFilter)

  const arrayParamFilter = Object.entries(paramFilter.current)

  const changeArray = () => {
    const arrayParent: number[] = []
    return data.map((x, index) => {
      return x.value.map((v, item) => {
        const key = `q_${v}`
        const state = arrayParamFilter.some((s) => {
          if (s[0] == x.key && s[1].includes(key)) {
            return true
          }
        })
        if (arrayParamFilter.length !== 0) {
          if (state && !arrayParent.includes(index)) {
            arrayParent.push(index)
          }
        }
        parentId.current = arrayParent
        return {
          parent: index,
          children: item,
          state: state,
        }
      })
    })
  }

  const [listParam, setListParams] = useState<ElementArray[][]>(() =>
    changeArray(),
  )
  const changeParentState = () => {
    if (parentId.current.length == 0) {
      return listParam.map((_) => true)
    } else {
      return listParam.map((_, index) => !parentId.current.includes(index))
    }
  }

  const [parentActive, setParentActive] = useState<boolean[]>(() =>
    changeParentState(),
  )

  return {
    paramFilter,
    listParam,
    setListParams,
    parentActive,
    setParentActive,
    changeArray,
    changeParentState,
  }
}
