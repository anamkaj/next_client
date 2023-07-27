'use client'
import {
  requestConsultationBtn,
  requestInstallationBtn,
} from '@/store/Jotai/modal'
import { useAtom } from 'jotai'
import React from 'react'

export default function Menu() {
  const [installation, setInstallation] = useAtom(requestInstallationBtn)
  const [requestConsultation, setRequestConsultation] = useAtom(
    requestConsultationBtn,
  )
  return (
    <>
      <div className='flex  gap-2 text-white uppercase py-2 lg:flex-row   '>
        {/* {menuList.map((_, index) => (
        <button
          id={menuList[index].title}
          className=' rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-100 '
          key={menuList[index].id}
        >
          <Link to={menuList[index].path}>{menuList[index].title}</Link>
        </button>
      ))} */}
        <button
          onClick={() => setInstallation(true)}
          className='  bg-gray-500 text-white p-2 rounded-lg text-xs uppercase font-thin lg:text-sm lg:font-semibold xl:whitespace-nowrap tracking-tight overflow-visible shadow-lg hover:bg-gray-600 transition duration-200 each-in-out'
        >
          Монтаж и Установка
        </button>
        <button
          onClick={() => setRequestConsultation(true)}
          className='  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-xs uppercase font-thin shadow-md rounded-lg  p-2 lg:text-sm lg:font-semibold xl:whitespace-nowrap'
        >
          Заказать обратный звонок
        </button>
      </div>
    </>
  )
}
