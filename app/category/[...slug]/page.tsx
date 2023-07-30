import React from 'react'
import { ICategory } from '@/models/category'
import ProductCart from '@/components/Product'
import Category from '@/components/Category'
import Description from '@/components/Category/Description'
import Pagination from '@/components/Product/Pagination'
import BreadCrumbs from '@/components/Product/BreadCrumbs'
import HeaderFilterProduct from '@/components/Product/HeaderFilterProduct'
import { ProductServices } from '@/services/get.product'
import { CategoryServices } from '@/services/get.category'
import { IProduct } from '@/models/product'
import CategoryDownLevel from '@/components/Category/CategoryDownLevel'
import SubCategory from '@/components/Category/SubCategory'

type PropCategoryUpLevel = {
  params: { slug: string }
  searchParams: { [key: string]: string }
}

export default async function CategoryUpLevel({
  params,
  searchParams,
}: PropCategoryUpLevel) {
  const { slug } = params
  const pageNumber = searchParams.page
  const pageFilter = searchParams.filter
    ? searchParams.filter.split('?')
    : ['popularity_desc']
  const category: ICategory[] = await CategoryServices.getAllCategory(slug[1])
  const product: IProduct[] = await ProductServices.getProductFilterHead(
    slug[1],
    pageNumber,
    pageFilter[0],
  )

  console.log(pageFilter)

  return (
    <div className='container mx-auto py-10'>
      <SubCategory category={category} id={Number(slug[1])} />
      <Description category={category} slug={slug[1]} />
      <BreadCrumbs category={category} slug={slug} />
      <HeaderFilterProduct pageFilter={pageFilter[0]} pageNumber={pageNumber} />
      <div className='grid grid-cols-2 gap-1 lg:gap-2 md:grid-cols-3 xl:grid-cols-4 mt-4'>
        {product.map((cart) => {
          return (
            <>
              <ProductCart product={cart} slug={slug} />
            </>
          )
        })}
      </div>
      <div className=' w-full justify-center flex items-center'>
        <Pagination product={product} />
      </div>
    </div>
  )
}
