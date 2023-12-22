'use client'
import React from 'react'
import '././css/scrollBar.css'
import { ProductParamFilterProps } from './model/type'
import { CgMathPlus } from 'react-icons/cg'
import { CgMathMinus } from 'react-icons/cg'
import { useWindowSize } from '@/hook/useWindowSize'

export default function CheckboxFilter({
  listParam,
  parentActive,
  setListParams,
  setParentActive,
  paramFilter,
  changeUrlParamFilter,
  data,
  loading,
}: ProductParamFilterProps) {
  const { size } = useWindowSize()
  const permission = size[0] < 1024

  // Добавление и удаление параметров из массива
  const arrayParams = (childrenName: string, parentName: string) => {
    if (Object.keys(paramFilter.current).includes(parentName)) {
      if (!paramFilter.current[parentName].includes(`q_${childrenName}`)) {
        paramFilter.current[parentName].push(`q_${childrenName}`)
      } else {
        const childrenDel = paramFilter.current[parentName].filter(
          (x) => x !== `q_${childrenName}`,
        )

        if (childrenDel.length == 0) {
          delete paramFilter.current[parentName]
        } else {
          paramFilter.current[parentName] = childrenDel
        }
      }
    } else {
      paramFilter.current[parentName] = [`q_${childrenName}`]
    }
  }
  // ______________________________________________________________________

  // Открыть\ закрыть список параметров
  const changeStateParent = (index: number) => {
    setParentActive(parentActive.map((x, item) => (index == item ? !x : x)))
  }

  // Состояне чекбоксов
  const changeCheckbox = (
    childrenName: string,
    parentId: number,
    childrenId: number,
    parentName: string,
  ) => {
    arrayParams(childrenName, parentName)
    setListParams(
      listParam.map((item) => {
        return item.map((v) => {
          if (v.parent == parentId && v.children == childrenId) {
            v.state = !v.state
            return v
          } else {
            return v
          }
        })
      }),
    )
    changeUrlParamFilter()
    loading()
  }

  return (
    <>
      <div className=' mt-5 '>
        <h3 className='font-semibold text-normal lg:text-sm'>
          Параметры оборудования{' '}
        </h3>
        <div className='mt-2'>
          {data.map((x, index) => {
            return (
              <div key={index}>
                <h3
                  className='  hover:font-medium cursor-pointer flex gap-2 items-center lg:text-sm wh'
                  onClick={() => changeStateParent(index)}
                >
                  {parentActive[index] == true ? (
                    <span>
                      <CgMathPlus className=' h-3 w-3' />
                    </span>
                  ) : (
                    <span>
                      <CgMathMinus className=' h-3 w-3' />
                    </span>
                  )}
                  {x.key}
                </h3>
                <ul
                  hidden={parentActive[index]}
                  className={
                    x.value.length > 10
                      ? ' overflow-y-scroll h-[200px] mt-2'
                      : ' overflow-hidden h-auto'
                  }
                >
                  {x.value.map((e, item) => {
                    return (
                      <li key={item}>
                        <label
                          title={e}
                          className=' ml-4 font-normal hover:underline cursor-pointer uppercase  mobile:text-[10px] lg:text-xs'
                        >
                          <input
                            value={e}
                            title={e}
                            type='checkbox'
                            checked={
                              listParam[index] == undefined
                                ? false
                                : listParam[index][item] == undefined
                                ? false
                                : listParam[index][item].state == undefined
                                ? false
                                : listParam[index][item].state
                            }
                            onChange={(v) =>
                              changeCheckbox(v.target.value, index, item, x.key)
                            }
                          />
                          {permission ? (
                            <span className='ml-2 font-thin text-slate-700'>
                              {e.length > 30 ? e.slice(0, 45) + '...' : e}
                            </span>
                          ) : (
                            <span className='ml-2 font-thin text-slate-700'>
                              {e.length > 20 ? e.slice(0, 23) + '...' : e}
                            </span>
                          )}
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
