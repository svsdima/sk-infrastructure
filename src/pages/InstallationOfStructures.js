import React from 'react'
import { Link } from 'react-router-dom';
import DoingWork from '../components/DoingWork'
import Footer from '../components/Footer'
import MainProjects from '../components/mainComponents/MainProjects'
import Suppliers from '../components/Suppliers'

const InstallationOfStructures = () => {
    return (
        <div className="sewerage">
            <div className="container">
                <div className="links">
                        <Link  to="/">Главная</Link>/
                        <Link  to="/">Услуги</Link>/
                        <span>Монтаж Ж/Б конструкций</span>
                </div>
                <h2 className="title">Монтаж Ж/Б конструкций</h2>
                <h3 className="subtitle">Строительная компания "Инфраструктура" осуществляет монтаж металлических конструкций любой сложности и масштабов работ на объектах жилого и коммерческого назначения.</h3>
            </div>
        <Suppliers/>
        <DoingWork/>
        <MainProjects/>
        <Footer/>
        </div>
    )
}

export default InstallationOfStructures
