'use server'
import Description from '@/components/Category/Description'
import SubCategory from '@/components/Category/SubCategory'
import React from 'react'
import BreadCrumbs from '../BreadCrumbs'
import { ICategory } from '@/models/category'
import { CategoryServices } from '@/services/get.category'

export default async function SubCategoryProduct({
  categoryId,
}: {
  categoryId: string
}) {
  const category: ICategory[] = await CategoryServices.getAllCategory(
    categoryId,
  )

  return (
    <>
      <SubCategory category={category} categoryId={categoryId} />
      <Description category={category} categoryId={categoryId} />
      <BreadCrumbs category={category} categoryId={categoryId} />
    </>
  )
}
