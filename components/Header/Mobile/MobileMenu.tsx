'use client'
import { item } from '@/components/UI/animation/category'
import { motion } from 'framer-motion'
import React from 'react'
import { BsArrowLeftCircle, BsList } from 'react-icons/bs'
import { useAtom } from 'jotai'
import { mobileLeftBar } from '@/store/Jotai/modal'
import ProviderProduct from '@/provider/Product/ProviderStor'
import { MobileShopCart } from './MobileShopCart'
import ListMenu from '../ListMenu'

export default function MobileMenu() {
  const [active, setSetActive] = useAtom(mobileLeftBar)

  if (active)
    return (
      <div className='z-40 fixed top-0 left-0 w-[80vw] h-[100%] bg-slate-50 '>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={item}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <div
            className=' p-2 flex gap-2 items-center mt-4 '
            onClick={() => setSetActive(false)}
          >
            <>
              <BsArrowLeftCircle className=' w-5 h-5 ' />
            </>
            <h3>Назад</h3>
          </div>

          <div className=' bg-slate-50 flex justify-between items-center mb-2 '>
            <div className=' mt-4 p-2 flex items-center justify-between'>
              <div className=' flex items-center gap-2'>
                <BsList className=' w-5 h-5' />
                <h2 className=' font-semibold text-lg'>Каталог</h2>
              </div>
            </div>
            <ProviderProduct>
              <MobileShopCart setSetActive={setSetActive} />
            </ProviderProduct>
          </div>

          <ListMenu />
        </motion.div>
      </div>
    )
}
