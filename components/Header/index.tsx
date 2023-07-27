'use client'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Contact from './Contact'
import SubHeader from './SubHeader'
import { Model } from '../UI/Model/Model'
import { FormInstallSpecialist } from '../UI/Form/FormContactSpecialist/FormInstallSpecialist'
import { FormHeaderBtn } from '../UI/Form/FormContactSpecialist/FormHeaderBtn'
import { useAtom } from 'jotai'
import {
  requestConsultationBtn,
  requestInstallationBtn,
} from '@/store/Jotai/modal'

export default function Header() {
  // Монтаж и Установка - кнопка

  const [installation, setInstallation] = useAtom(requestInstallationBtn)
  // Заказать обратный звонок - кнопка
  const [requestConsultation, setRequestConsultation] = useAtom(
    requestConsultationBtn,
  )

  const titlePopup = 'Монтаж и Установка'
  const titlePopup2 = 'Заказать обратный звонок'
  return (
    <div>
      <div className='container mx-auto p-2 bg-white'>
        <div className=' flex flex-col justify-around gap-4 items-center lg:flex-row  '>
          <div>
            <Logo />
          </div>
          <div className=' p-2 hidden xl:block '>
            <p className=' font-semibold'>
              ПЕРСОНАЛЬНОЕ СОПРОВОЖДЕНИЕ НА КАЖДОМ ЭТАПЕ ЗАКАЗА!
            </p>
          </div>
          <div>
            <Menu />
          </div>
          <Contact />
        </div>
        <>
          <SubHeader />
        </>
      </div>

      <div className=' flex items-center justify-center'>
        <div hidden={!installation}>
          <Model
            active={installation}
            setActive={setInstallation}
            titleModel={titlePopup}
          >
            {<FormInstallSpecialist />}
          </Model>
        </div>
        <div hidden={!requestConsultation}>
          <Model
            active={requestConsultation}
            setActive={setRequestConsultation}
            titleModel={titlePopup2}
          >
            <FormHeaderBtn setSpecialist={setRequestConsultation} />
          </Model>
        </div>
      </div>
    </div>
  )
}
