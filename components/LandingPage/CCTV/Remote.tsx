'use server'
import React from 'react'
import Image from 'next/image'

export default async function Remote() {
  return (
    <div className=' mt-20 shadow-xs border border-slate-200 '>
      <div className='flex justify-center mt-20 flex-col items-center'>
        <h2 className=' text-2xl text-center  font-semibold uppercase tracking-tight'>
          Бесплатные опции
        </h2>
        <hr className=' w-64 mt-4 bg-slate-200' />
      </div>
      <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 items-center'>
        <div>
          <h2 className='  text-2xl text-center  font-semibold uppercase tracking-tight'>
            НАСТРОИМ ВАМ УДОБНЫЙ ОНЛАЙН-ПРОСМОТР 24/7 С КАМЕР ВИДЕОНАБЛЮДЕНИЯ
          </h2>
          <div className=' flex flex-col mt-10 gap-2 justify-center items-center'>
            <span> ЧЕРЕЗ ЛЮБОЕ УСТРОЙСТВО</span>
            <Image
              height={300}
              width={300}
              src={`https://tmk-v.ru:8080/img/landing_page_imag/22_(1).png`}
              className='  '
              alt='Монтаж видеонаблюдения в Краснодаре'
            />
          </div>
        </div>
        <div>
          <Image
            height={600}
            width={600}
            src={`https://tmk-v.ru:8080/img/landing_page_imag/22_(11).png`}
            className='  '
            alt='Монтаж видеонаблюдения в Краснодаре'
          />
        </div>
      </div>
    </div>
  )
}
