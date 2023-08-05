'use client'
import React, { useEffect, useState, useRef } from 'react'
import { imgWork } from '@/components/LandingPage/CCTV/helper/info'
import usePortal from 'react-useportal'
import Image from 'next/image'

export default function Work() {
  const { openPortal, closePortal, isOpen, Portal } = usePortal()
  const ref = useRef<number>(0)

  const changeModal = (id: number, event: any) => {
    ref.current = id
    openPortal(event)
  }

  return (
    <>
      <div className='flex justify-center mt-20 flex-col items-center'>
        <h2 className=' text-2xl text-center  font-semibold uppercase tracking-tight'>
          ВЫПОЛНЕННЫЕ РАБОТЫ
        </h2>
        <hr className=' w-64 mt-4 bg-slate-200' />
      </div>
      <div className=' grid grid-cols-4 md:grid-cols-6 mt-10 gap-2 rounded-lg '>
        <>
          {imgWork.map((x, index) => {
            return (
              <div key={index}>
                <Image
                  height={200}
                  width={200}
                  src={`http://localhost:4000/img/landing_page_imag/work/${x}`}
                  alt='Установка видеонаблюдения в Краснодаре'
                  onClick={(e) => changeModal(index, e)}
                  className=' rounded-lg shadow-lg'
                />
              </div>
            )
          })}
        </>

        {isOpen && (
          <>
            <Portal>
              <div className=' flex items-center justify-center '>
                <div className='z-30 fixed top-[10%] left-auto '>
                  <Image
                    height={400}
                    width={600}
                    src={`http://localhost:4000/img/landing_page_imag/work/${
                      imgWork[ref.current]
                    }`}
                    className='w-[300px] md:w-[500px]'
                    alt='Установка видеонаблюдения в Краснодаре'
                  />
                </div>
              </div>
            </Portal>
            <div
              onClick={() => closePortal()}
              className=' top-0 left-0 fixed opacity-70 bg-black h-full w-full z-20'
            ></div>
          </>
        )}
      </div>
    </>
  )
}
