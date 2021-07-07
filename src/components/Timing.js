import React, { Component } from 'react'



// In the future, fix it to normal view

export default class Timing extends Component {
    state = {
        value: ''
    }
    
    updateValue = e => {
    this.setState({
        value: e.target.value
    })
    console.log(this.state.value)
    }
    
    render() {
        return (
            <div className="timing">
            <div className="container">
                <div className="timing_wrapper">
                    <h3 className="timing_title">Сроки завершения работ:</h3>
                    <div className="timing_range">
                        <p>100 м.</p>
                        <input className="timing_input"
                            max={10000}
                            min={100}
                            step={100}
                            type="range"
                            value={this.state.value}
                            onChange={this.updateValue}
                        />
                        <p>10000 м.</p>
                    </div>
                    <div>
                        <p>{this.daysText}</p>
                        <p>{Math.ceil((this.state.value / 1000) * 5)}</p>
                        <span className="timing_day">рабочих дня*</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
