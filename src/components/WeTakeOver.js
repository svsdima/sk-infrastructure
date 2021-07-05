import React from 'react'

const WeTakeOver = () => {
    return (
        <div className="take-over">
            <div className="container">
                <h2 className="title">Мы берем на себя</h2>
                <div className="take-over_wrapper">
                    <div className="take-over_list-up">
                        <div className="take-over_item">
                            <div className="take-over_img">
                                <img src={'/img/we-take-over/1-collection.svg'} alt={'collection'} />
                            </div>
                            <div className="take-over_descr">Сбор и подготовка рабочей документации</div>
                            <div className="take-over_arrow">
                                <img src={'/img/we-take-over/arrow-right.svg'} alt={'arrow-right'} />
                            </div>
                        </div>
                        <div className="take-over_item">
                            <div className="take-over_img">
                                <img src={'/img/we-take-over/2-design.svg'} alt={'design'} />
                            </div>
                            <div className="take-over_descr">Проектирование</div>
                            <div className="take-over_arrow">
                                <img src={'/img/we-take-over/arrow-right.svg'} alt={'arrow-right'} />
                            </div>
                        </div>
                        <div className="take-over_item">
                            <div className="take-over_img">
                                <img src={'/img/we-take-over/3-reconciliation.svg'} alt={'reconciliation'} />
                            </div>
                            <div className="take-over_descr">Согласование проекта</div>
                        </div>
                    </div>
                    <div className="take-over_list-center">
                        <div className="take-over_arrow-down">
                            <img src={'/img/we-take-over/arrow-down.svg'} alt={'arrow-down'} />
                        </div>
                    </div>
                    <div className="take-over_list-down">
                        <div className="take-over_item">
                            <div className="take-over_img">
                                <img src={'/img/we-take-over/4-service.svg'} alt={'service'} />
                            </div>
                            <div className="take-over_descr">Сервисное обслуживание</div>
                            <div className="take-over_arrow">
                                <img src={'/img/we-take-over/arrow-left.svg'} alt={'arrow-left'} />
                            </div>
                        </div>
                        <div className="take-over_item">
                            <div className="take-over_img">
                                <img src={'/img/we-take-over/5-commissioning-works.svg'} alt={'commissioning-works'} />
                            </div>
                            <div className="take-over_descr">Пусконаладочные работы</div>
                            <div className="take-over_arrow">
                                <img src={'/img/we-take-over/arrow-left.svg'} alt={'arrow-left'} />
                            </div>
                        </div>
                        <div className="take-over_item">
                            <div className="take-over_img">
                                <img src={'/img/we-take-over/6-construction-works.svg'} alt={'construction-works'} />
                            </div>
                            <div className="take-over_descr">Строительно-монтажные работы</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WeTakeOver
