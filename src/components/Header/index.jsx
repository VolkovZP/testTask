import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.sass';

export default function Header() {
  return (
    <header>
      <div className={style.head}>
        <div className={style.headContainer}>
          <nav className={style.navList}>
            <div className={style.headLogo}>Мой Сад</div>
            <ul className={style.list}>
              <li>
                <NavLink className={style.link} to='/'>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink className={style.link} to='/cart'>
                  Корзина
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
