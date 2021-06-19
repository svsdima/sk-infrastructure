import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="subtitle">Работаем по всей России</h2>
            <div className="descr">
                <h3>Офис в Санкт-Петербурге:</h3>
                <ul>
                    <li>
                        <Link to="#">
                            <i className="fas fa-phone-alt"></i>
                            <span>+7 (812) 438-26-35</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fas fa-phone-alt"></i>
                            <span>info@skinfra.ru</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fas fa-phone-alt"></i>
                            <span>195197, Санкт-Петербург, Кондратьевский пр., д. 15, к. 2, л. З, офис 204 БЦ "Фернан Леже"</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
