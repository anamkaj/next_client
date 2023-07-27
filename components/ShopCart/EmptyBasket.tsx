import React from 'react'
import CartImg from './../../images/component_img/Cart/header-cart-image.png'
import Image from 'next/image'

export default function EmptyBasket() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-lg text-center mt-2 w-full'>
          Добавьте товары и они появятся в корзине
        </h2>
        <Image className='w-1/6 mt-5' src={CartImg} alt='корзина ТМК Вектор' />
      </div>
    </>
  )
}
