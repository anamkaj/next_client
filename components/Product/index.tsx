'use server'
import FilterComponent from '../FilterProduct'
import Pagination from './Pagination'
import { IProductCart } from './model/type.'
import { IProduct } from '@/models/product'
import { ProductServices } from '@/services/get.product'
import Cart from './ProductCart'
import CarouselPopularProduct from '../MainPage/CarouselPopularProduct'

export default async function CatalogProduct({
  page,
  categoryId,
  searchParams,
  slug,
}: IProductCart) {
  const product: IProduct[] = await ProductServices.getProductFilterHead(
    categoryId,
    page,
    searchParams,
  )
  return (
    <>
      <div className=' grid grid-cols-4 lg:grid-cols-5 gap-2 p-2 items-start relative '>
        <div className=' col-span-4 lg:col-span-1  '>
          <FilterComponent
            searchParams={searchParams}
            categoryId={categoryId}
          />
        </div>
        <div className=' col-span-4 grid grid-cols-2 gap-1 lg:gap-2 md:grid-cols-3 xl:grid-cols-4'>
          <Cart product={product} slug={slug} />
        </div>
      </div>
      <div className=' w-full justify-center flex items-center'>
        <Pagination page={page} product={product} />
      </div>
      <div className='mt-10'>
        <p className=' font-normal text-xl lg:text-2xl text-slate-600 uppercase'>
          Лидеры продаж
        </p>
        <div className='mt-5'>
          <CarouselPopularProduct />
        </div>
      </div>
    </>
  )
}
