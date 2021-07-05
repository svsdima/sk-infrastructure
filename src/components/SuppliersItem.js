import React from 'react'

const SuppliersItem = ({ supplier }) => {
    return (
        <div className="suppliers_item">
            <div className="suppliers_img">
                <img src={supplier.img} alt={supplier.name} />
            </div>
        </div>
    )
}

export default SuppliersItem
