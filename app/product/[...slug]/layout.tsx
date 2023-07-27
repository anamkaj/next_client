import { IProduct } from '@/models/product'
import { ProductServices } from '@/services/get.product'
import { Metadata } from 'next'
import React from 'react'

type PropGenerateMetadata = {
  params: { slug: string[] }
}

export async function generateMetadata({
  params,
}: PropGenerateMetadata): Promise<Metadata> {
  const { slug } = params
  const product: IProduct[] = await ProductServices.getSingleProduct(
    Number(slug[2]),
  )
  const desc = product[0].descriptionOne
    ? product[0].descriptionOne.slice(0, 170)
    : ''

  return {
    title: product[0].title,
    description: desc,
  }
}

export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
