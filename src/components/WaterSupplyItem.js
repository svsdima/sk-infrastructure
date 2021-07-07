import React from 'react'

const WaterSupplyItem = ({ waterSupply }) => {
    return (
        <div className="water-supply_item" style={{ backgroundImage: `url(${waterSupply.img})`}}>
            <div className="water-supply_item_wrapper">
                <h3 className="water-supply_title">{waterSupply.name}</h3>
            </div>
        </div>
    )
}

export default WaterSupplyItem
