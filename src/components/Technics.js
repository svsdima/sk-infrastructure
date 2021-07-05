import React from 'react'
import { technics } from '../data'
import TechnicsItem from './TechnicsItem'

const Technics = () => {
    return (
        <div className="technics">
            <div className="container">
                <div className="technics_wrapper">
                    <div className="technics_list">
                        {technics.map(technic => (
                            <div key={technic._id} className="technics_item" >
                                <TechnicsItem technic={technic} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technics
