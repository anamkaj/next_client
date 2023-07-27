import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={'/'}>
      <div className=' flex flex-col lg:flex-row gap-4 items-center justify-center'>
        <Image
          src={require('./../../images/component_img/Header/logo.png')}
          alt='text'
          className=' w-[100px] '
        />
        <p className=' mt-0 uppercase font-sans text-black text-xs lg:text-sm lg:break-words '>
          Интернет-магазин Безопасности
        </p>
      </div>
    </Link>
  )
}
