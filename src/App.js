import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
// Pages
import MainSection from './pages/MainSection';
import Vacancies from './pages/Vacancies';
import WaterSupply from './pages/WaterSupply';
import Popup from './components/Popup';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Sewerage from './pages/Sewerage';
import HeatingNetwork from './pages/HeatingNetwork';
import InstallationOfStructures from './pages/InstallationOfStructures';
import Landscaping from './pages/Landscaping';
// Animation


import './styles/app.scss';

function App() {
  return (
    <Router>
        <Header/>
        <Popup/>
        <Route path="/contacts" component={Contacts} />
        <Route path="/projects" component={Projects} />
        <Route path="/vacancies" component={Vacancies} />
        <Route path="/sewerage" component={Sewerage} />
        <Route path="/heating-network" component={HeatingNetwork} />
        <Route path="/installation-Of-structures" component={InstallationOfStructures} />
        <Route path="/landscaping" component={Landscaping} />
        <Route path="/water-supply" component={WaterSupply} />
        <Route path="/" component={MainSection} exact />
    </Router>
  );
}

export default App;
