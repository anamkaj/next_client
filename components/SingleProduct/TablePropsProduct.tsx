import { IProduct } from '@/models/product'
import React from 'react'

export default function TablePropsProduct({
  product,
}: {
  product: IProduct[]
}) {
  return (
    <>
      <div className='flex flex-wrap flex-col gap-2 mt-5 '>
        {Object.keys(product[0].shortParam).map((key, index) => {
          return (
            <div className='flex flex-wrap' key={index}>
              <h3 className='font-sens text-sm text-gray-400'>
                <span className=' font-semibold text-slate-800 text-sm ml-2'>
                  {key}
                </span>
                :
                <span className=' text-slate-500 font-light text-sm ml-2'>
                  {' '}
                  {product[0].shortParam[key]}
                </span>
              </h3>
            </div>
          )
        })}
      </div>
    </>
  )
}
