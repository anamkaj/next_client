import React from 'react'
import { ICategory } from '@/models/category'
import Category from '@/components/Category'
import { CategoryServices } from '@/services/get.category'

export default async function MainPageCategory() {
  const category: ICategory[] = await CategoryServices.getMainCategory()

  return (
    <div className=' container mx-auto mt-5 mb-5'>
      <Category category={category} />
    </div>
  )
}
