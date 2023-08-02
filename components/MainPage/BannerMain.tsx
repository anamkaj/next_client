import Image from 'next/image'
import React from 'react'

export default function BannerMain() {
  const imgBanner = 'https://tmk-v.ru:8080/img/mainPage/4334.jpg'
  return (
    <>
      {/* <div className=' hidden xl:w-[310px] xl:block'></div> */}
      <div className=' rounded-lg '>
        <Image
          height={768}
          width={1366}
          src={imgBanner}
          className='h-full w-full '
          alt='Монтаж видеонаблюдения в Краснодаре'
        />
      </div>
    </>
  )
}
