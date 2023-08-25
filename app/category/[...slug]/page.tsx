import React from 'react'
import { ICategory } from '@/models/category'
import ProductCart from '@/components/Product'
import Description from '@/components/Category/Description'
import Pagination from '@/components/Product/Pagination'
import BreadCrumbs from '@/components/Product/BreadCrumbs'
import HeaderFilterProduct from '@/components/Product/HeaderFilterProduct'
import { ProductServices } from '@/services/get.product'
import { CategoryServices } from '@/services/get.category'
import { IProduct } from '@/models/product'
import SubCategory from '@/components/Category/SubCategory'
import FilterProduct from '@/components/FilterProduct'

type PropCategoryUpLevel = {
  params: { slug: string[] }
  searchParams: { [key: string]: string }
}
export type RespProp = {
  length: number
  maxPrice: number
  minPrice: number
}

export default async function CategoryUpLevel({
  params,
  searchParams,
}: PropCategoryUpLevel) {
  const { slug } = params
  const categoryId = slug[1]
  const categorySlug = slug[0]
  // блок фильтрации
  const pageNumber = searchParams.page || '1'

  const filterPrice: RespProp = await ProductServices.getAllProductNotFilter(
    categoryId,
  )

  const category: ICategory[] = await CategoryServices.getAllCategory(
    categoryId,
  )

  const product: IProduct[] = await ProductServices.getProductFilterHead(
    categoryId,
    pageNumber,
    searchParams,
  )
  const brand: string[] = await ProductServices.getBrandFilter(categoryId)

  const countSearchFilterProduct: number =
    await ProductServices.getCountSearchFilterProduct(categoryId, searchParams)

  console.log(countSearchFilterProduct)

  return (
    <div className='container mx-auto py-10'>
      <SubCategory category={category} id={Number(categoryId)} />
      <Description category={category} slug={categoryId} />
      <BreadCrumbs
        category={category}
        categoryId={categoryId}
        filterPrice={filterPrice}
      />
      <HeaderFilterProduct
        filterPrice={filterPrice}
        brand={brand}
        countSearchFilterProduct={countSearchFilterProduct}
      />
      <div className=' grid grid-cols-4 lg:grid-cols-5 gap-2 mt-4 p-2 '>
        <div className='col-span-1 hidden lg:block relative h-max-[100px]'>
          <FilterProduct
            filterPrice={filterPrice}
            brand={brand}
            countSearchFilterProduct={countSearchFilterProduct}
          />
        </div>
        <div className='col-span-4 grid grid-cols-2 gap-1 lg:gap-2 md:grid-cols-3 xl:grid-cols-4 '>
          {product.map((cart) => {
            return (
              <>
                <ProductCart product={cart} slug={categorySlug} />
              </>
            )
          })}
        </div>
      </div>
      <div className=' w-full justify-center flex items-center'>
        <Pagination product={product} page={pageNumber} />
      </div>
    </div>
  )
}
