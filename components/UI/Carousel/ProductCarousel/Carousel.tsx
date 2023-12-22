'use client'
import React, { useEffect, useState } from 'react'
import ArticleBadges from '@/components/Product/Badges/ArticleBadges'
import QuantityBadges from '@/components/Product/Badges/QuantityBadges'
import { ButtonCart } from '@/components/Product/ButtonCart'
import CountView from '@/components/Product/CountView/CountView'
import ImgProductCart from '@/components/Product/ImgProductCart'
import TitleProductCart from '@/components/Product/TitleProductCart'
import ProviderProduct from '../../../../provider/Product/ProviderStor'
import { IProduct } from '@/models/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { useWindowSize } from '@/hook/useWindowSize'

const PopularProduct = ({ cart }: { cart: IProduct }) => {
  return (
    <div
      className='flex flex-col items-center cursor-pointer border +
   border-gray-200 px-4 py-2 rounded-lg shadow-lg bg-white box-border hover:border-1 hover:border-slate-500 h-[360px]'
    >
      <div className=' flex w-full justify-between'>
        <ArticleBadges product={cart} />
        <QuantityBadges product={cart} />
      </div>

      {/* Изображение товара  */}

      <ImgProductCart product={cart} url={'popular'} />

      <TitleProductCart product={cart} url={'popular'} />

      {/* Счетчики отзывов  */}

      <CountView key={cart.id} product={cart} />

      {/* <SalesBadges data={data} /> */}

      {/* Блок с ценами и кнопка */}
      <div className='flex w-full items-center mt-auto mb-0 justify-between'>
        <div className='flex space-x-8 md:space-x-6 lg:space-x-2 items-center flex-wrap'>
          <div>
            <p className=' font-bold text-sm md:text-xl'>
              {Math.round(cart.price * (cart.discount / 11)).toLocaleString(
                'ru',
              )}{' '}
              ₽
            </p>
          </div>
          <div className=' bg-gray-100 rounded-lg  py-0 p-2'>
            <span className={'font-light text-sm  md:text-xl line-through'}>
              {cart.price.toLocaleString('ru')} ₽
            </span>
          </div>
        </div>

        {/*Добавить в корзину*/}
        <ProviderProduct>
          <ButtonCart key={cart.id} product={cart} />
        </ProviderProduct>
      </div>
    </div>
  )
}

export default function CarouselProduct({ product }: { product: IProduct[] }) {
  const [slide, setSlide] = useState<number>(5)
  const { size } = useWindowSize()
  const width = size[0]

  useEffect(() => {
    if (width <= 768) {
      setSlide(2)
    } else if (width <= 1024) {
      setSlide(3)
    } else if (width >= 1024) {
      setSlide(5)
    }
  }, [width])

  return (
    <div className=' relative shadow-lg'>
      <Swiper
        spaceBetween={10}
        slidesPerView={slide}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        modules={[Autoplay]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {product.map((cart) => {
          return (
            <SwiperSlide key={cart.id}>
              <PopularProduct cart={cart} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
