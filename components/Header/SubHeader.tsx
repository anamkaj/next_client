'use client'
import { mobileLeftBar } from '@/store/Jotai/modal'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { BsList } from 'react-icons/bs'
import MobileMenu from './Mobile/MobileMenu'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Search from './Search'
import ProviderProduct from '@/provider/Product/ProviderStor'
import ShopCardHeader from './ShopCardHeader'

export default function SubHeader() {
  //Открытие закрытие каталога групп на моб. версии
  const [active, setSetActive] = useAtom(mobileLeftBar)

  return (
    <div className=' mt-8 flex space-x-2 items-center '>
      {/* кнопки каталога мобильная версия  */}

      <div className=' md:hidden'>
        <>
          <BsList
            className=' h-8 w-8 cursor-pointer'
            onClick={() => setSetActive(true)}
          />
        </>

        <div>
          <div className=' fixed z-40 right-5 top-7 ' hidden={!active}>
            <AiOutlineCloseCircle
              className='h-6 w-6 bg-white rounded-full'
              onClick={() => setSetActive(false)}
            />
          </div>
          <div
            className={
              active
                ? ' bg-black absolute top-0 left-0 w-[100%] h-[1000vh] opacity-50'
                : 'hidden'
            }
          ></div>
          <MobileMenu />
        </div>
      </div>

      <div>
        <Link
          href={`/category`}
          className='hidden md:block px-24 uppercase relative rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 focus:outline-none '
        >
          Каталог
        </Link>
      </div>

      <Search />
      <ProviderProduct>
        <ShopCardHeader />
      </ProviderProduct>
    </div>
  )
}
