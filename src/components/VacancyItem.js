import React from 'react'

const VacancyItem = ({ vacancy }) => {

    function PositionLeft() {
        return (
            <div className="vacancies_left" >
               <div className="container">
                    <div className="vacancies_left_bg" style={{ backgroundImage: `url(${vacancy.img})`}}>
                        <div>
                            <h3 className="descr_title">{vacancy.name}</h3>
                            <h4 className="descr_subtitle">Должностные обязанности:</h4>
                            <ul className="vacancies_list">
                                {vacancy.responsibilities.map(responsibility => (
                                    <li className="vacancies_item">{responsibility}</li>
                                ))}
                            </ul>
                            <div className="vacancies_requirement">
                                <span>Требования и условия</span>
                            </div>
                            <button className="btn">Откликнуться на вакансию</button>
                        </div>
                    </div>
               </div>
            </div>
        )
        
    }

    function PositionRight() {
        return (
            <div className="vacancies_right">
                <div className="container">
                    <div className="vacancies_right_bg" style={{ backgroundImage: `url(${vacancy.img})`}}>
                        <div>
                            <h3 className="descr_title">{vacancy.name}</h3>
                            <h4>Должностные обязанности:</h4>
                            <ul className="vacancies_list">
                                {vacancy.responsibilities.map(responsibility => (
                                    <li className="vacancies_item">{responsibility}</li>
                                ))}
                            </ul>
                            <div className="vacancies_requirement">
                                <span>Требования и условия</span>
                            </div>
                            <button className="btn">Откликнуться на вакансию</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function CheckPosition() {
        const isPosition = vacancy.position;

        if (isPosition === 'left') {
            return <PositionLeft/>
        }
        return <PositionRight/>
    }

    return (
        <CheckPosition/>
    )
}

export default VacancyItem
