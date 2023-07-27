import { ICategory } from '@/models/category'
import { CategoryServices } from '@/services/get.category'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

type PropGenerateMetadata = {
  params: { slug: string[] }
}

export async function generateMetadata({
  params,
}: PropGenerateMetadata): Promise<Metadata> {
  const { slug } = params
  const category: ICategory[] = await CategoryServices.getAllCategory(slug[1])
  const desc = category[0].description
    ? category[0].description.slice(0, 170)
    : ''

  return {
    title: category[0].name,
    description: desc,
  }
}

export default async function SubCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
