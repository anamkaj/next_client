import React, { ReactNode } from 'react'
import { YandexMetricaProvider } from 'next-yandex-metrica'

export default function Metrika({ children }: { children: ReactNode }) {
  return (
    <YandexMetricaProvider
      tagID={44879992}
      initParameters={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
    >
      <main>{children}</main>
    </YandexMetricaProvider>
  )
}
