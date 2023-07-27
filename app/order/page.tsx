import PageCart from '@/components/ShopCart'
import ProviderStore from '@/provider/Product/ProviderStor'

import React from 'react'

export default function ShopCardPage() {
  return (
    <div className='container mx-auto p-2'>
      <ProviderStore>
        <PageCart />
      </ProviderStore>
    </div>
  )
}
