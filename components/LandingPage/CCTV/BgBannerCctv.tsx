import React from 'react'
import Image from 'next/image'

export default function BannerCctv() {
  const imgBanner = 'https://tmk-v.ru:8080/img/landing_page_imag/vecteezy.jpg'
  return (
    <div className=''>
      <Image
        height={768}
        width={1366}
        src={imgBanner}
        className=' h-[600px] opacity-5 saturate-200 absolute  '
        alt='Монтаж видеонаблюдения в Краснодаре'
      />
    </div>
  )
}
