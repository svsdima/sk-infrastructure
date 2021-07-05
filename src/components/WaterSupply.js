import React from 'react'
import { Link } from 'react-router-dom';
import DoingWork from './DoingWork';
import Footer from './Footer';
import MainProjects from './mainComponents/MainProjects';
import Suppliers from './Suppliers';
import Technics from './Technics';
import WeTakeOver from './WeTakeOver';


const WaterSupply = () => {
    return (
        <div className="water-supply">
            <div className="container">
                <div className="links">
                        <Link  to="/">Главная</Link>/
                        <Link  to="/">Услуги</Link>/
                        <span>Монтаж сетей водоснабжения</span>
                </div>
                <h2 className="title">Монтаж сетей водоснабжения</h2>
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

export default WaterSupply
