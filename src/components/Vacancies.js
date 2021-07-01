import React from 'react';
import { Link } from 'react-router-dom';
import vacancies from '../vacancies';
import Footer from './Footer';
import VacancyItem from './VacancyItem';

const Vacancies = () => {
    return (
        <>
            <div className="vacancies">
                <div className="container">
                    <div className="links">
                        <Link  to="/">Главная</Link>/<span>Проекты</span>
                    </div>
                    <h2 className="title">Вакансии</h2>
                </div>
                {vacancies.map(vacancy => (
                    <div key={vacancy._id}>
                        <VacancyItem vacancy={vacancy} />
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Vacancies
