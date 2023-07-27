import { IProduct } from '@/models/product'
import { useEffect } from 'react'

interface ValidateScroll extends CheckProps {
  setHiddenScroll: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
}

interface CheckProps {
  product: IProduct[] | undefined
  input: string | undefined
}
// Проверка инпута при вводе
export const validate = (s: string) => {
  const checkInputReg = /[#$&+=@"'()|.?><%$*!:;`~]/g
  if (s.match(checkInputReg) == null) return true
}

// Проверка на длиину введенного в поиск слова
export const useValidateScroll = ({
  product,
  input,
  setHiddenScroll,
  active,
}: ValidateScroll) => {
  const checkInput = ({ product, input }: CheckProps) => {
    if (input?.length === 0 || product?.length == 0 || input === undefined)
      return true
  }

  useEffect(() => {
    if (checkInput({ product, input }) || !active) {
      setHiddenScroll(true)
    } else {
      setHiddenScroll(false)
    }
  }, [input, active, product])
}
