import { Person } from '@/models/form'
import { UseFormReset } from 'react-hook-form'
import ym from 'react-yandex-metrika'

type PropGoalMetrika = {
  isValid: boolean
  reset: UseFormReset<Person>
}

export const useGoalYandexMetrika = ({ isValid, reset }: PropGoalMetrika) => {
  const resetForm = () => {
    setTimeout(() => {
      reset()
    }, 2000)
  }

  const sendGoal = (id: string) => {
    if (isValid) {
      ym('reachGoal', id)
      resetForm()
    }
  }
  return { sendGoal }
}