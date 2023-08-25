import React from 'react'
import ArticleBadges from './Badges/ArticleBadges'
import QuantityBadges from './Badges/QuantityBadges'
import ImgProductCart from './ImgProductCart'
import TitleProductCart from './TitleProductCart'
import CountView from './CountView/CountView'
import { IProduct } from '@/models/product'
import { ButtonCart } from './ButtonCart'
import ProviderProduct from '../../provider/Product/ProviderStor'

interface IProductCart {
  product: IProduct
  slug: string
}

export default function ProductCart({ product, slug }: IProductCart) {
  return (
    <div
      className='flex flex-col items-center cursor-pointer border +
     border-gray-200 px-4 py-2 rounded-lg shadow-lg bg-white box-border hover:border-1 hover:border-slate-500 h-[350px]'
    >
      <div className=' flex w-full justify-between'>
        <ArticleBadges product={product} />
        <QuantityBadges product={product} />
      </div>

      {/* Изображение товара  */}

      <ImgProductCart product={product} url={slug} />

      <TitleProductCart product={product} url={slug} />

      {/* Счетчики отзывов  */}

      <CountView key={product.id} product={product} />

      {/* <SalesBadges data={data} /> */}

      {/* Блок с ценами и кнопка */}
      <div className='flex w-full items-center mt-auto mb-0 justify-between'>
        <div className='flex space-x-8 md:space-x-6 lg:space-x-2 items-center flex-wrap'>
          <div>
            <p className=' font-bold text-sm md:text-xl'>
              {Math.round(
                product.price * (product.discount / 11),
              ).toLocaleString('ru')}{' '}
              ₽
            </p>
          </div>
          <div className=' bg-gray-100 rounded-lg  py-0 p-2'>
            <span className={'font-light text-sm  md:text-xl line-through'}>
              {product.price.toLocaleString('ru')} ₽
            </span>
          </div>
        </div>

        {/*Добавить в корзину*/}
        <ProviderProduct>
          <ButtonCart key={product.id} product={product} />
        </ProviderProduct>
      </div>
    </div>
  )
}
