import type { Service } from "../types/types";


export const mockServices: Service[] = [
  {
    id: 1,
    name: 'Повышение класса обслуживания',
    description: 'Переход в бизнес-класс со скидкой 30%',
    price: 15000,
    category: 'Комфорт'
  },
  {
    id: 2,
    name: 'Дополнительный багаж',
    description: '+10 кг к норме провоза багажа',
    price: 3000,
    category: 'Багаж'
  },
  {
    id: 3,
    name: 'Премиум-зал ожидания',
    description: 'Доступ в бизнес-зал на 3 часа',
    price: 2500,
    category: 'Комфорт'
  },
  {
    id: 4,
    name: 'Страхование путешествия',
    description: 'Полное страхование на время поездки',
    price: 2000,
    category: 'Страхование'
  },
  {
    id: 5,
    name: 'Питание на борту',
    description: 'Специальное меню от шеф-повара',
    price: 1500,
    category: 'Питание'
  },
  {
    id: 6,
    name: 'Быстрая регистрация',
    description: 'Приоритетная регистрация и посадка',
    price: 1200,
    category: 'Услуги'
  },
  {
    id: 7,
    name: 'Трансфер из аэропорта',
    description: 'Комфортабельный автомобиль до отеля',
    price: 3500,
    category: 'Трансфер'
  },
  {
    id: 8,
    name: 'Wi-Fi на борту',
    description: 'Высокоскоростной интернет на весь полет',
    price: 800,
    category: 'Интернет'
  }
];