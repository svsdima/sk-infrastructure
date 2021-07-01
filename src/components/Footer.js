import React from 'react';
import Address from './Address';
import Form from './Form';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <h2 className="title">Работаем по всей России</h2>
                    <Address/>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Footer
