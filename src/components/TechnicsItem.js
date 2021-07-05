import React from 'react'

const TechnicsItem = ({ technic }) => {
    function PositionLeft() {
        return (
            <div className="technics_left" style={{ backgroundColor: `${technic.bgColor}`}} >
               <div className="container">
                    <div className="technics_wrapper">
                        <h3 className="technics_title">{technic.name} <span>{technic.descr}</span></h3>
                        <div className="technics_left_img">
                            <img src={technic.img} alt={technic.img} />
                        </div>
                    </div>
               </div>
            </div>
        )
        
    }

    function PositionRight() {
        return (
            <div className="technics_right" style={{ backgroundColor: `${technic.bgColor}`}} >
               <div className="container">
                    <div className="technics_wrapper">
                        <h3 className="technics_title">{technic.name}</h3>
                        <div className="technics_right_img">
                            <img src={technic.img} alt={technic.img} />
                        </div>
                    </div>
               </div>
            </div>
        )
    }

    function CheckPosition() {
        const isPosition = technic.position;

        if (isPosition === 'left') {
            return <PositionLeft/>
        }
        return <PositionRight/>
    }

    return (
        <CheckPosition/>
    )
}

export default TechnicsItem
