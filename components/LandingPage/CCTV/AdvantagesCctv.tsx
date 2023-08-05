import React from 'react'
import Image from 'next/image'

export default function AdvantagesCctv() {
  return (
    <>
      <div className=' flex justify-center mt-20 flex-col items-center'>
        <h2 className=' text-2xl text-center  font-semibold uppercase tracking-tight'>
          <span className=' font-thin text-xl'>
            Не нужно искать - оставьте заявку{' '}
          </span>{' '}
          <br />
          ПОДБЕРЕМ ОБОРУДОВАНИЕ В ТЕЧЕНИИ 22 МИНУТ
        </h2>
        <hr className=' w-64 mt-4 bg-slate-200' />
      </div>
      <div className='mt-20 grid grid-cols-2 items-center'>
        <div>
          <>
            <Image
              height={600}
              width={600}
              src={`http://localhost:4000/img/landing_page_imag/advantages/content__img.png`}
              alt='Установка видеонаблюдения в Краснодаре'
              className=' mt-2'
            />
          </>
          <>
            <h2 className=' mt-4 font-semibold text-sm md:text-2xl'>
              Монтаж систем видеонаблюдения за 1 день
            </h2>
            <p className=' mt-2 font-thin text-xs md:text-lg leading-5'>
              Надежное оборудование видеонаблюдения. Монтаж видеонаблюдения по
              европейскому стандарту с гарантией до 36 месяцев
            </p>
            <hr className=' mt-4 bg-slate-400 w-[150px] md:w-[300px]' />
            <h3 className=' mt-2 text-red-600  text-sm md:text-xl font-semibold'>
              Бесплатный замер и проект в подарок!
            </h3>
          </>
        </div>
        <div>
          <>
            <h2 className=' mt-4 font-semibold text-sm md:text-2xl'>
              Видеонаблюдение для загородного дома, дачи или коттеджа под ключ.
            </h2>
            <p className=' mt-2 font-thin text-xs md:text-lg leading-5'>
              Защита своей недвижимой собственности от несанкционированного
              вторжения при отсутствии хозяев. Поможем с выбором системы
              видеонаблюдения.
            </p>
            <hr className=' mt-4 bg-slate-400 w-[150px] md:w-[300px]' />
            <h3 className=' mt-2 text-red-600  text-sm md:text-xl font-semibold'>
              Выезд по Краснодару бесплатный!
            </h3>
          </>
          <>
            <Image
              height={300}
              width={300}
              src={`http://localhost:4000/img/landing_page_imag/advantages/content__img_2.png`}
              alt='Установка видеонаблюдения в Краснодаре'
              className=' mt-2'
            />
          </>
        </div>
        <div>
          <>
            <Image
              height={300}
              width={300}
              src={`http://localhost:4000/img/landing_page_imag/advantages/content__img_3.png`}
              alt='Установка видеонаблюдения в Краснодаре'
              className=' mt-2'
            />
          </>
          <>
            <h2 className=' mt-4 font-semibold text-sm md:text-2xl'>
              Видеонаблюдение на предприятии – обеспечение безопасности объекта.
            </h2>
            <p className=' mt-2 font-thin text-xs md:text-lg leading-5'>
              Контролирование периметра с целью предотвращения
              несанкционированных проникновений на территорию. Слежение за
              погрузочно-разгрузочной зоной для выявления фактов воровства.
            </p>
            <hr className=' mt-4 bg-slate-400 w-[150px] md:w-[300px]' />
            <h3 className=' mt-2 text-red-600  text-sm md:text-xl font-semibold'>
              Расчет стоимости объекта в течении 20 минут!
            </h3>
          </>
        </div>
        <div>
          <>
            <h2 className=' mt-4 font-semibold text-sm md:text-2xl'>
              Комплекты видеонаблюдения со скидкой для офиса.
            </h2>
            <p className=' mt-2 font-thin text-xs md:text-lg leading-5'>
              В офисе всегда существуют места, контроль и безопасность которых
              чрезвычайно важны. Например, помещения кассы, бухгалтерии, склада,
              места нахождения клиентов и т. п. Установка системы
              видеонаблюдения в таких местах позволит избежать недоразумений,
              возможно, предотвратить происшествия, быстро разобраться в
              конфликтной ситуации.
            </p>
            <hr className=' mt-4 bg-slate-400 w-[150px] md:w-[300px]' />
            <h3 className=' mt-2 text-red-600  text-sm md:text-xl font-semibold'>
              Бесплатный подбор оборудования!
            </h3>
          </>
          <>
            <Image
              height={400}
              width={400}
              src={`http://localhost:4000/img/landing_page_imag/advantages/content__img_4.png`}
              alt='Установка видеонаблюдения в Краснодаре'
              className=' mt-2'
            />
          </>
        </div>
      </div>
    </>
  )
}
