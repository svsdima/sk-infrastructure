import React from 'react'
import { Link } from 'react-router-dom';
import { sewerages } from '../data';
import DoingWork from './DoingWork';
import Footer from './Footer';
import MainProjects from './mainComponents/MainProjects';
import SewerageItem from './SewerageItem';
import Suppliers from './Suppliers';
import Technics from './Technics';
import Timing from './Timing';
import WeTakeOver from './WeTakeOver';

const Sewerage = () => {
    return (
        <div className="sewerage">
            <div className="container">
                <div className="links">
                        <Link  to="/">Главная</Link>/
                        <Link  to="/">Услуги</Link>/
                        <span>Водоотведение и канализация</span>
                </div>
                <h2 className="title">Водоотведение и канализация</h2>
                <h3 className="subtitle">Строительная компания "Инфраструктура" предлагает услуги монтажа систем водоотведения и канализации, включая:</h3>
                <div className="sewerage_wrapper">
                    {sewerages.map(sewerage => (
                        <div key={sewerage._id}>
                            <SewerageItem sewerage={sewerage} />
                        </div>
                    ))}
                </div>
            </div>
        <Timing/>
        <WeTakeOver/>
        <Technics/>
        <Suppliers/>
        <DoingWork/>
        <MainProjects/>
        <Footer/>
        </div>
    )
}

export default Sewerage
