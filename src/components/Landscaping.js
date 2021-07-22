import React from 'react'
import { Link } from 'react-router-dom';
import { landscapings } from '../data';
import DoingWork from './DoingWork';
import Footer from './Footer';
import LandscapingItem from './LandscapingItem';
import MainProjects from './mainComponents/MainProjects';
import Suppliers from './Suppliers';
import Technics from './Technics';
import Timing from './Timing';
import WeTakeOver from './WeTakeOver';

const Landscaping = () => {
    return (
        <div className="sewerage">
            <div className="container">
                <div className="links">
                        <Link  to="/">Главная</Link>/
                        <Link  to="/">Услуги</Link>/
                        <span>Благоустройство территорий</span>
                </div>
                <h2 className="title">Благоустройство территорий</h2>
                <h3 className="subtitle">Строительная компания "Инфраструктура" осуществляет полный перечень работ в области благоустройства территории:</h3>
                <div className="landscaping_wrapper">
                    {landscapings.map(landscaping => (
                        <div key={landscaping._id}>
                            <LandscapingItem landscaping={landscaping} />
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

export default Landscaping
