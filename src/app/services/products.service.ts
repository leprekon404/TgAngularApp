import { Injectable } from '@angular/core';

const domain = 'https://www.kinopoisk.ru';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    /* image: domain + product.image, */
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    /* id: '29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/src/app/img/бесцеллер.jpg',
    image: '/img/icons/products/icon-ts.svg', 
    text: 'Основы, типы, компилятор, классы, generic, утилиты, декораторы, advanced...',
    time: 'С опытом • 2 недели',
    type: ProductType.Skill, */
    id: '29',
    title: 'Великая красота, 2013',
    link: '/film/677566/',
    image: 'https://clck.ru/3AbxEj',
    text: 'Тони Сервилло, Карло Вердоне',
    time: 'Паоло Соррентино',
    type: ProductType.Skill,
  },
  {
    id: '33',
    title: 'Паразиты, 2019',
    link: '/film/1043758/',
    image: 'https://clck.ru/3Abx9H',
    text: 'Сон Кан-хо, Ли Сон-гюн, Чо Ё-джон',
    time: 'Пон Джун-хо',
    type: ProductType.Intensive,
  },
  {
    id: '26',
    title: 'Невезучие, 2003',
    link: '/film/14287/cast/',
    image: 'https://clck.ru/3Ac2Td',
    text: 'Жерар Депардье, Жан Рено, Ришар Берри',
    time: 'Франсис Вебер',
    type: ProductType.Course,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  // конкретный продукт
  getById(id: string | null) {
    return this.products.find((p) => p.id === id);
  }
	
  //распределения по блокам в компоненте
  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}
