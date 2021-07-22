import React from 'react'

const HeatingNetworkItem = ({ network }) => {
    return (
        <div className="network_item" style={{ backgroundImage: `url(${network.img})`}}>
            <div className="network_item_wrapper">
                <h3 className="network_title">{network.name}</h3>
            </div>
        </div>
    )
}

export default HeatingNetworkItem
