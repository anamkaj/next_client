'use client'
import React, { useEffect, useState } from 'react'
import HeadSingleProduct from './HeadSingleProduct'
import CarouselImage from './CarouselImage'
import CharacteristicsBtn from './ButtonTab/CharacteristicsBtn'
import TablePropsProduct from './TablePropsProduct'
import { IProduct } from '@/models/product'
import ServicesBtn from './ButtonTab/ServicesBtn'
import DescriptionBtn from './ButtonTab/DescriptionBtn'
import ReviewsBtn from './ButtonTab/ReviewsBtn'
import ProviderProduct from '@/provider/Product/ProviderStor'
import CartPrice from './CartPrice/CartPrice'
import CallSingleCart from './CallSingleCart'
import TabSingleCart from './Tab/TabSingleCart'
import { Popup } from '../UI/Form/AddProductToStore/PopupAddStore'
import { Model } from '../UI/Model/Model'
import { useAtom, useSetAtom } from 'jotai'
import {
  addStorButton,
  callSpecialistButton,
  fastOrderButton,
  requestConsultationBtn,
} from '@/store/Jotai/modal'
import { FastOrderCart } from '../UI/Form/FastOrder/FastOrderCart'
import { FormInstallSpecialist } from '../UI/Form/FormContactSpecialist/FormInstallSpecialist'
import { countViewIncrement } from './hook/count.view.inc'

interface ISingleProduct {
  product: IProduct[]
}

export default function SingleProduct({ product }: ISingleProduct) {
  const [activeTab, setActiveTab] = useState(1)
  //Состаяние модальных окон
  const [addStoreForm, setAddStoreForm] = useAtom(addStorButton)
  const [fastOrderModel, setFastOrderModel] = useAtom(fastOrderButton)
  const [specialist, setSpecialist] = useAtom(callSpecialistButton)

  //Счетчики количество товаров в popup
  const [countPopupProduct, setCountPopupProduct] = useState(1)
  const [countFastOrderProduct, setCountFastOrderProduct] = useState(1)

  //_______________________________________________________________________
  const titleModel = 'Товар добавлен в корзину'
  const titleFastOrderModel = 'Заявка на покупку товара'
  const titleSpecialistCall = 'Спецификация обьета'

  useEffect(() => {
    countViewIncrement(product[0].id)
    console.log('yas')
  }, [])

  return (
    <div className='container mx-auto p-4 mt-1 lg:mt-5'>
      {/* <Crumbs id={product[0].categoryId} /> */}
      <h1 className='font-bold text-2xl mt-5'>{product[0].title}</h1>

      <div className='grid grid-cols-1 gap-4 items-start md:grid-cols-2 xl:grid-cols-3'>
        {/*Артикул и количество отзывов Слайд с фото  */}
        <div>
          <HeadSingleProduct product={product} />
          <CarouselImage product={product} />
        </div>

        {/*Характеристики*/}

        <div className=' hidden xl:block mt-20  '>
          <h2 className='font-light'>Технические характеристики</h2>
          <TablePropsProduct product={product} />

          <div className='  mt-2 items-center hidden md:flex'>
            <CharacteristicsBtn setActiveTab={setActiveTab} />
            {/* <ServicesBtn setActiveTab={setActiveTab} /> */}
            <DescriptionBtn setActiveTab={setActiveTab} />
            <ReviewsBtn setActiveTab={setActiveTab} />
          </div>
        </div>

        {/*Карточка добавления в корзину (справа)*/}
        <div>
          <ProviderProduct>
            <CartPrice
              product={product}
              setActive={setAddStoreForm}
              setFastOrderModel={setFastOrderModel}
              setCountPopupProduct={setCountPopupProduct}
              setCountFastOrderProduct={setCountFastOrderProduct}
            />
          </ProviderProduct>
          <CallSingleCart />
        </div>
      </div>

      {/*описание и характеристики TAB*/}
      <div>
        <TabSingleCart
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          product={product}
        />
      </div>

      {/*Модальное окно/ Добавление в корзину */}
      <div hidden={!addStoreForm}>
        <Model
          setActive={setAddStoreForm}
          active={addStoreForm}
          titleModel={titleModel}
        >
          <ProviderProduct>
            <Popup
              setActive={setAddStoreForm}
              product={product}
              countPopupProduct={countPopupProduct}
              setCountPopupProduct={setCountPopupProduct}
            />
          </ProviderProduct>
        </Model>
      </div>
      {/*Модальное окно/ Быстрый заказ */}

      <div hidden={!fastOrderModel}>
        <Model
          setActive={setFastOrderModel}
          active={fastOrderModel}
          titleModel={titleFastOrderModel}
        >
          <FastOrderCart
            setFastOrderModel={setFastOrderModel}
            product={product}
            countFastOrderProduct={countFastOrderProduct}
            setCountFastOrderProduct={setCountFastOrderProduct}
          />
        </Model>
      </div>

      {/*Заявкаа на выезд специалиста  */}
      <div hidden={!specialist}>
        <Model
          setActive={setSpecialist}
          active={specialist}
          titleModel={titleSpecialistCall}
        >
          <FormInstallSpecialist />
        </Model>
      </div>
    </div>
  )
}
