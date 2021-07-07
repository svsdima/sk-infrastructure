import React from 'react'
import { Link } from 'react-router-dom';
import { waterSupply } from '../data';
import DoingWork from './DoingWork';
import Footer from './Footer';
import MainProjects from './mainComponents/MainProjects';
import Suppliers from './Suppliers';
import Technics from './Technics';
import Timing from './Timing';
import WaterSupplyItem from './WaterSupplyItem';
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
                <div className="water-supply_wrapper">
                    {waterSupply.map(supply => (
                        <div key={supply._id}>
                            <WaterSupplyItem waterSupply={supply} />
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

export default WaterSupply
