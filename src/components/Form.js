import React from 'react';
import { Link } from 'react-router-dom';


const Form = () => {
    
    return (
        <div className="form">
            <form action='#' id="form" className="form_body">
                <div className="form_title">Свяжитесь с нами</div>
                <div className="form_subtitle">Задайте вопрос, пришлите коммерческое предложение или пригласите на тендер</div>
                <div className="form_wrapper">
                    <div className="form_item">
                        <label htmlFor="formName" className="form_label" >Представьтесь, пожалуйста*</label>
                        <input id="formName" type="text" name="name" className="form_input" />
                    </div>
                    <div className="form_item">
                        <label htmlFor="formPhone" className="form_label" >Ваш телефон*</label>
                        <input id="formPhone" type="tel" name="phone" className="form_input" />
                    </div>
                    <div className="form_item">
                        <div className="file">
                            <div className="file_item">
                                <input id="formImage" accept=".jpg, .png, .gif" type="file" name="image" className="file_input" />
                                <button className="file_btn">
                                    <span>Прикрепить файл</span>
                                    <div className="file_btn_icon">
                                        <img src="/img/form_file.svg" alt="form_file" />
                                    </div>
                                </button>
                            </div>
                            <div className="file_preview"></div>
                        </div>
                    </div>
                    <button type="submit" className="btn"><span>Перезвоните мне</span></button>
                </div>
                <div className="checkbox">
                    <input id="formAgreement" type="checkbox" name="agreement" className="checkbox_input" />
                    <label htmlFor="formAgreement" className="checkbox_label" >
                        <span>Я соглашаюсь с <Link to="/">политикой конфиденциальности</Link>*</span>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default Form
