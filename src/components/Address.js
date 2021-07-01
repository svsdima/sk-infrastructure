import React from 'react';
import { Link } from 'react-router-dom';


const Address = () => {
    return (
        <>
            <div className="descr">
                <h3 className="descr_title">Офис в Санкт-Петербурге:</h3>
                <ul className="descr_list">
                    <li className="descr_link">
                        <Link to="#">
                            <i className="fas fa-phone-alt"></i>
                            <span>+7 (812) 438-26-35</span>
                        </Link>
                    </li>
                    <li className="descr_link">
                        <Link to="#">
                            <i className="far fa-envelope"></i>
                            <span>info@skinfra.ru</span>
                        </Link>
                    </li>
                    <li className="descr_link">
                        <Link to="#">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>195197, Санкт-Петербург, Кондратьевский пр., д. 15, к. 2, л. З, офис 204 БЦ "Фернан Леже"</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Address
