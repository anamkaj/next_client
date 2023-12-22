'use server'
import React from 'react'
import CatalogProduct from '@/components/Product'
import HeaderFilterProduct from '@/components/Product/HeaderFilterProduct'
import SubCategoryProduct from '@/components/Product/Category/SubCategoryProduct'

type PropCategoryUpLevel = {
  params: { slug: string[] }
  searchParams: { [key: string]: string }
}

export default async function CategoryUpLevel({
  params,
  searchParams,
}: PropCategoryUpLevel) {
  const { slug } = params
  const categoryId = slug[1]
  const categorySlug = slug[0]
  const pageNumber = searchParams.page || '1'

  return (
    <div className='container mx-auto mt-5 mb-5  '>
      <div>
        <SubCategoryProduct categoryId={categoryId} />
        <HeaderFilterProduct />
        <CatalogProduct
          categoryId={categoryId}
          page={pageNumber}
          searchParams={searchParams}
          slug={categorySlug}
        />
      </div>
    </div>
  )
}
