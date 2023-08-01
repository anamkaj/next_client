'use client'
import React, { useState } from 'react'
import { MdClear } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { useAtom } from 'jotai'
import { resultSearchWindows, stateSearch } from '@/store/Jotai/modal'
import { useSearch } from '../hook/get.search.product'
import ScrollList from './ScrollList'
import SearchMobile from './Mobile/SearchMobile'

export default function Search() {
  const [input, setInput] = useState<string>()
  const [active, setActive] = useAtom(stateSearch)
  const { product, errorProduct, errorCategory, category } = useSearch(input)
  const [hiddenScroll, setHiddenScroll] = useAtom(resultSearchWindows)
  // const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })

  const closeSearch = () => {
    setHiddenScroll(true)
    setActive(false)
  }

  const openSearch = () => {
    setHiddenScroll(false)
    setActive(true)
  }

  return (
    <>
      <div className='w-full md:hidden'>
        <SearchMobile
          setInput={setInput}
          isError={errorProduct}
          data={product}
          category={category}
          input={input}
          closeSearch={closeSearch}
        />
      </div>

      <div className=' hidden md:block relative w-[70%]'>
        <div className=' flex items-center '>
          <input
            value={input || ''}
            onClick={() => openSearch()}
            onChange={(e) => setInput(e.target.value)}
            className=' bg-white rounded-lg border-2 border-slate-300 hover:border-slate-300 py-2 px-2 leading-tight focus:outline-none font-thin w-full text-lg z-20 '
            type='text'
            maxLength={30}
            minLength={5}
            placeholder={!active ? 'Поиск по товарам' : 'Введите запрос'}
          />
          <div className='relative '>
            <div className='z-20 absolute right-8 top-[-10px] '>
              {active && (
                <MdClear
                  onClick={() => setInput('')}
                  className=' cursor-pointer h-5 w-5 '
                />
              )}
              {!active && (
                <BsSearch type='submit' className=' cursor-pointer h-5 w-5 ' />
              )}
            </div>
          </div>
        </div>

        <div hidden={hiddenScroll}>
          <ScrollList
            closeSearch={closeSearch}
            setActive={setActive}
            isError={errorProduct}
            product={product}
            category={category}
            active={active}
            input={input}
          />
        </div>
      </div>

      {/* Темный фон для поиска */}
      {active && (
        <div
          onClick={() => closeSearch()}
          className='z-10 fixed top-0 opacity-30 left-0 min-h-full min-w-full bg-gray-800'
        ></div>
      )}
    </>
  )
}
