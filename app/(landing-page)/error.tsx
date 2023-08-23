'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='mt-40 mb-80 flex items-center flex-col '>
      <h2 className=' text-3xl text-center 0 '>Ошибка обработки запроса</h2>
      <button
        className=' bg-black p-4 text-white mt-10 text-lg'
        onClick={() => reset()}
      >
        Повторить
      </button>
    </div>
  )
}
