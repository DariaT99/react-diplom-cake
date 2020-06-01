import React, { Component } from 'react';
import Subscribe from './Subscribe';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubscribed: false
    };
  };

  subscribed = () => {
    this.setState({
      isSubscribed: true
    });
  };

  render() {
    return (
      <footer className="footer">
        <section className="subscribe">
          <div className="subscribe__wrapper">
            <h2 className="subscribe__title">подписаться на рассылку новостей</h2>
            {!this.state.isSubscribed ?
              <Subscribe subscribed={this.subscribed} /> :
              <div>Подписка оформлена! Спасибо!</div>}
          </div>
        </section>
        <div className="footer__bottom">
          <div className="wrapper">
            <div className="footer__menus">
              <div className="footer__menu footer__menu_about">О кондитерской
                <ul>
                  <li><a>DariSladosti</a></li>
                  <li><a>Новости</a></li>
                  <li><a>Отзывы</a></li>
                </ul>
              </div>
              {/*<div className="footer__menu footer__menu_collection">Коллекции*/}
                {/*<ul>*/}
                  {/*<li><a>Обувь</a></li>*/}
                  {/*<li><a>Аксессуары</a></li>*/}
                  {/*<li><a>Для дома</a></li>*/}
                {/*</ul>*/}
              {/*</div>*/}
              <div className="footer__menu footer__menu_help">  Помощь
                <ul>
                  <li><a>Как заказать?</a></li>
                  <li><a>Доставка</a></li>
                  <li><a>Контакты</a></li>
                </ul>
              </div>
            </div>
            <div className="footer__info">
              <h3 className="footer__info_title">Принимаем к оплате:</h3>
              <div className="footer__paid-systems">
                <div className="footer__paid footer__paid_paypal"></div>
                <div className="footer__paid footer__paid_master-card"></div>
                <div className="footer__paid footer__paid_visa"></div>
                <div className="footer__paid footer__paid_yandex"></div>
                <div className="footer__paid footer__paid_webmoney"></div>
                <div className="footer__paid footer__paid_qiwi"></div>
              </div>
              <div className="footer__social-links">
                <h3 className="footer__social-links_title">Мы в соц.сетях:</h3>
                <div className="footer__social-link footer__social-link_twitter"></div>
                <div className="footer__social-link footer__social-link_vk"></div>
              </div>
              <div className="footer__copyright">2019-2020 © Dari sladosti - твоя любимая кондитерская! <br /> Все права защищены. Доставка по всей Чувашии!</div>
            </div>
            <div className="footer__contacts"><a className="footer__phone" href="tel:+7-961-346-75-89">+7 961 346 75 89</a>
              <p className="footer__phone_text">Ежедневно: с 09-00 до 21-00</p><a className="footer__email" href="mailto:darisladosti@gmail.com">darisladosti@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
};

export default Footer;