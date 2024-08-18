export const toggleScrollBar  = (flag:boolean) => {
    document.body.style.overflow = flag ? 'hidden' : '';
}


/*export const findPageNumber = (value: string) => {
  const linkLength = value.split(" ").length - 2;
  const findLinkElement = value.split(" ").slice(linkLength).slice(0, 1);
  const findLastPage = findLinkElement[0].split("&", 4).slice(-1);
  const [numberPage] = findLastPage[0].split("").slice(6, 7);
  return numberPage;
};*/
/*
{
    "id": "4",
    "name": "Canon EOS Camera",
    "desc": "Камера с разрешением 24,2 Мп и возможностью записи видео в Фулл-ХД",
    "price": 200,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Газировки"
},
{
    "id": "5",
    "name": "Dell XPS Laptop",
    "desc": "Ноутбук с процессором Intel Core i7 и памятью до 16 ГБ",
    "price": 2000,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Фрукты"
},
{
    "id": "6",
    "name": "Sony PlayStation",
    "desc": "Консоль для игр с поддержкой-online многопользовательских игр",
    "price": 20000,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Мясо"
},
{
    "name": "Bosch Vacuum asd",
    "desc": "Узел пылесоса с мощностью до 1500 Вт и автоматическим режимом",
    "price": "30",
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Крупы",
    "id": "7"
},
{
    "id": "8",
    "name": "Philips Shaver",
    "desc": "Электрический бритвенный прибор для мужчин и женщин",
    "price": 3000,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Морепродукты"
},
{
    "id": "9",
    "name": "Samsung Refrigerator",
    "desc": "Холодильник с функцией автоматического приготовления еды и контроля влажности",
    "price": 30000,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Газировки"
},
{
    "id": "10",
    "name": "Coca-cola",
    "desc": "Микроволновая печь с функцией slow cooking и контролем влажности",
    "price": 40,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Газировки"
},
{
    "name": "Dell XPS ",
    "desc": "Ноутбук с процессором Intel Core i7 и памятью до 16 ГБ",
    "price": "2000",
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Фрукты",
    "id": "11"
},
{
    "id": "12",
    "name": "Sony PlayStation",
    "desc": "Консоль для игр с поддержкой-online многопользовательских игр",
    "price": 20000,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Мясо"
},
{
    "id": "13",
    "name": "Bosch Vacuum Cleaner",
    "desc": "Узел пылесоса с мощностью до 1500 Вт и автоматическим режимом",
    "price": 30,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Крупы"
},
{
    "id": "14",
    "name": "Philips Shaver",
    "desc": "Электрический бритвенный прибор для мужчин и женщин",
    "price": 3000,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Морепродукты"
},
{
    "id": "15",
    "name": "Samsung Refrigerator",
    "desc": "Холодильник с функцией автоматического приготовления еды и контроля влажности",
    "price": 30000,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Газировки"
},
{
    "id": "16",
    "name": "Coca-cola",
    "desc": "Микроволновая печь с функцией slow cooking и контролем влажности",
    "price": 40,
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Газировки"
},
{
    "name": "Человек",
    "desc": "Тоавар челоека",
    "price": "32300",
    "image": "https://tolyatti.dom-massaga.ru/assets/images/files/15018004_l.jpg",
    "category": "Газировки",
    "id": "123"
},
{
    "name": "fafasfd",
    "desc": "asfdasdfasdfasdfasfd",
    "price": "678",
    "image": "https://tolyatti.dom-massaga.ru/assets/images/files/15018004_l.jpg",
    "category": "Газировки",
    "id": "55543"
},
{
    "name": "Чай",
    "desc": "Tom Clancy's Rainbow Six",
    "price": "123123",
    "image": "https://p.turbosquid.com/ts-thumb/ce/Ia8pal/6rY45nqc/01/jpg/1425364969/1920x1080/fit_q99/e460897bff0d1d2281ff9047a71cb574d6dc35b1/01.jpg",
    "category": "Газировки",
    "id": "555555"
},
{
    "name": "Apple iPhone 13",
    "desc": "Смартфон с камерой 12 Мп и аккумулятором 4500 мАч",
    "price": "102",
    "image": "https://drink-drink.ru/wp-content/uploads/2022/11/kola3.jpg",
    "category": "Газировки",
    "id": "1"
},
{
    "name": "фывафыва",
    "desc": "фыавпывапывапывапывапывап",
    "price": "34123412 ",
    "image": "https://c.dns-shop.ru/thumb/st4/fit/100/100/bfad264417771c9330c56cc4cf8ff415/e0fb0ad1e7171d7723301881b0af7d8cefc7f6af55ab49fbab9b729f6a1de5ce.png",
    "category": "Лимонады",
    "id": "344"
}*/
