import React from 'react';
import { Link } from 'react-router-dom';
import ScrollOnClick from './functions/ScrollOnClick';
import toggleMenu from './functions/ToggleMenu';

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
                <li className="menu_link" onClick={toggleMenu}>
                    <Link to='/' >Компания</Link>
                </li>
                <li className="menu_link menu_link_subtitle" onClick={toggleMenu}>
                    <Link to='/vacancies' >Вакансии</Link>
                </li>
                <li className="menu_link" onClick={toggleMenu}>
                    <Link to='/' >Услуги</Link>
                </li>
                <li className="menu_link menu_link_subtitle" onClick={toggleMenu}>
                    <Link to='/water-supply' >Сети водоснабжения</Link>
                </li>
                <li className="menu_link menu_link_subtitle" onClick={toggleMenu}>
                    <Link to='/sewerage' >Водоотведение и канализация</Link>
                </li>
                <li className="menu_link menu_link_subtitle" onClick={toggleMenu}>
                    <Link to='/heating-network' >Наружные тепловые сети</Link>
                </li>
                <li className="menu_link menu_link_subtitle" onClick={toggleMenu}>
                    <Link to='/installation-Of-structures' >Монтаж Ж/Б конструкции</Link>
                </li>
                <li className="menu_link menu_link_subtitle" onClick={toggleMenu}>
                    <Link to='/landscaping' >Благоустройство территорий</Link>
                </li>
                <li className="menu_link" onClick={toggleMenu}>
                    <Link to='/projects' >Проекты</Link>
                </li>
                <li className="menu_link" onClick={toggleMenu}>
                    <Link to='/contacts' >Контакты</Link>
                </li>
                <li className="menu_link" onClick={toggleMenu}>
                    <Link to='/' >Политика конфиденциальности</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
