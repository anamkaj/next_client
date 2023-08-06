import React from 'react'
import Image from 'next/image'

export default function BannerCctv() {
  const imgBanner = 'https://tmk-v.ru:8080/img/landing_page_imag/vecteezy.jpg'
  return (
    <>
      <Image
        height={768}
        width={1366}
        src={imgBanner}
        className=' h-[500px] opacity-70 blur-lg absolute '
        alt='Монтаж видеонаблюдения в Краснодаре'
      />
    </>
  )
}
