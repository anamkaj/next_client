'use client'
import { useRouter, usePathname } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()
  const pathname = usePathname()

  const clearFilter = () => {
    router.push(`${pathname}`)
    resetUi()
  }
  const resetUi = () => {
    const timer = setTimeout(() => {
      reset()
    }, 1000)
    return () => clearTimeout(timer)
  }

  return (
    <div className='mt-40 mb-80 flex items-center flex-col '>
      <h2 className=' text-3xl text-center 0 '>Нет подходящих товаров</h2>
      <h3 className=' text-slate-400 mt-4'>Попробуйте очистить фильтры</h3>
      <div className='flex gap-8'>
        <button
          className=' bg-white p-2 text-slate-900 mt-10 text-lg rounded-lg border hover:border-gray-600'
          onClick={() => reset()}
        >
          Повторить запрос
        </button>
        <button
          className='  bg-white p-2 text-slate-900 mt-10 text-lg rounded-lg border hover:border-gray-600'
          onClick={() => clearFilter()}
        >
          Очистить фильтры
        </button>
      </div>
    </div>
  )
}
