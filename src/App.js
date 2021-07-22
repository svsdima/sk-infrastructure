import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Header from './components/Header';
import HeatingNetwork from './components/HeatingNetwork';
import InstallationOfStructures from './components/InstallationOfStructures';
import Landscaping from './components/Landscaping';
import MainSection from './components/MainSection';
import Popup from './components/Popup';
import Projects from './components/Projects';
import Sewerage from './components/Sewerage';
import Vacancies from './components/Vacancies';
import WaterSupply from './components/WaterSupply';
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
