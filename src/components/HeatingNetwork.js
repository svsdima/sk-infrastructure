import React from 'react'
import { Link } from 'react-router-dom';
import DoingWork from './DoingWork';
import Footer from './Footer';
import MainProjects from './mainComponents/MainProjects';
import Suppliers from './Suppliers';
import Technics from './Technics';
import WeTakeOver from './WeTakeOver';

const HeatingNetwork = () => {
    return (
        <div className="heating-network">
            <div className="container">
                <div className="links">
                        <Link  to="/">Главная</Link>/
                        <Link  to="/">Услуги</Link>/
                        <span>Наружные тепловые сети</span>
                </div>
                <h2 className="title">Наружные тепловые сети</h2>
            </div>
        <WeTakeOver/>
        <Technics/>
        <Suppliers/>
        <DoingWork/>
        <MainProjects/>
        <Footer/>
        </div>
    )
}

export default HeatingNetwork
