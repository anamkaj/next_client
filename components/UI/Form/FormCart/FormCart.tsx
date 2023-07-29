import * as React from 'react'
import { Checkbox } from './Checkbox'
import { useForm } from 'react-hook-form'
import { NameInput } from '../InputForm/Input/NameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { useFormCartPage } from '../hook/form.cart.page'
import { EmailInput } from '../InputForm/Input/EmailInput'
import { AgreementForm } from '../AgreementForm'
import { Person } from '@/models/form'
import { useEffect } from 'react'
import { useGoalYandexMetrika } from '@/helpers/hook/goal.metrika'

export const FormCart = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()
  const { onSubmitOrderCart, response } = useFormCartPage()

  // Отправка достижения цели в Яндекс метрику
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })
  useEffect(() => {
    if (response?.status == 200) {
      setTimeout(() => {
        reset()
      }, 1000)
    }
  }, [response])
  return (
    <div className=' flex flex-col bg-white shadow-md p-4 md:mt-0'>
      <div>
        <h2 className='uppercase text-black font-bold mb-5'>
          Контакты для связи
        </h2>
        <p className=' font-thind '>Укажите Ваши контактные данные</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmitOrderCart)}
          className='relative mt-8 space-y-4'
        >
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white text-sm'>
              Обязательное поле <span className={'text-sm'}>*</span>
            </label>
            <NameInput register={register} errors={errors} />
          </div>
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white text-sm'>
              Email
            </label>
            <EmailInput register={register} errors={errors} />
          </div>
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white text-sm'>
              Обязательное поле <span className={'text-sm'}>*</span>
            </label>
            <PhoneInput register={register} errors={errors} />
          </div>

          <div>
            <Checkbox register={register} errors={errors} />
          </div>

          <button
            className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
            onClick={() => sendGoal('Event_21')}
          >
            Отправить
          </button>

          {response && (
            <p className=' font-light text-sm mt-3 text-center'>
              {response.state}
            </p>
          )}
          <div>
            <AgreementForm />
          </div>
        </form>
      </div>
    </div>
  )
}
