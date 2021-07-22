import React from 'react'
import { Link } from 'react-router-dom';
import togglePopup from './functions/TogglePopup';


const Popup = () => {
    return (
        <div className="popup">
            <div className="close" onClick={togglePopup}></div>
            <div>
                <form action="#" id="popup_form" className="popup_form">
                    <div className="popup_title">Заказать обратный звонок</div>
                    <div className="popup_wrapper">
                        <div className="popup_item">
                            <label htmlFor="formName" className="popup_label" >Представьтесь, пожалуйста*</label>
                            <input id="formName" type="text" name="name" className="popup_input" />
                        </div>
                        <div className="popup_item">
                            <label htmlFor="formPhone" className="popup_label" >Ваш телефон*</label>
                            <input id="formPhone" type="tel" name="phone" className="popup_input" />
                        </div>
                        <div className="checkbox">
                            <input id="formAgreement" type="checkbox" name="agreement" className="checkbox_input" />
                            <label htmlFor="formAgreement" className="checkbox_label" >
                                Я соглашаюсь с <Link to="/">политикой конфиденциальности</Link>*
                            </label>
                        </div>
                        <button type="submit" className="btn"><span>Перезвоните мне</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup
