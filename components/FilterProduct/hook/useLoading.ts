// Эффект загрузки при выборе параметров фильтра

import { loader } from '@/store/Jotai/filter'
import { useAtom } from 'jotai'

export const useLoading = () => {
  const [blockUi, setBlockUi] = useAtom(loader)

  const loading = () => {
    setBlockUi(true)
    const timer = setTimeout(() => {
      setBlockUi(false)
    }, 2500)
    const clear = () => clearTimeout(timer)
  }
  return { blockUi, loading }
}
