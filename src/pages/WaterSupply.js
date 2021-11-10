import React from 'react'
import { Link } from 'react-router-dom';
import DoingWork from '../components/DoingWork';
import Footer from '../components/Footer';
import MainProjects from '../components/mainComponents/MainProjects';
import Suppliers from '../components/Suppliers';
import Technics from '../components/Technics';
import Timing from '../components/Timing';
import WeTakeOver from '../components/WeTakeOver';
import WaterSupplyItem from '../components/WaterSupplyItem';
import { waterSupply } from '../data';


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
