import React from 'react';
import { Link } from 'react-router-dom';
import toggleMenu from './functions/ToggleFunction';

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu_close" onClick={toggleMenu}>
                <i className="fas fa-times"></i>
            </div>
            <ul className="menu_list">
                <li className="menu_link" onClick={toggleMenu}>
                    <Link to='/' >Главная</Link>
                </li>
                <li className="menu_link">
                    <Link to='/' >Компания</Link>
                </li>
                <li className="menu_link menu_link_subtitle">
                    <Link to='/' >Вакансии</Link>
                </li>
                <li className="menu_link">
                    <Link to='/' >Услуги</Link>
                </li>
                <li className="menu_link menu_link_subtitle">
                    <Link to='/' >Сети водоснабжения</Link>
                </li>
                <li className="menu_link menu_link_subtitle">
                    <Link to='/' >Водоотведение и канализация</Link>
                </li>
                <li className="menu_link menu_link_subtitle">
                    <Link to='/' >Наружные тепловые сети</Link>
                </li>
                <li className="menu_link menu_link_subtitle">
                    <Link to='/' >Монтаж Ж/Б конструкции</Link>
                </li>
                <li className="menu_link menu_link_subtitle">
                    <Link to='/' >Благоустройство территорий</Link>
                </li>
                <li className="menu_link">
                    <Link to='/' >Проекты</Link>
                </li>
                <li className="menu_link" onClick={toggleMenu}>
                    <Link to='/contacts' >Контакты</Link>
                </li>
                <li className="menu_link">
                    <Link to='/' >Политика конфиденциальности</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
