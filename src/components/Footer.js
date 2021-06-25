import React from 'react';
import Contacts from './Contacts';
import Form from './Form';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <Contacts/>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Footer
