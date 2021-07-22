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
                    <div className="timing_up">
                        <h3 className="timing_title">Сроки завершения работ:</h3>
                        <div className="timing_range">
                            <p className="timing_min">100 м.</p>
                            <input className="timing_input"
                                max={10000}
                                min={100}
                                step={100}
                                type="range"
                                value={this.state.value}
                                onChange={this.updateValue}
                            />
                            <p className="timing_max">10000 м.</p>
                        </div>
                        <div className="timing_day">
                            <p className="timing_day-meter">{this.state.value ? this.state.value : "5000"} <span className="timing_day-text">м*</span></p>
                            <div className="timing_day-dash"></div>
                            <p className="timing_day-calc">{Math.ceil((this.state.value / 1000) * 5) ? Math.ceil((this.state.value / 1000) * 5) : "25-29"} <span className="timing_day-text">рабочих дня*</span></p>
                        </div>
                    </div>
                    <div className="timing_down">
                        <div className="timing_calc">* Ориентировочный расчет</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
