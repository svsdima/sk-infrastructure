import React from 'react'
import { Link } from 'react-router-dom';
import { networks } from '../data';
import DoingWork from './DoingWork';
import Footer from './Footer';
import HeatingNetworkItem from './HeatingNetworkItem';
import MainProjects from './mainComponents/MainProjects';
import Suppliers from './Suppliers';
import Technics from './Technics';
import Timing from './Timing';
import WeTakeOver from './WeTakeOver';

const HeatingNetwork = () => {
    return (
        <div className="network">
            <div className="container">
                <div className="links">
                        <Link  to="/">Главная</Link>/
                        <Link  to="/">Услуги</Link>/
                        <span>Наружные тепловые сети</span>
                </div>
                <h2 className="title">Наружные тепловые сети</h2>
                <h3 className="subtitle">Строительная компания "Инфраструктура" осуществляет полный перечень работ по монтажу наружных тепловых сетей и индивидуальных тепловых пунктов на жилых и промышленных объектах:</h3>
                <div className="network_wrapper">
                    {networks.map(network => (
                        <div key={network._id}>
                            <HeatingNetworkItem network={network} />
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

export default HeatingNetwork
