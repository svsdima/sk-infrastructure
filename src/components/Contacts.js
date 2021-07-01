import React from 'react';
import { Link } from 'react-router-dom';
import Address from './Address'
import Form from './Form'

const Contacts = () => {
    return (
        <div className="contacts" style={{ backgroundImage: `url("/img/map.jpg")` }}>
            <div className="container">
                <div className="contacts_wrapper">
                    <div className="contacts_left">
                        <div className="links">
                            <Link  to="/">Главная</Link>/<span>Контакты</span>
                        </div>
                        <h2 className="title">Контакты</h2>
                        <Address/>
                        <button className="btn btn-download">
                            <div className="btn-download_icon">
                                <img src="/img/download.svg" alt="download" />
                            </div>
                            <span>Скачать реквизиты</span>
                        </button>
                        <h3 className="descr_title">Информационная карта участника тендера:</h3>
                        <button className="btn btn-download">
                            <div className="btn-download_icon">
                                <img src="/img/download.svg" alt="download" />
                            </div>
                            <span>Скачать файл PDF</span>
                        </button>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
