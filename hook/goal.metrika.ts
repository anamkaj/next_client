import { Person } from '@/models/form'
import { useMetrica } from 'next-yandex-metrica'
import { UseFormReset } from 'react-hook-form'

type PropGoalMetrika = {
  isValid: boolean
  reset: UseFormReset<Person>
}

export const useGoalYandexMetrika = ({ isValid, reset }: PropGoalMetrika) => {
  const { reachGoal } = useMetrica()
  const resetForm = () => {
    setTimeout(() => {
      reset()
    }, 2000)
  }

  const sendGoal = (goal: string) => {
    if (isValid) {
      reachGoal(goal)
      resetForm()
    }
  }
  return { sendGoal }
}
