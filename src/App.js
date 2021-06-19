import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import './styles/app.scss';

function App() {
  return (
    <Router>
        <Header/>
        <Route path="/" component={MainSection} exact />
    </Router>
  );
}

export default App;
