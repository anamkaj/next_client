'use client'
import React, { useEffect, useRef } from 'react'
import { HiAdjustmentsVertical } from 'react-icons/hi2'
import { selectValue } from './helper/filter.head'
import { valueHeaderFilter } from '@/store/Jotai/filter'
import { useAtom } from 'jotai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { PropFilterHeader } from '@/store/model/type'
import { useLoading } from '../FilterProduct/hook/useLoading'

export default function HeaderFilterProduct() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [paramFilterStore, setParamFilterStore] = useAtom(valueHeaderFilter)
  const sortFilter = searchParams.get('sort')
  const refSelect = useRef<string>(
    sortFilter !== null ? sortFilter : 'popularity_desc',
  )
  const { blockUi, loading } = useLoading()

  // ______________________________________________________________________

  const url = searchParams.toString()
  const idCategory = pathname.split('/')[3]
  const stateParam: PropFilterHeader = {
    id: idCategory,
    param: refSelect.current,
  }
  // ______________________________________________________________________

  const changeFilterUrl = (value: string) => {
    const changeUrl = url.split('&')
    const regex = /sort/g
    const strArrayUrl = changeUrl.filter((x) => {
      if (!x.match(regex)) {
        return x
      }
    })
    refSelect.current = value

    const urlUpdate = `?sort=${refSelect.current}&${strArrayUrl.join('&')}`
    const resultUrl = urlUpdate.endsWith('&')
      ? urlUpdate.slice(0, urlUpdate.length - 1)
      : urlUpdate

    router.push(resultUrl, {
      scroll: false,
    })

    loading()
  }

  useEffect(() => {
    const array = [...paramFilterStore]
    const index = array.findIndex((v) => v.id === idCategory)
    if (index !== -1) {
      array[index] = stateParam
    } else {
      array.push(stateParam)
    }
    setParamFilterStore(array)
    // ______________________________________________________________________
  }, [refSelect.current])

  // Запись и восстановление значения фильтра из стора

  return (
    <div className='flex justify-between mt-4 p-2 item-center'>
      <div className=' flex gap-2'>
        <HiAdjustmentsVertical className=' w-7 h-7' />
        <select
          value={refSelect.current}
          onChange={(e) => changeFilterUrl(e.target.value)}
          className=' cursor-pointer duration-300 w-[160px] outline-none  '
        >
          {selectValue.map((item) => {
            return (
              <option key={item.id} value={item.sort} className='font-thin '>
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
