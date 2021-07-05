import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Projects from './components/Projects';
import Vacancies from './components/Vacancies';
import WaterSupply from './components/WaterSupply';
import './styles/app.scss';

function App() {
  return (
    <Router>
        <Header/>
        <Route path="/contacts" component={Contacts} />
        <Route path="/projects" component={Projects} />
        <Route path="/vacancies" component={Vacancies} />
        <Route path="/water-supply" component={WaterSupply} />
        <Route path="/" component={MainSection} exact />
    </Router>
  );
}

export default App;
