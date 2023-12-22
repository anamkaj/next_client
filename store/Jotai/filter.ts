import { atom } from 'jotai'
import { PropFilterHeader } from '../model/type'

// Сохранение параметров фильтров
export const valueHeaderFilter = atom<PropFilterHeader[]>([])

// ______________________________________________________________________
// Активация экрана загрузки в каталоге товаров

export const loader = atom<boolean>(false)
