import React from 'react';
import { Link } from 'react-router-dom';
import slider from '../img/slider.jpg';
import slider180deg from '../img/slider180deg.jpeg';

const Slider = () => {
  return (
    <div className="wrapper">
      <div className="slider__pictures">
        <Link className="slider__image" to="/">
          <img src={slider} alt="slide img" />
        </Link>
        <Link className="slider__image" to="/">
          <img src={slider180deg} alt="slide img" />
        </Link>
        <Link className="slider__image" to="/">
          <img src={slider} alt="slide img" />
        </Link>
        <Link className="slider__image" to="/">
          <img src={slider180deg} alt="slide img" />
        </Link>
        <div className="arrow slider__arrow slider__arrow_left"></div>
        <div className="arrow slider__arrow slider__arrow_right"></div>
        <div className="slider__circles">
          <button className="slider__circle" value="0"></button>
          <button className="slider__circle" value="1"></button>
          <button className="slider__circle" value="2"></button>
          <button className="slider__circle" value="3"></button>
        </div>
        <h2 className="h2">Сладкие новости</h2>
      </div>
    </div>
  );
};

const SalesNews = () => {
  return (
    <div className="sales-and-news__items">
      {salesItemsData.map(item => <div key={item.id} className={`sales-and-news__item sales-and-news__item_${item.id}`}>
        <Link to={item.to} className="sales-and-news__item-link">
          <h3 className="h3">{item.title[0]}<br /><span>{item.title[1]}</span></h3>
        </Link>
      </div>)}
      <div className="sales-and-news__news">
        <div className="sales-and-news__arrow sales-and-news__arrow_up arrow"></div>
        {salesNewsData.map(item =>
          <div key={item.id} className="sales-and-news__new">
            <time dateTime={item.time}>{item.pubdate}</time>
            <Link className="sales-and-news__item-link" to={item.to}>{item.title}</Link>
          </div>)}
        <div className="sales-and-news__arrow sales-and-news__arrow_down arrow"></div>
      </div>
    </div>
  );
};

const salesItemsData = [
  {
    id: 1,
    to: "/",
    title: ["Скидка на первый заказ 10%"],

  },
  {
    id: 2,
    to: "/",
    title: ["Доставка от суммы заказа 5000 р. бесплатно!"]
  },
  {
    id: 3,
    to: "/",
    title: ["Индивидуальный декор"]
  },
  {
    id: 4,
    to: "/",
    title: ["Приятные бонусы постоянным клиентам!"]
  }
];

const salesNewsData = [
  {
    id: 1,
    to: "/",
    time: "2020-05-18 00:00",
    pubdate: "18 мая 2020",
    title: "Мы используем только натуральные продукты!"
  },
  {
    id: 2,
    to: "/",
    time: "2020-05-21 00:00",
    pubdate: "21 мая 2020",
    title: "Придерживаетесь ПП - закажите Фитнес-десерты"
  },
  {
    id: 3,
    to: "/",
    time: "2020-05-23 00:00",
    pubdate: "23 мая 2020",
    title: "Интересный факт о нашей кондитерской: самый часто заказываемый торт в этом месяце - торт СНИКЕРС"
  }
];

// const AboutUs = () => {
//   return (
//     <div>
//       <h2 className="about-us__title">Любители сладостей делают заказ
//         <br /> в интернет-магазине Дари сладости</h2>
//       <p className="about-us__text">
//         В Интернете можно встретить немало кондитерских, предлагающих десерты. Но именно к нам хочется возвращаться снова и снова.
//       </p>
//       <h3 className="about-us__text_header">Мы предлагаем вам особые условия:</h3>
//       <ol className="about-us__text">
//         <li>Индивидуальный заказ</li>
//         <li>Мы периодически проводим распродажи как женских и мужских, так и детских моделей. Вы будете приятно удивлены ценами
//           на аксессуары в магазине BosaNoga.</li>
//         <li>У нас всегда есть из чего выбрать. Неважно, какую категорию вы просматриваете: осень-зима, или же весна-лето –
//           вы всегда сможете найти варианты, подходящие вам по внешнему виду и цене.</li>
//         <li>Мы несем ответственность за все товары.</li>
//         <li>Молодые мамы будут рады обширному ассортименту детских моделей.</li>
//       </ol>
//       <p className="about-us__text">
//         Если вы ищете место, где представлены обувные новинки от самых известных брендов, то вы зашли по верному адресу.
//       </p>
//       <p className="about-us__text">
//         У нас представлены модели для мужчин, женщин, а также детские сапоги, босоножки, ботинки и туфли. Сделав заказ в нашем интернет-магазине,
//         вы сможете быть модным и стильным как осенью-зимой, так и весной-летом. Просто наберите номер нашего телефона, и мы
//         поможем вам определиться с покупкой.
//       </p>
//       <span className="about-us__text_overlay"></span>
//       <button className="about-us__text_button">читать</button>
//     </div>
//   );
// };

export { Slider, SalesNews,}; //AboutUs };