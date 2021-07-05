import React from 'react'
import { suppliers } from '../data'
import SuppliersItem from './SuppliersItem'


const Suppliers = () => {
    return (
        <div className="suppliers">
            <div className="container">
                <h3 className="subtitle">Используем</h3>
                <h2 className="title">оборудование, инструменты и материалы</h2>
                <h3 className="subtitle">только <span>надежных</span> поставщиков и производителей</h3>
                <div className="suppliers_wrapper">
                    {suppliers.map(supplier => (
                        <div key={supplier._id}>
                            <SuppliersItem supplier={supplier} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Suppliers
