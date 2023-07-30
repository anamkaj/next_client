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
      <div className=' flex uppercase py-2 lg:flex-row justify-between items-center'>
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
          className=' w-full whitespace-nowrap py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 shadow '
        >
          Монтаж и Установка
        </button>
        <button
          onClick={() => setRequestConsultation(true)}
          className=' w-full whitespace-nowrap py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 shadow'
        >
          Заказать обратный звонок
        </button>
      </div>
    </>
  )
}
