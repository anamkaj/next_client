import BannerMain from '@/components/MainPage/BannerMain'
import BrandBanner from '@/components/UI/Carousel/BrandCarousel/BrandBanner'
import CarouselPopularProduct from '@/components/MainPage/CarouselPopularProduct'
import ExtraBenefit from '@/components/MainPage/ExtraBenefit'
import Services from '@/components/MainPage/Services'
import ReviewsCarousel from '@/components/UI/Carousel/ReviewsCarusel/ReviewsCarousel'
import Advantages from '@/components/MainPage/Advantages'

export default function MainPage() {
  return (
    <main className=''>
      <div className='container mx-auto p-2'>
        <div className=' w-full flex mt-4 lg:mt-0 justify-center '>
          <BannerMain />
        </div>
        <>
          <ExtraBenefit />
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
          <BrandBanner />
        </>
        <>
          <Services />
        </>
        <>
          <ReviewsCarousel />
        </>
        <>
          <Advantages />
        </>
      </div>
    </main>
  )
}
