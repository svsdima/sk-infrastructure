import React from 'react'
import { Link } from 'react-router-dom';
import { landscapings } from '../data';
import DoingWork from '../components/DoingWork';
import Footer from '../components/Footer';
import LandscapingItem from '../components/LandscapingItem';
import MainProjects from '../components/mainComponents/MainProjects';
import Suppliers from '../components/Suppliers';
import Technics from '../components/Technics';
import Timing from '../components/Timing';
import WeTakeOver from '../components/WeTakeOver';

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
