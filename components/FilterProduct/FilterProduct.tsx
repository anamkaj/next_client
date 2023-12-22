'use client'
import React, { useState } from 'react'
import MainComponentFilter from './MainComponentFilter'
import { IFilterProductProp } from './model/type'
import MobileFilter from './Mobile/MobileFilter'
import { useWindowSize } from '../../hook/useWindowSize'

export default function FilterProduct({
  filterPrice,
  paramFilterProduct,
  categoryId,
}: IFilterProductProp) {
  const { sumProduct } = paramFilterProduct
  const [activeFilter, setActiveFilter] = useState(true)

  const { size } = useWindowSize()
  const resize = size[0] > 1024 ? true : false

  return (
    <div>
      {resize ? (
        <div>
          <MainComponentFilter
            paramFilterProduct={paramFilterProduct}
            filterPrice={filterPrice}
            categoryId={categoryId}
          />
        </div>
      ) : (
        <div>
          <MobileFilter
            countProductMobile={sumProduct}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            paramFilterProduct={paramFilterProduct}
            filterPrice={filterPrice}
            categoryId={categoryId}
          />
        </div>
      )}
    </div>
  )
}
