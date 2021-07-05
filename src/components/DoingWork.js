import React from 'react'

const DoingWork = () => {
    return (
        <div className='doing-work'>
            <div className="container">
                <h2 className="title">Выполняем работу строго следуя:</h2>
                <div className="doing-work_wrapper">
                    <div className="doing-work_item">
                        <div className="doing-work_up">
                            <div className="doing-work_number">01</div>
                            <div className="doing-work_img">
                                <img src={'/img/doing-work/1-legislation.svg'} alt={'legislation'} />
                            </div>
                        </div>
                        <div className="doing-work_descr">Законодательству</div>
                    </div>
                    <div className="doing-work_item">
                        <div className="doing-work_up">
                            <div className="doing-work_number">02</div>
                            <div className="doing-work_img">
                                <img src={'/img/doing-work/2-documentation.svg'} alt={'documentation'} />
                            </div>
                        </div>
                        <div className="doing-work_descr">СНиП, СанПиН, нормативной документации</div>
                    </div>
                    <div className="doing-work_item">
                        <div className="doing-work_up">
                            <div className="doing-work_number">03</div>
                            <div className="doing-work_img">
                                <img src={'/img/doing-work/3-regulations.svg'} alt={'3-regulations'} />
                            </div>
                        </div>
                        <div className="doing-work_descr">Внутреннему регламенту</div>
                    </div>
                </div>
                <div className="doing-work_down">
                    <div className="doing-work_subtitle">Являемся членом СРО «Строительство. Инженерные системы»</div>
                    <button className="btn">Ознакомиться с выпиской</button>
                </div>
            </div>
            
        </div>
    )
}

export default DoingWork
