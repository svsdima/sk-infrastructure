import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="burger">
                <span></span>
            </div>
            <div className='header-right'>
                <div className="phone">
                    <a href="tel:+78124016495"><span>+7 (812) </span>401-64-95</a>
                </div>
                <button className="btn btn-call">
                    <i className="fas fa-phone-alt"></i>
                    Обратный звонок
                </button>
            </div>
        </div>
    )
};

export default Header;