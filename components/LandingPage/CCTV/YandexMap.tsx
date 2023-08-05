'use client'
import Link from 'next/link'
import React from 'react'

export default function YandexMap() {

  return (
    <>
      <div className=' flex justify-center mt-20 flex-col items-center'>
        <h2 className=' text-2xl text-center  font-semibold uppercase tracking-tight'>
          <span className=' font-thin text-xl'>Нас легко найти!</span> <br />
          Много положительных отзывов
        </h2>
        <hr className=' w-64 mt-4 bg-slate-200' />
      </div>
      <div className=' mt-10 grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-items-center  p-4'>
        <div className='col-span-1 '>
          <iframe
            className='h-[630px] w-[370]'
            src='https://yandex.ru/maps-reviews-widget/205267209043?comments'
          ></iframe>
        </div>

        <div className='w-full col-span-2'>
          <div className=''>
            <Link
              href='https://yandex.ru/maps/org/tmk_vektor/205267209043/?utm_medium=mapframe&utm_source=maps'
              className=''
            ></Link>
            <Link
              href='https://yandex.ru/maps/35/krasnodar/category/security_and_alarm_systems/184105350/?utm_medium=mapframe&utm_source=maps'
              className=''
            ></Link>
            <Link
              href='https://yandex.ru/maps/35/krasnodar/category/installation_works/184107613/?utm_medium=mapframe&utm_source=maps'
              className=''
            ></Link>
            <iframe
              src='https://yandex.ru/map-widget/v1/-/CCUIzVXjCA'
              width='960'
              height='600'
              frameBorder='1'
              // allowFullScreen='true'
              className='w-[370px] md:w-[490px] lg:w-[620px] xl:w-full'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
