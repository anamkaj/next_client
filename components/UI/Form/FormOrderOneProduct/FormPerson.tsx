import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useFormRequest } from '../hook/form.person.query.hook'
import { NameInput } from '../InputForm/Input/NameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { EmailInput } from '../InputForm/Input/EmailInput'
import { AgreementForm } from '../AgreementForm'
import { IProduct } from '@/models/product'
import { Person } from '@/models/form'
import { useGoalYandexMetrika } from '@/helpers/hook/goal.metrika'

type PropForm = {
  status?: boolean
  product?: IProduct[]
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
  price?: number
}

// Форма быстрый заказ , кнопка в карточку товара "Заявка на покупку товара"

export const FormPerson = ({
  status,
  product,
  setFastOrderModel,
  price,
}: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()

  //Отправка форм обратной связи на сервер
  const { onSubmitFastOrder, response } = useFormRequest({ product, price })

  // Отправка достижения цели в Яндекс метрику
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  useEffect(() => {
    if (response?.status == 200) {
      setTimeout(() => {
        reset()
        return setFastOrderModel(false)
      }, 2000)
    }
  }, [response])

  return (
    <div className=' mt-4'>
      <>
        <form onSubmit={handleSubmit(onSubmitFastOrder)}>
          <div className=' flex flex-col gap-2'>
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            {!status && <EmailInput register={register} errors={errors} />}
            <button
              onClick={() => sendGoal('Event_24')}
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
