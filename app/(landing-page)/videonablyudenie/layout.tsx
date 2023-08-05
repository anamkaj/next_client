import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Установка и Монтаж Видеонаблюдения в Краснодаре',
  description:
    '⭐⭐⭐⭐⭐ ТМК Вектор - компания по установке систем видеонаблюдения и продаже оборудования в Краснодаре и крае. ☛ ЗАКАЗАТЬ видеонаблюдение под ключ с гарантией.',
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
