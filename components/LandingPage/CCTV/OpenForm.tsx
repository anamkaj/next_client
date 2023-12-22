'use client'
import { NameInput } from '@/components/UI/Form/InputForm/Input/NameInput'
import { PhoneInput } from '@/components/UI/Form/InputForm/Input/PhoneInput'
import { useGoalYandexMetrika } from '@/hook/goal.metrika'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useOpenForm } from './hook/openForm'
import Image from 'next/image'
import { OpenFormProp } from '@/models/form'

export default function OpenForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<OpenFormProp>()
  const { onSubmitOpenForm, response } = useOpenForm()
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  return (
    <div className=' bg-gradient-to-r from-slate-100 rounded-l-lg shadow-l-lg '>
      <div className='flex justify-center mt-20 flex-col items-center'>
        <h2 className='mt-4 text-2xl text-center  font-semibold uppercase tracking-tight'>
          Получите профессиональную консультацию
        </h2>
        <hr className=' w-64 mt-4 bg-slate-200' />
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 items-center'>
        <div className=' col-span-1'>
          <div className=' flex flex-col items-center justify-center'>
            <Image
              height={300}
              width={300}
              src={`https://tmk-v.ru:8080/img/landing_page_imag/wrap__img.jpg`}
              alt='Установка видеонаблюдения в Краснодаре'
              className=' rounded-full md:w-[200px] shadow-md'
            />
            <div className=' mb-4 mt-2 text-center font-thin '>
              <span className='font-semibold'>ВЛАДИМИР</span> <br /> Инженер
              (техник) слаботочных систем <br /> 4 категории
            </div>
          </div>
        </div>
        <div className=' col-span-2 mt-4 md:mt-0 p-4'>
          <p className='text-xl md:text-2xl font-thin whitespace-pre-wrap'>
            Вам перезвонит опытный специалист и ответит на все ваши вопросы,
            далее подберем решение для вашей задачи и составим смету!
          </p>
          <>
            <ul className=' font-semibold mt-4'>
              <li>- Просчитаем детальную смету без дальнейших переплат</li>
              <li>- Подскажем какие камеры лучше и куда поставить</li>
              <li>- Поможем выбрать разрешение и фокусное расстояние камер</li>
            </ul>
          </>
          <>
            <form
              onSubmit={handleSubmit(onSubmitOpenForm)}
              className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-2 '
            >
              <div className=' flex flex-col gap-2'>
                <NameInput register={register} errors={errors} />
              </div>
              <div>
                <PhoneInput register={register} errors={errors} />
              </div>
              <div>
                <button
                  onClick={() => sendGoal('Event_25')}
                  className='w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg  py-2.5 text-center mr-2 mb-2 text-sm  cursor-pointer uppercase '
                >
                  Отправить
                </button>
              </div>
            </form>
            <div>
              {response && (
                <p className=' font-light text-sm mt-3 text-center'>
                  {response.state}
                </p>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  )
}
