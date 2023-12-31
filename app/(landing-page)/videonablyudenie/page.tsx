import BannerCctv from '@/components/LandingPage/CCTV/BgBannerCctv'
import React from 'react'
import MainDisplay from '@/components/LandingPage/CCTV/MainDisplay'
import ProductCartCctv from '@/components/LandingPage/CCTV/ProductCartCctv'
import Work from '@/components/LandingPage/CCTV/Work'
import Remote from '@/components/LandingPage/CCTV/Remote'
import OpenForm from '@/components/LandingPage/CCTV/OpenForm'
import AdvantagesCctv from '@/components/LandingPage/CCTV/AdvantagesCctv'
import CarouselPopularProduct from '@/components/MainPage/CarouselPopularProduct'
import ReviewsCarousel from '@/components/UI/Carousel/ReviewsCarusel/ReviewsCarousel'
import YandexMap from '@/components/LandingPage/CCTV/YandexMap'

export default function LandingPageCctv() {
  return (
    <div className=' container mx-auto mt-5 mb-5 p-2'>
      <div>
        <div className=' relative'>
          <BannerCctv />
        </div>
        <div className=' relative h-[600px] md:h-[400px] xl:md:h-[500px]'>
          <MainDisplay />
        </div>
        <>
          <ProductCartCctv />
        </>
        <>
          <OpenForm />
        </>
        <>
          <Work />
        </>
        <>
          <Remote />
        </>
        <>
          <div className=' mt-12 mb-6'>
            <p className=' font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
              Товары месяца
            </p>
          </div>
          <div className='mt-5'>
            <CarouselPopularProduct />
          </div>
        </>
        <>
          <AdvantagesCctv />
        </>
        <>
          <ReviewsCarousel />
        </>
        <>
          <YandexMap />
        </>
      </div>
    </div>
  )
}
