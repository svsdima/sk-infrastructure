import React from 'react'

const LandscapingItem = ({ landscaping }) => {
    return (
        <div className="landscaping_item" style={{ backgroundImage: `url(${landscaping.img})`}}>
            <div className="landscaping_item_wrapper">
                <h3 className="landscaping_title">{landscaping.name}</h3>
            </div>
        </div>
    )
}

export default LandscapingItem
