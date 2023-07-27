import { ICategory } from '@/models/category'
import { IProduct } from '@/models/product'
import { resultSearchWindows, stateSearch } from '@/store/Jotai/modal'
import { useAtom } from 'jotai'
import React from 'react'
import { BsSearch, BsArrowLeftCircle } from 'react-icons/bs'
import { MdClear } from 'react-icons/md'
import ScrollListMobile from './ScrollListMobile'

type InputMobileProp = {
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>
  data: IProduct[] | undefined
  isError: boolean
  category: ICategory[] | undefined
  input: string | undefined
  closeSearch: () => void
}

export default function SearchMobile({
  setInput,
  data,
  isError,
  category,
  input,
  closeSearch,
}: InputMobileProp) {
  const [active, setActive] = useAtom(stateSearch)
  const [hiddenScroll, setHiddenScroll] = useAtom(resultSearchWindows)

  const changeStateSearchWindows = () => {
    setActive(true)
    setHiddenScroll(true)
  }

  return (
    <>
      {/* Плейсхолдер и икона поиска */}

      <div
        className='  flex items-center justify-around border-b-2'
        onClick={() => changeStateSearchWindows()}
      >
        <span className=' text-slate-500'>Поиск по товарам</span>
        <BsSearch type='submit' className=' cursor-pointer h-5 w-5 ' />
      </div>
      {/* Темный фон для поиска */}
      {active && (
        <div
          onClick={() => setActive(false)}
          className='z-10 fixed top-0 opacity-30 left-0 min-h-full min-w-full bg-gray-800'
        ></div>
      )}

      {/* Окно поиска для мобильной версии */}
      <div
        hidden={!active}
        className='z-20 absolute top-0 left-0 min-h-full min-w-full bg-white shadow-xl'
      >
        <div>
          <input
            value={input || ''}
            onChange={(e) => setInput(e.target.value)}
            className='bg-white rounded-lg border-2 py-2 px-2 leading-tight focus:outline-none font-thin w-full mt-4 '
            type='text'
            maxLength={30}
            minLength={5}
            placeholder={!active ? 'Поиск по товарам' : 'Введите запрос'}
          />

          <div className=' z-10 absolute top-[3%] right-10'>
            {active && (
              <MdClear
                onClick={() => setInput('')}
                className=' cursor-pointer h-5 w-5 '
              />
            )}
          </div>
        </div>
        <div
          className=' lg:hidden mt-4 ml-2 z-10 flex items-center gap-2'
          onClick={() => setActive(false)}
        >
          <span>
            <BsArrowLeftCircle className=' w-5 h-5 text-slate-500' />
          </span>
          <span>Назад</span>
        </div>
        <ScrollListMobile
          closeSearch={closeSearch}
          setActive={setActive}
          isError={isError}
          product={data}
          category={category}
          active={active}
          input={input}
        />
      </div>
    </>
  )
}
