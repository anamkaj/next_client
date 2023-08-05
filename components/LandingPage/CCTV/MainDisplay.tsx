'use client'
import React from 'react'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { requestConsultationBtn } from '@/store/Jotai/modal'

export default function MainDisplay() {
  const [_, setRequestConsultation] = useAtom(requestConsultationBtn)
  //   const titleForm = 'Вызвать инженера'
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 p-4 absolute z-10 items-center'>
      <div className='w-full flex justify-center'>
        <Image
          height={768}
          width={1366}
          src={'https://tmk-v.ru:8080/img/landing_page_imag/quad-software.png'}
          className='w-[500px] xl:w-full'
          alt='Установка видеонаблюдения в Краснодаре'
        />
      </div>
      <div className=' mt-5 '>
        <h1 className='text-4xl xl:text-6xl font-semibold uppercase tracking-tight'>
          УСТАНОВКА СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ <br />
        </h1>
        <h2 className=' mt-0 lg:mt-4 text-2xl xl:text-4xl font-semibold uppercase tracking-tight '>
          <span>
            <mark className=' bg-yellow-300'>«ПОД КЛЮЧ»</mark>
          </span>
          В КРАСНОДАРЕ{' '}
        </h2>
        <p className=' uppercase mt-4 md:mt-2 lg:mt-6 text-xl lg:text-2xl font-medium'>
          с гарантией до 2 лет
        </p>
        <ul className=' mt-8 md:mt-4 lg:mt-8 font-thin uppercase text-sm xl:text-xl list-disc md:ml-10 xl:ml-20'>
          <li>Бесплатно приедем к Вам для осмотра</li>
          <li>Установим профессиональное оборудование</li>
          <li>Дадим гарантию по договору до 2 лет</li>
        </ul>
        <button
          onClick={() => setRequestConsultation(true)}
          className='w-full md:w-auto ml-0 xl:ml-20 mt-5 lg:mt-10 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg px-10 xl:px-20 py-2.5 text-center mr-2 mb-2 text-sm xl:text-xl cursor-pointer uppercase shadow-xl'
        >
          Заказать обратный звонок
        </button>
      </div>
    </div>
  )
}
