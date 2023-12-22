'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CheckBox } from '../InputForm/CheckBox/CheckBox'
import { EmailInput } from '../InputForm/Input/EmailInput'
import { NameInput } from '../InputForm/Input/NameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { useFormHeaderBtn } from '../hook/form.btn.header.query.hook'
import { AgreementForm } from '../AgreementForm'
import { Person } from '@/models/form'
import { useGoalYandexMetrika } from '@/hook/goal.metrika'
import { useAtom } from 'jotai'
import { requestInstallationBtn } from '@/store/Jotai/modal'

// Форма запроса выезда специалиста , кнопка в хедере "Монтаж и Установка"

export const FormInstallSpecialist = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()

  const [_, setInstallation] = useAtom(requestInstallationBtn)

  const { onSubmitFormContact, response } = useFormHeaderBtn()
  // Отправка достижения цели в Яндекс метрику
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  useEffect(() => {
    if (response?.status == 200) {
      setTimeout(() => {
        reset()
        return setInstallation(false)
      }, 2000)
    }
  }, [response])

  return (
    <div className=' mt-4 w-[350px] lg:w-[400px]'>
      <>
        <form onSubmit={handleSubmit(onSubmitFormContact)}>
          <div className=' flex flex-col gap-2'>
            <CheckBox register={register} errors={errors} />
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <button
              onClick={() => sendGoal('Event_23')}
              className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
            >
              Отправить
            </button>
          </div>
        </form>
      </>

      {response && (
        <p className=' font-light text-sm mt-3 text-center'>{response.state}</p>
      )}

      <div>
        <AgreementForm />
      </div>
    </div>
  )
}
