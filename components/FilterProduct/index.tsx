'use server'
import React from 'react'
import { ParamFilterProduct, PriceProp } from './model/type'
import { ProductServices } from '@/services/get.product'
import FilterProduct from './FilterProduct'
import { FilterComponentProp } from '../Product/model/type.'

export default async function FilterComponent({
  categoryId,
  searchParams,
}: FilterComponentProp) {
  const paramFilterProduct: ParamFilterProduct =
    await ProductServices.getFilterParamsProduct(categoryId, searchParams)

  const filterPrice: PriceProp = await ProductServices.getAllProductNotFilter(
    categoryId,
  )

  return (
    <div>
      <FilterProduct
        paramFilterProduct={paramFilterProduct}
        filterPrice={filterPrice}
        categoryId={categoryId}
      />
    </div>
  )
}
