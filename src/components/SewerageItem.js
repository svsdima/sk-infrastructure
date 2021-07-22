import React from 'react'

const SewerageItem = ({ sewerage }) => {
    return (
        <div className="sewerage_item" style={{ backgroundImage: `url(${sewerage.img})`}}>
            <div className="sewerage_item_wrapper">
                <h3 className="sewerage_title">{sewerage.name}</h3>
            </div>
        </div>
    )
}

export default SewerageItem
