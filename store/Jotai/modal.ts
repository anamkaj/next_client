import { atom } from 'jotai'

// Состояние модальных окон

// Состояние модального окна при добавлении товаров в карзину , заказе выезда специалиста и карточках товаров

export const productModal = atom<boolean>(false)

//Левый сайд бар для каталога меню на моб версии
export const mobileLeftBar = atom<boolean>(false)

// Активное состояние поиска
export const stateSearch = atom<boolean>(false)

//Состояние окна результатов поиска
export const resultSearchWindows = atom<boolean>(false)

// Состояние кнопки вызова специалисти  Монтаж и Установка - кнопка
export const requestInstallationBtn = atom<boolean>(false)
// Заказать обратный звонок - кнопка
export const requestConsultationBtn = atom<boolean>(false)

// Состояние окна добавление в карзину , кнопка "Добавить в корзину"
export const addStorButton = atom<boolean>(false)
// Состояние окна быстрого заказа товара кнопка "Быстрый заказ"
export const fastOrderButton = atom<boolean>(false)

// Запрос выездв специалиста из карточки товара кнопка "Монтаж"
export const callSpecialistButton = atom<boolean>(false)
